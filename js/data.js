const portfolioData = {
  // Personal Information
  personal: {
    name: "Subham Khadka",
    title: "MERN Stack Developer",
    bio: "BSc Computing student at NAMI, passionate about full-stack development and exploring the frontiers of AI technology.",
    institution: "Naaya Aayam Multi-disciplinary Institute (NAMI)",

    // About section
    about: [
      "I'm currently pursuing my BSc in Computing at Naaya Aayam Multi-disciplinary Institute (NAMI), where I'm building a strong foundation in software development and computer science fundamentals.",
      "My journey in tech is focused on mastering the MERN stack (MongoDB, Express.js, React, Node.js), which allows me to build complete, scalable web applications from front to back. I'm passionate about creating efficient, user-friendly solutions that solve real-world problems.",
      "Beyond web development, I'm exploring the exciting world of Artificial Intelligence, staying curious about how AI can transform the way we build and interact with technology.",
    ],
  },

  // Skills
  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    learning: ["Python", "Java", "AI/ML Fundamentals"],
  },

  // Projects
  projects: [
    {
      title: "E-Commerce Backend API",
      description:
        "Building a comprehensive RESTful API for an e-commerce platform with authentication, product management, cart functionality, and order processing.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      status: "In Development",
      link: "https://ecom-api-1hbm.onrender.com/", // Add GitHub link or null if not available
    },
    {
      title: "Student Management System",
      description:
        "A Java-based application for managing student records, attendance, and grades with an intuitive user interface.",
      tech: ["Java", "Swing", "JDBC"],
      status: "Completed",
      link: null,
    },
    // Add more projects
  ],

  // Social Links
  social: {
    github: "https://github.com/SubhamKhadka99",
    linkedin: "https://www.linkedin.com/in/subham-khadka/",
    email: "subhamkhadka99@gmai.com",
  },
};

// ==========================================
// INSTRUCTIONS FOR ADDING NEW CONTENT
// ==========================================

/*

TO ADD A NEW PROJECT:
Copy this template and add it to the projects array above:

{
    title: 'Your Project Name',
    description: 'A brief description of what the project does and the problem it solves.',
    tech: ['Technology1', 'Technology2', 'Technology3'],
    status: 'Completed', // or 'In Development'
    link: 'https://github.com/yourusername/project-repo' // or null
}

TO ADD A NEW SKILL:
Simply add the skill name to the appropriate array:
- Frontend skills → skills.frontend
- Backend skills → skills.backend
- Tools → skills.tools
- Currently learning → skills.learning

TO UPDATE YOUR INFO:
Change the values in the personal object at the top of this file.

*/
