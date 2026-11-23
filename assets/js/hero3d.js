/*
 * Hero 3D scene — an AI "neural core": a wireframe icosahedron with glowing
 * nodes, orbit rings, floating glass shards and a particle field.
 * Mouse-reactive lighting and parallax, scroll-linked rotation.
 * Pauses when off-screen / tab hidden; static frame for reduced motion;
 * CSS fallback when WebGL is unavailable.
 */
import * as THREE from "../vendor/three.module.min.js";

const host = document.querySelector("[data-hero-3d]");

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch (e) {
    return false;
  }
}

if (host) {
  if (!webglAvailable()) {
    document.documentElement.classList.add("no-webgl");
  } else {
    try {
      init(host);
    } catch (err) {
      console.warn("3D hero disabled:", err);
      document.documentElement.classList.add("no-webgl");
    }
  }
}

function init(container) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmall = () => window.innerWidth < 900;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x070e26, 0.045);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  const BLUE = new THREE.Color("#477BFF");
  const CYAN = new THREE.Color("#42D9E8");
  const VIOLET = new THREE.Color("#8B7CFF");

  // Root group positioned to the right of the copy on desktop.
  const root = new THREE.Group();
  scene.add(root);

  // ---- Core: wireframe icosahedron + node points --------------------------
  const coreGeo = new THREE.IcosahedronGeometry(1.75, 1);
  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(coreGeo),
    new THREE.LineBasicMaterial({ color: BLUE, transparent: true, opacity: 0.55 })
  );
  root.add(wire);

  const nodeGeo = new THREE.IcosahedronGeometry(1.75, 1);
  const nodes = new THREE.Points(
    nodeGeo,
    new THREE.PointsMaterial({
      color: CYAN,
      size: 0.09,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  root.add(nodes);

  // Inner glowing core (layered additive spheres).
  const glow = new THREE.Group();
  [
    [0.62, BLUE, 0.55],
    [0.95, VIOLET, 0.18],
    [1.35, BLUE, 0.07],
  ].forEach(([r, color, opacity]) => {
    glow.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(r, 32, 32),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false })
      )
    );
  });
  root.add(glow);

  // Solid faceted shell for lighting response.
  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 0),
    new THREE.MeshStandardMaterial({
      color: 0x101d42,
      metalness: 0.65,
      roughness: 0.25,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
      emissive: 0x0b1535,
    })
  );
  root.add(shell);

  // ---- Orbit rings ------------------------------------------------------
  const rings = [];
  [
    [2.6, CYAN, 0.5, [1.2, 0.2, 0]],
    [3.15, VIOLET, 0.35, [0.4, 0.9, 0.3]],
    [3.7, BLUE, 0.22, [1.8, -0.4, 0.6]],
  ].forEach(([radius, color, opacity, rot]) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.008, 8, 220),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    ring.rotation.set(rot[0], rot[1], rot[2]);
    // A satellite dot travelling on each ring.
    const sat = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 16, 16),
      new THREE.MeshBasicMaterial({ color, blending: THREE.AdditiveBlending })
    );
    ring.add(sat);
    ring.userData = { radius, sat, speed: 0.25 + Math.random() * 0.35, phase: Math.random() * Math.PI * 2 };
    root.add(ring);
    rings.push(ring);
  });

  // ---- Floating glass shards ------------------------------------------
  const shards = [];
  const shardMat = new THREE.MeshPhysicalMaterial({
    color: 0x8fb0ff,
    metalness: 0.2,
    roughness: 0.08,
    transmission: 0.6,
    thickness: 0.6,
    transparent: true,
    opacity: 0.75,
    flatShading: true,
  });
  const shardGeos = [new THREE.OctahedronGeometry(0.28, 0), new THREE.TetrahedronGeometry(0.3, 0), new THREE.IcosahedronGeometry(0.22, 0)];
  for (let i = 0; i < 9; i++) {
    const m = new THREE.Mesh(shardGeos[i % shardGeos.length], shardMat);
    // Keep shards on the right/back of the core so they never cover the copy.
    const a = -Math.PI * 0.55 + (i / 8) * Math.PI * 1.1;
    const r = 3.0 + Math.random() * 1.4;
    m.position.set(Math.cos(a) * r, (Math.random() - 0.5) * 3.6, Math.sin(a) * r * 0.6 - 0.5);
    m.userData = { base: m.position.clone(), speed: 0.4 + Math.random() * 0.6, phase: Math.random() * 10 };
    m.rotation.set(Math.random() * 3, Math.random() * 3, 0);
    root.add(m);
    shards.push(m);
  }

  // ---- Particle field ---------------------------------------------------
  const COUNT = isSmall() ? 650 : 1400;
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);
  const palette = [BLUE, CYAN, VIOLET, new THREE.Color("#ffffff")];
  for (let i = 0; i < COUNT; i++) {
    const r = 4 + Math.random() * 12;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(p) * Math.cos(t);
    pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t) * 0.6;
    pos[i * 3 + 2] = r * Math.cos(p) - 4;
    const c = palette[i % 7 === 0 ? 3 : i % 3];
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  starGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  scene.add(stars);

  // ---- Lights (one follows the mouse) ---------------------------------
  scene.add(new THREE.AmbientLight(0x6f86ff, 0.35));
  const key = new THREE.PointLight(0x42d9e8, 40, 30, 1.6);
  key.position.set(3, 2, 5);
  scene.add(key);
  const rim = new THREE.PointLight(0x8b7cff, 30, 30, 1.6);
  rim.position.set(-4, -2, 2);
  scene.add(rim);
  const mouseLight = new THREE.PointLight(0x477bff, 60, 18, 1.4);
  mouseLight.position.set(0, 0, 4);
  scene.add(mouseLight);

  // ---- Layout -----------------------------------------------------------
  function layout() {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (isSmall()) {
      root.position.set(0.6, 2.4, -2);
      root.scale.setScalar(0.62);
    } else {
      root.position.set(2.7, 0.1, 0);
      root.scale.setScalar(1);
    }
  }
  layout();
  let resizeT;
  window.addEventListener("resize", () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(layout, 120);
  });

  // ---- Input -----------------------------------------------------------
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true }
  );
  let scrollP = 0;
  const onScroll = () => {
    const h = container.clientHeight || window.innerHeight;
    scrollP = Math.min(1, Math.max(0, window.scrollY / h));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Loop ------------------------------------------------------------
  const clock = new THREE.Clock();
  let visible = true;
  let running = false;

  function frame() {
    const t = clock.getElapsedTime();
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;

    root.rotation.y = t * 0.12 + pointer.x * 0.35 + scrollP * 1.2;
    root.rotation.x = Math.sin(t * 0.3) * 0.12 - pointer.y * 0.25 + scrollP * 0.4;
    wire.rotation.z = t * 0.05;
    shell.rotation.set(-t * 0.18, t * 0.22, 0);
    const pulse = 1 + Math.sin(t * 1.6) * 0.06;
    glow.scale.setScalar(pulse);
    nodes.material.size = 0.085 + Math.sin(t * 2.2) * 0.015;

    rings.forEach((ring) => {
      const { radius, sat, speed, phase } = ring.userData;
      const a = t * speed + phase;
      sat.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0);
      ring.rotation.z += 0.0015;
    });

    shards.forEach((s) => {
      const { base, speed, phase } = s.userData;
      s.position.y = base.y + Math.sin(t * speed + phase) * 0.35;
      s.rotation.x += 0.004 * speed;
      s.rotation.y += 0.006 * speed;
    });

    stars.rotation.y = t * 0.012 + pointer.x * 0.05;
    stars.rotation.x = pointer.y * 0.03;

    // Mouse-following light, camera parallax and scroll dolly.
    mouseLight.position.set(pointer.x * 6, pointer.y * 4, 4);
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.04;
    camera.position.z = 9 + scrollP * 2.5;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  function loop() {
    if (!visible || document.hidden) {
      running = false;
      return;
    }
    running = true;
    frame();
    requestAnimationFrame(loop);
  }
  function start() {
    if (!running && !reduceMotion) requestAnimationFrame(loop);
  }

  if (reduceMotion) {
    frame(); // single static frame
    window.addEventListener("resize", () => setTimeout(frame, 150));
  } else {
    start();
    new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) start();
      },
      { threshold: 0 }
    ).observe(container);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) start();
    });
  }

  container.classList.add("is-live");
}
