import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. i am fresher were , I have honed my skills in front-end technologies like React js, as well as back-end technologies like .Net, SSMS,. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web application, my Background is fresher I have worked with technologies, including React+vite, .Net Core, SSMS Database, and javaScript. My journey in Full stack Development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "01/2024- 04/2024",
    role: "Full Stack Intern",
    company: "Six Sigma Technosoft.",
    description: `I developed robust .NET Core Web APIs integrated with SQL Server databases using SSMS across multiple projects, implementing RESTful endpoints for CRUD operations, authentication, and authorization with JWT tokens. I leveraged Entity Framework Core for efficient database communication, optimized API performance and scalability, and utilized Swagger for enhancing endpoint documentation..`,
    technologies: [".Net", "React.js", "SSMS"],
  },
 
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      " user can fill their all details and view all the products were they can add to cart or buy.",
    technologies: ["HTML", "CSS", "React", "javaScript", "Redux","Firebase Database","Vs Code"],
  },
  {
    title: "Tis Tender Register Portal",
    image: project2,
    description:
      "I created a .NET Core Web API integrated with SQL Server using SSMS and Entity Framework, utilizing stored procedures for database operations. I established the database connection through Entity Framework, implemented RESTful endpoints for CRUD operations, and secured the API with JWT-based authentication and authorization. Additionally, I integrated Swagger for API documentation..",
    technologies: [".Net Core", "SSMS Database"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "vite+React", "TialWindCss","Framer Motion"],
  },
  {
    title: "Quiz App",
    image: project4,
    description:
      "I developed a stored procedure in SSMS to create and manage a question and option list for candidates, integrated with a .NET Core Web API. This API, documented with Swagger, handles the retrieval and management of these lists, leveraging the stored procedure for database interactions. RESTful endpoints were implemented for authentication and authorization using JWT tokens, ensuring secure access to the question and option data.",
    technologies: [".Net Core", "SSMS Database"],
  },
];

export const CONTACT = {
  address: "404 Block B Maruti Amarkunj-2 Gandhinagar, gujrat, 382002 ",
  phoneNo: "+91 958 628 175 8 ",
  email: "jadavdeep560@gmail.com",
};
