// ============================================================
// portfolioData.js — Single Source of Truth
// This one file controls ALL personal text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Mahesh Badiginchala",
  firstName: "Mahesh Badiginchala",
  brandName: "Mahesh Badiginchala", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Proddatur, India",
  phone: "7659963522",
  emails: {
    primary: "badiginchalamahesh9@gmail.com",
    secondary: "badiginchalamahesh9@gmail.com",
  },
  summary: "Final-year Computer Science student and Java Full Stack Developer experienced in building scalable web applications with React and Spring Boot.",
  resumeUrl: "/MaheshJavaCV.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/MaheshBadiginclala",
  linkedin: "https://www.linkedin.com/in/mahesh-badiginchala-83028242b/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Mahesh Badiginchala",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Final-year Computer Science graduate skilled in Java, Spring Boot, and React, building scalable web applications and impactful digital solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:badiginchalamahesh9@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/MaheshJavaCV.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mahesh Badiginchala</span>, a final-year Computer Science graduate and Java Full Stack Developer based in Proddatur, India, sharpening my skills through the placement training program at TAP Academy. Passionate about writing clean code and solving real-world problems, I develop full-stack applications using Core Java, Spring Boot, React, and modern databases. I am eager to start my career as a software engineer where I can contribute to impactful digital solutions and grow within a collaborative team.`,
  techStack: ["Java", "Spring Boot", "React", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, clean-code approach to engineering dependable web applications and scalable APIs.",
  cards: [
    { number: "01", title: "Research", text: "Analyzing system requirements, data models, and API architecture to design a robust foundation." },
    { number: "02", title: "Design", text: "Creating intuitive UI wireframes and designing normalized database schemas for optimal performance." },
    { number: "03", title: "Develop", text: "Writing clean, modular code with Core Java, Spring Boot REST APIs, and responsive React interfaces." },
    { number: "04", title: "Deploy", text: "Testing thoroughly, optimizing endpoints, and deploying production-ready builds on modern cloud platforms." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Core Java" },
        { name: "Python" },
        { name: "JavaScript" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "React.js" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Advanced Java" },
        { name: "Spring" },
        { name: "Spring Boot" },
        { name: "Hibernate" },
        { name: "JDBC" },
        { name: "REST APIs" },
        { name: "Servlets" },
        { name: "JSP" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Object-Oriented Programming (OOP)" },
        { name: "Data Structures and Algorithms (DSA)" },
        { name: "CRUD Operations" },
        { name: "Authentication" },
        { name: "Role-Based Access Control" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Eclipse" },
        { name: "VS Code" },
        { name: "Git" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Development Trainee",
    duration: "2024 - Present",
    skills: ["Core Java", "OOP", "SQL", "Problem Solving", "REST APIs"],
    tech: ["Java", "Spring Boot", "Hibernate", "JDBC", "React.js", "MySQL"],
  },
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Deconstructing complex algorithmic and business logic problems into clean, efficient solutions." },
  { name: "Communication", icon: "💬", desc: "Articulating technical concepts clearly and collaborating effectively in cross-functional teams." },
  { name: "Adaptability", icon: "🔄", desc: "Quickly learning and mastering new tools, frameworks, and modern full-stack technologies." },
  { name: "Time Management", icon: "⏱️", desc: "Prioritizing tasks and meeting project milestones consistently without compromising code quality." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Library Management System",
    description: "Developed a Library Management System using Java, Spring Boot, React and MongoDB with features for book management, borrowing, returns, reservations and user management. Implemented JWT authentication, role-based access control and RESTful APIs, including search/filtering, automated fine calculation and reporting.",
    techTags: ["Java", "Spring Boot", "React", "MongoDB", "JWT", "REST APIs"],
    links: { github: "https://github.com/MaheshBadiginclala/library_management_system", demo: "" },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "AI Tourism and Travel Planner",
    description: "Developed an AI-powered tourism platform for destination discovery, real-time weather, distance calculation and personalized travel planning using React, Spring Boot, MongoDB and Gemini API. Implemented AI-generated itineraries, destination search, interactive maps and route visualization with Leaflet, CartoDB and OpenWeatherMap.",
    techTags: ["React", "Spring Boot", "MongoDB", "Gemini API", "Leaflet", "OpenWeatherMap"],
    links: { github: "https://github.com/MaheshBadiginclala/AITourism", demo: "https://aetheria-expeditions.netlify.app/" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Java Full Stack Development Training", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/mahesh-badiginchala-83028242b/",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA Honours)",
  institution: "Sri Venkateshwara College Of Arts And Computer Sciences, Kadapa, AP",
  cgpa: "7.61 CGPA",
  graduation: "2026",
  twelfth: "Intermediate (MPC) - 65.8%",
  tenth: "SSC - 9.0 CGPA",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Java · Spring Boot · React", "Building Web Applications and AI-Powered Solutions"],
  credential: "BCA Honours",
  copyright: `© ${new Date().getFullYear()} Mahesh Badiginchala | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
