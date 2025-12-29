


export const portfolioData = {
  profile: {
    name: "SOURAV VERMA",
    title: "Software Engineer",
    location: "Livingston, Scotland, UK",
    email: "souravverma1582000@gmail.com",
    phone: "+44-7824047235",
    linkedin: "https://www.linkedin.com/in/sourav-verma-b47793168/",
    github: "https://github.com/souravverma3738?tab=repositories",
    summary: "Software Engineer skilled in designing and developing cloud-native, event-driven applications using Java, Python (FastAPI), JavaScript/TypeScript, React, and Node.js. Experienced in building scalable, secure, and maintainable RESTful microservices deployed on Microsoft Azure using Docker, Kubernetes, and serverless functions.",
    image: "/image/unnamed.jpg",
  },
  
  experience: [
    {
      id: 1,
      company: "Hamden Technology Ltd",
      role: "Software Engineer Intern",
      location: "UK",
      duration: "September 2025 – November 2025",
      description: "Developed backend services using Node.js and NestJS for a Home Care Training & Compliance Portal for 200+ healthcare staff.",
      achievements: [
        "Designed and implemented RESTful APIs integrating PostgreSQL and Kafka for user management, course enrollment, certificate generation, and compliance tracking, supporting 500+ concurrent users",
        "Built a role-based training matrix system, reducing manual training administration time by 70%",
        "Integrated third-party APIs: Zoom/Teams, SendGrid, Twilio, and Firebase for communication and notifications",
        "Deployed services using Docker containers and Kubernetes on Azure/AWS infrastructure with CDN integration"
      ],
      technologies: ["Node.js", "React", "Python", "NestJS", "PostgreSQL", "Docker", "Kubernetes", "Azure", "AWS"]
    },
    {
      id: 2,
      company: "App Era Technologies",
      role: "Backend Engineer (Java)",
      location: "Noida, India (Remote)",
      duration: "November 2024 – July 2025",
      description: "Built secure, scalable backend services using Java & Spring Boot, maintaining 99.9% uptime.",
      achievements: [
        "Implemented JWT & OAuth2 authentication, reducing unauthorized access attempts by 40%",
        "Optimized MySQL/MongoDB queries and indexing, improving performance by 35% and reducing latency by 50ms",
        "Containerized microservices with Docker and orchestrated with Kubernetes",
        "Integrated CI/CD via GitHub Actions, reducing deployment time by 60%",
        "Achieved 85%+ code coverage with JUnit, reducing post-release defects by 30%"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "MongoDB", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      id: 3,
      company: "Edinburgh Napier University",
      role: "Software Engineer Intern",
      location: "Edinburgh, UK",
      duration: "January 2023 – May 2023",
      description: "Designed and developed an AI-powered supply chain management system using Java, JADE, and MySQL.",
      achievements: [
        "Engineered intelligent agents for supplier/customer matching and pricing optimization, improving efficiency by 25%",
        "Optimized SQL queries for large-scale data retrieval, boosting database performance by 15%",
        "Built an interactive desktop GUI using Java Swing, maintaining a 99% bug-free rate",
        "Authored and executed over 50 JUnit test cases, contributing to a 95% pass rate in initial testing"
      ],
      technologies: ["Java", "JADE", "MySQL", "Java Swing", "JUnit"]
    }
  ],
  
  projects: [
    {
      id: 1,
      name: "Napier Bank Messaging Platform",
      description: "Secure, real-time messaging platform for internal bank communications with end-to-end encryption and message scanning.",
      technologies: ["C#", "Email Integration", "Network Security", "Encryption"],
      highlights: [
        "Stress-tested with over 500 simulated users, ensuring 100% reliability for message encryption and data integrity",
        "Identified and patched critical security vulnerabilities, leading to a 30% reduction in reported bugs",
        "Handled over 100 distinct message scenarios with parsing and validation"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
    },
    {
      id: 2,
      name: "Dubai Shawarma More Website",
      description: "Full-stack restaurant website with REST APIs for menu management, customer orders, and contact form handling.",
      technologies: ["React", "FastAPI", "PostgreSQL", "Docker"],
      highlights: [
        "Responsive, mobile-first UI with optimized images and SEO",
        "Scalable backend with input validation and secure API endpoints",
        "Containerized application deployed to cloud hosting"
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
    },
    {
      id: 3,
      name: "AI Supply Chain Management System",
      description: "Intelligent system leveraging JADE framework for optimizing supplier-customer matching and pricing strategies.",
      technologies: ["Java", "JADE", "MySQL", "AI Agents"],
      highlights: [
        "Achieved 20% reduction in time-to-market through intelligent agent coordination",
        "Enhanced procurement efficiency by 25% with optimized matching algorithms",
        "Improved database performance by 15% through SQL query optimization"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
    }
  ],
  
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C#", "C++", "SQL", "HTML", "CSS"],
    frontend: ["React", "HTML5", "CSS3", "Responsive Design"],
    backend: ["Node.js", "Spring Boot", "FastAPI", "NestJS", "RESTful APIs"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQL Server"],
    cloud: ["Microsoft Azure", "AWS", "Docker", "Kubernetes"],
    tools: ["Git", "GitHub Actions", "VS Code", "IntelliJ", "Maven", "Gradle"],
    testing: ["JUnit", "TDD", "Unit Testing"],
    methodologies: ["Agile", "Scrum", "CI/CD", "DevOps"]
  },
  
  education: {
    degree: "Bachelor of Engineering (Hons) - Software Engineering",
    university: "Edinburgh Napier University",
    location: "Edinburgh, UK",
    duration: "September 2021 – May 2024"
  },
  
  certifications: [
    {
      name: "Master Spring Boot 3 & Spring Framework 6 with Java",
      provider: "Udemy",
      date: "May 2025"
    },
    {
      name: "Microsoft Azure: From Zero to Hero - The Complete Guide",
      provider: "Udemy",
      date: "May 2025"
    }
  ]
};
