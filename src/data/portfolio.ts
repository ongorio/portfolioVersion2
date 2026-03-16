import type { SkillIconKey, SocialIconKey } from "@/lib/icon-map";

export type SocialLink = {
  label: string;
  href: string;
  iconKey: SocialIconKey;
};

export type SkillItem = {
  label: string;
  iconKey: SkillIconKey;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  start: string;
  end: string;
};

export type ProjectItem = {
  name: string;
  problemSolved: string;
  techStack: string[];
  visualNote: string;
  projectUrl: string;
};

export type EducationItem = {
  institution: string;
  program: string;
  period: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  valueProposition: string;
  about: string;
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: string[];
  navItems: Array<{ id: string; label: string }>;
};

export const portfolioData: PortfolioData = {
  name: "Isaias Alvarez Vargas",
  title: "Salesforce Developer",
  valueProposition:
    "I build reliable, business-focused software solutions that connect Salesforce, backend services, and modern web experiences.",
    
  about:
    "I am a Salesforce Developer with hands-on experience across internships and full-time roles, with a proactive mindset and a focus on maintainable systems. I enjoy turning complex business requirements into clean technical implementations.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/ongorio", iconKey: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/isaias-alvarez-vargas-654935214/",
      iconKey: "linkedin",
    },
    { label: "Resume", href: "#", iconKey: "resume" },
  ],
  skillGroups: [
    {
      category: "Coding Languages",
      items: [
        { label: "Python", iconKey: "python" },
        { label: "Javascript", iconKey: "javascript" },
        { label: "Postgresql", iconKey: "postgresql" },
      ],
    },
    {
      category: "Framework",
      items: [
        { label: "Django", iconKey: "django" },
        { label: "React", iconKey: "react" },
      ],
    },
    {
      category: "Tools",
      items: [{ label: "Git", iconKey: "git" }],
    },
    {
      category: "Cloud",
      items: [{ label: "AWS", iconKey: "aws" }],
    },
    {
      category: "Platform",
      items: [{ label: "Salesforce", iconKey: "salesforce" }],
    },
  ],
  experiences: [
    {
      company: "ANM",
      title: "Salesforce Developer",
      start: "Nov 2025",
      end: "Present",
    },
    {
      company: "Altur",
      title: "Founding Backend Engineer",
      start: "Jun 2025",
      end: "Oct 2025",
    },
    {
      company: "Intuera",
      title: "Salesforce Developer",
      start: "Jul 2024",
      end: "Jun 2025",
    },
    {
      company: "Intuera",
      title: "Salesforce Developer Intern",
      start: "Jan 2024",
      end: "Jun 2024",
    },
    {
      company: "ANM",
      title: "Salesforce Developer Intern",
      start: "Jan 2023",
      end: "Dec 2023",
    },
    {
      company: "ATG Store",
      title: "Software Developer Intern",
      start: "Jun 2019",
      end: "Jan 2022",
    },  
  ],
  projects: [
    {
      name: "ATG Store Suite",
      problemSolved: "Web App developed for the parcel company ATG STORE to manage the packages they receive through the day and keep record per store. Also helped with HR department to manage where to locate each employee and some extra features like the copy machine count, or the resupply of the stores' goods.",
      techStack: ["Python", "Django", "MySQL"],
      visualNote: "Dashboard and workflow automation preview",
      projectUrl: "#",
    },
    {
      name: "E-Rate Leads",
      problemSolved: "Custom Process for the E-Rate program to generate leads inside Salesforce that apply for the program. Design and Implemented the multi-step process to receive, parse and validate the leads, and then send them to the E-Rate program. Also handle the life cycle of the leads, from the initial submission to the final conversion.",
      techStack: ["Salesforce", "Flows", "Apex"],
      visualNote: "Integration architecture snapshot",
      projectUrl: "#",
    },
    {
      name: "Cleanup Process & Data Governance",
      problemSolved: "Engineered a scheduled cleanup process that deleted old records from a Salesforce org. This process in only two months was able to delete 1M+ records, and reduce the size of the org by 10%.",
      techStack: ["Salesforce", "Scheduled Jobs", "Apex"],
      visualNote: "Integration architecture snapshot",
      projectUrl: "#",
    },
  ],
  education: [
    {
      institution: "Tec de Monterrey",
      program: "Bachelor's Degree in Computer Science",
      period: "Aug 2020 - May 2024",
    },
  ],
  certifications: [
    "Salesforce Certified Administrator",
    "Salesforce Certified Platform Developer I",
    "Salesforce Certified Platform App Builder",
    "Salesforce Certified Agentforce Specialist",
    "Salesforce Certified AI Associate",

  ],
  navItems: [
    { id: "introduction", label: "Introduction" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
};
