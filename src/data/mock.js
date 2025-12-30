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
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
      github: "https://github.com/souravverma3738/Napier_Bank_Messaging"
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
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
      github: "https://github.com/souravverma3738/shawarmaore-website",
      liveUrl: "https://dubaishawarmore.co.uk"
    },
    {
      id: 3,
      name: "River Garden Training",
      description: "Comprehensive training management system for healthcare staff with course enrollment, compliance tracking, and certificate generation.",
      technologies: ["Node.js", "React", "PostgreSQL", "NestJS", "Docker", "Kubernetes"],
      highlights: [
        "Built role-based training matrix system reducing manual administration by 70%",
        "Integrated Zoom/Teams, SendGrid, and Twilio APIs for seamless communication",
        "Deployed using Docker containers and Kubernetes on Azure infrastructure",
        "Supports 500+ concurrent users with real-time compliance monitoring"
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      github: "https://github.com/souravverma3738/river_garden",
      liveUrl: "https://staff.training.academyoflondon.co.uk/"
    },
    {
      id: 4,
      name: "Bank Converter",
      description: "Document conversion tool for accountants to easily convert bank statements and invoices to Excel format, streamlining financial data processing.",
      technologies: ["Python", "Pandas", "openpyxl", "PyPDF2", "Flask"],
      highlights: [
        "Automated conversion of PDF bank statements and invoices to Excel spreadsheets",
        "Intelligent data extraction and formatting for accounting workflows",
        "Support for multiple bank statement formats with 95% accuracy",
        "Reduced manual data entry time by 80% for accounting teams"
      ],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
      github: "https://github.com/souravverma3738/bank_convertor",
      liveUrl: "https://bank.alkhalid.co.uk"
    },
    {
      id: 5,
      name: "HR Analytics Dashboard",
      description: "Interactive Power BI dashboard for comprehensive HR metrics analysis, employee attrition tracking, and workforce insights to support data-driven HR decisions.",
      technologies: ["Power BI", "DAX", "Data Modeling", "Excel"],
      highlights: [
        "Built interactive visualizations tracking 15+ key HR metrics including attrition rate, employee demographics, and performance indicators",
        "Designed DAX measures for complex calculations reducing manual reporting time by 60%",
        "Created department-wise and role-based analytics enabling targeted retention strategies",
        "Implemented dynamic filtering and drill-down capabilities for deeper workforce insights"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      github: "https://github.com/souravverma3738/HR-Analytics-Dashboard"
    },
    {
      id: 6,
      name: "Ecommerce Sales Dashboard",
      description: "Comprehensive Power BI dashboard analyzing e-commerce sales performance, customer behavior, and revenue trends to optimize business strategies.",
      technologies: ["Power BI", "DAX", "Data Analysis", "Excel"],
      highlights: [
        "Analyzed sales data across multiple regions and product categories with real-time KPI tracking",
        "Built advanced DAX calculations for profit margins, sales growth, and customer segmentation",
        "Created interactive visualizations for revenue trends, top-performing products, and seasonal patterns",
        "Enabled data-driven decision making with dynamic filters and custom metrics reducing analysis time by 50%"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      github: "https://github.com/souravverma3738/Ecommerce-Sales-Dashboard"
    },
    {
      id: 7,
      name: "AI Supply Chain Management System",
      description: "Intelligent system leveraging JADE framework for optimizing supplier-customer matching and pricing strategies.",
      technologies: ["Java", "JADE", "MySQL", "AI Agents"],
      highlights: [
        "Achieved 20% reduction in time-to-market through intelligent agent coordination",
        "Enhanced procurement efficiency by 25% with optimized matching algorithms",
        "Improved database performance by 15% through SQL query optimization"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
      github: "https://github.com/souravverma3738/Agent-based-Supply-Chain"
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