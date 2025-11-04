import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png"; // added for new project

export const HERO_CONTENT = `I am a passionate MERN stack developer with a strong interest in building dynamic, responsive, and scalable web applications. As a fresher, I have developed a solid foundation in front-end technologies like React.js and back-end technologies including Node.js and Express.js, with hands-on experience in MongoDB for database management. My goal is to create innovative, full-stack solutions that enhance user experience and drive meaningful impact.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic MERN stack developer with a passion for crafting efficient and user-friendly web applications. As a fresher, I have explored the complete web development cycle using MongoDB, Express.js, React.js, and Node.js. My journey into full stack development began with curiosity about how modern web technologies work together, and it has evolved into a commitment to building seamless and high-performing digital solutions. I enjoy working on real-world projects, learning new tools and frameworks, and collaborating with others to bring creative ideas to life. Outside of coding, I love exploring emerging technologies`;

export const EXPERIENCES = [
  {
    year: "01/2024 - 04/2024",
    role: "Full Stack Intern",
    company: "Six Sigma Technosoft",
    description: `I developed robust .NET Core Web APIs integrated with SQL Server databases using SSMS across multiple projects, implementing RESTful endpoints for CRUD operations, authentication, and authorization with JWT tokens. I leveraged Entity Framework Core for efficient database communication, optimized API performance, and utilized Swagger for endpoint documentation.`,
    technologies: [".NET Core", "React.js", "SSMS"],
  },
  {
  year: "09/2024 - 04/2025",
  role: "MERN Stack Developer Intern",
  company: "Uptake Infotech",
  description: `As a MERN Stack Developer Intern, I contributed to developing dynamic and responsive web applications. I created engaging landing pages using HTML, CSS, and Bootstrap, and enhanced functionality through JavaScript and interactive UI components. Additionally, I worked with Laravel-based back-end systems and managed SQL databases using PHPMyAdmin, ensuring efficient data handling and smooth API integration.`,
  technologies: ["HTML","CSS", "JavaScript", "Bootstrap", "Laravel", "PHPMyAdmin"],
}
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
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Built with React.js, Vite, Tailwind CSS, and Framer Motion featuring smooth animations and mobile responsiveness.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    company: "Personal Project",
    date: "Aug 2024",
  },
  {
    title: "Trends Shop",
    image: project3,
    description:
      "Created an e-commerce app using React.js, Redux, and Firebase Firestore with authentication and real-time data synchronization.",
    technologies: ["React.js", "Redux", "Firebase Firestore"],
    company: "Academic Project",
    date: "2022–2023",
  },
  {
    title: "TIS Tender Register Portal",
    image: project4,
    description:
      "Built .NET Core APIs integrated with SQL Server stored procedures and JWT authentication. Used React.js for the front-end integration.",
    technologies: [".NET Core", "React.js", "SQL Server", "JWT"],
    company: "Six Sigma Technosoft",
    date: "2024",
  },
  {
    title: "Form Submission Server",
    image: project5,
    description:
      "Developed an Express.js server handling GET and POST routes with middleware, request parsing, and response redirects.",
    technologies: ["Node.js", "Express.js", "REST API"],
    date: "Oct 2025",
  },
];

export const CONTACT = {
  address: "New Ranip ,Krishna Bunglows-1,Block No-42,Ahmedabad",
  phoneNo: "+91 958 628 175 8",
  email: "jadavdeep560@gmail.com",
};
