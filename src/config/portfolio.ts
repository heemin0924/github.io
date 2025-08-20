export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    email: string;
    location: string;
    phone?: string;
    avatar: string;
    resumeUrl?: string;
  };
  hero: {
    greeting: string;
    headline: string;
    description: string;
    ctaText: string;
  };
  about: {
    title: string;
    description: string;
    highlights: string[];
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    dribbble?: string;
  };
  projects: Project[];
  skills: Skill[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Heemin Kim",
    title: "Full-Stack Developer & UI/UX Designer",
    email: "heemin0924@gmail.com",
    location: "Seoul, South Korea",
    phone: "+82 10-7120-4997",
    avatar: "https://raw.githubusercontent.com/heemin0924/heemin0924.github.io/main/profile.jpg",
    resumeUrl: "/resume.pdf"
  },
  hero: {
    greeting: "Hi there! I'm",
    headline: "Building digital experiences that matter",
    description: "I craft beautiful, functional web applications with a focus on user experience and modern technologies. Passionate about clean code and pixel-perfect designs.",
    ctaText: "View My Work"
  },
  about: {
    title: "About Me",
    description: "I'm a passionate full-stack developer with 5+ years of experience building web applications that users love. I specialize in React, Node.js, and modern JavaScript technologies, with a keen eye for design and user experience.",
    highlights: [
      "5+ years of professional development experience",
      "Expert in React, TypeScript, and Node.js",
      "Strong background in UI/UX design principles",
      "Contributor to open-source projects",
      "Certified AWS Solutions Architect"
    ]
  },
  social: {
    github: "https://github.com/heeminkim",
    linkedin: "https://linkedin.com/in/heeminkim",
    twitter: "https://twitter.com/heeminkim",
    instagram: "https://instagram.com/heeminkim"
  },
  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/heeminkim/ecommerce-platform",
      featured: true
    },
    {
      id: "task-management",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced project tracking features. Built with modern web technologies.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://taskapp-demo.example.com",
      githubUrl: "https://github.com/heeminkim/task-management",
      featured: true
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and customizable widgets. Integrates with multiple weather APIs.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://weather-dashboard.example.com",
      githubUrl: "https://github.com/heeminkim/weather-dashboard",
      featured: false
    },
    {
      id: "portfolio-cms",
      title: "Portfolio CMS",
      description: "A headless CMS specifically designed for developer portfolios. Features markdown support, image optimization, and easy deployment to static hosting platforms.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Contentful", "Vercel", "GraphQL"],
      liveUrl: "https://portfolio-cms.example.com",
      githubUrl: "https://github.com/heeminkim/portfolio-cms",
      featured: false
    }
  ],
  skills: [
    // Frontend
    { name: "React", level: 5, category: "frontend" },
    { name: "TypeScript", level: 5, category: "frontend" },
    { name: "Vue.js", level: 4, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "SCSS/Sass", level: 4, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 5, category: "backend" },
    { name: "Python", level: 4, category: "backend" },
    { name: "PostgreSQL", level: 4, category: "backend" },
    { name: "MongoDB", level: 4, category: "backend" },
    { name: "GraphQL", level: 3, category: "backend" },
    { name: "REST APIs", level: 5, category: "backend" },
    
    // Tools
    { name: "Git", level: 5, category: "tools" },
    { name: "Docker", level: 4, category: "tools" },
    { name: "AWS", level: 4, category: "tools" },
    { name: "Webpack", level: 3, category: "tools" },
    { name: "Jest", level: 4, category: "tools" },
    { name: "Cypress", level: 3, category: "tools" },
    
    // Design
    { name: "Figma", level: 4, category: "design" },
    { name: "Adobe XD", level: 3, category: "design" },
    { name: "UI/UX Design", level: 4, category: "design" },
    { name: "Responsive Design", level: 5, category: "design" }
  ]
};