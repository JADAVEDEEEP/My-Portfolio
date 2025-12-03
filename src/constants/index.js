import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate MERN stack developer with a strong interest in building dynamic, responsive, and scalable web applications. As a fresher, I have developed a solid foundation in front-end technologies like React.js and back-end technologies including Node.js and Express.js, with hands-on experience in MongoDB for database management. My goal is to create innovative, full-stack solutions that enhance user experience and drive meaningful impact.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic MERN stack developer with a passion for crafting efficient and user-friendly web applications. As a fresher, I have explored the complete web development cycle using MongoDB, Express.js, React.js, and Node.js. My journey into full stack development began with curiosity about how modern web technologies work together, and it has evolved into a commitment to building seamless and high-performing digital solutions. I enjoy working on real-world projects, learning new tools and frameworks, and collaborating with others to bring creative ideas to life. Outside of coding, I love exploring emerging technologies`;

export const EXPERIENCES = [
  {
    year: "01/2024 - 04/2024",
    role: "Full Stack Intern",
    company: "Six Sigma Technosoft",
    description: `I developed robust .NET Core Web APIs integrated with SQL Server databases using SSMS across multiple projects, implementing RESTful endpoints for CRUD operations, authentication, and authorization with JWT tokens.`,
    technologies: [".NET Core", "React.js", "SSMS"],
  },
  {
    year: "09/2024 - 04/2025",
    role: "MERN Stack Developer Intern",
    company: "Uptake Infotech",
    description: `As a MERN Stack Developer Intern, I contributed to developing dynamic and responsive web applications using HTML, CSS, Bootstrap, and JavaScript. I also worked with Laravel backend and PHPMyAdmin for database handling.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Laravel",
      "PHPMyAdmin",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website Task",
    image: project1,
    description:
      "Designed responsive UI using HTML, CSS, and Bootstrap. Integrated JavaScript for product filtering, single-product views, and cart checkout using Fake Store API.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Fake Store API"],
    company: "Uptake Infotech",
    date: "Dec 2024",

    challenges: [
      "Finding the right public API was difficult because many APIs lacked required fields like price, reviews, or product images. After researching multiple sources, I selected Fake Store API as it provided complete and consistent data.",
      "Implementing filtering based on category, price, and rating required creating multiple conditions and ensuring proper DOM updates.",
      "Building a single-product page dynamically was new, and I learned to use URL search parameters to fetch detailed product data.",
      "Product images were not storing correctly inside localStorage, and after debugging, I fixed this by refetching product data on cart load.",
      "Managing add-to-cart, delete-item, updating total price, and tax calculation needed structured logic and reusable functions.",
      "Ensuring the cart resets after placing an order required clearing localStorage and updating the UI state correctly.",
    ],
  },

  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Built with React.js, Vite, Tailwind CSS, and Framer Motion featuring smooth animations and mobile responsiveness.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    company: "Personal Project",
    date: "Aug 2024",

    challenges: [
      "Implementing Framer Motion animations without breaking layout required careful control of transitions and viewport triggers.",
      "Making the website fully mobile-responsive demanded custom breakpoints and Tailwind utility classes.",
      "Optimizing image loading and preventing layout shift issues during animation.",
      "Managing component structure became difficult, and I solved it by creating reusable UI components.",
      "Ensuring smooth navigation and zero refresh transition handling in Vite setup.",
    ],
  },

  {
    title: "Product Management CRUD System",
    image: project5,
    description:
      "Built a complete CRUD system for product management using React, Node.js, Express.js, and JWT authentication. Implemented API integration, secure data handling, and interactive UI functionality.",
    technologies: ["Node.js", "Express.js", "React.js", "JWT"],
    date: "Oct 2025",

    challenges: [
      "Designing secure CRUD APIs required proper validation, error handling, and structured controller functions.",
      "Implementing JWT authentication was challenging as token verification and protected routes needed clean middleware.",
      "Handling asynchronous backend responses in React while keeping UI updated required correct state management.",
      "Updating product records dynamically using PUT routes caused UI sync issues, solved by using controlled components.",
      "Building a reusable Axios API service to handle all HTTP calls efficiently.",
      "Debugging CORS issues during frontend-backend communication until proper CORS middleware configuration was applied.",
    ],
  },
];

export const CONTACT = {
  address: "New Ranip, Krishna Bunglows-1, Block No-42, Ahmedabad",
  phoneNo: "+91 958 628 175 8",
  email: "jadavdeep560@gmail.com",
};
