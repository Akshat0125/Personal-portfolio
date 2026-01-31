import { Github, Linkedin, Mail } from "lucide-react";

// Custom X Icon
const XIcon = ({ className }: { className?: string }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export const PERSONAL_INFO = {
    name: "Akshat Upadhyay",
    title: "Rust & Web3 Developer",
    subtitle: "Blockchain Engineer | AI-ML Enthusiast",
    description:
        "Passionate blockchain and Rust developer focused on building secure, scalable Web3 applications with strong foundations in systems programming, smart contracts, and modern frontend engineering.",
    about:
        "I am a Computer Science undergraduate specializing in AI & ML with strong interests in Rust, Web3, and blockchain development. I enjoy building decentralized applications, system-level tools, and scalable frontends inspired by real-world products like MetaMask. My focus is on writing clean, secure, and maintainable code while continuously exploring emerging technologies.",
    email: "akshatupadhyay2501@gmail.com",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/Akshat0125",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/akshat-up",
            icon: Linkedin,
        },
        {
            name: "X (Twitter)",
            url: "https://x.com/AkshatU07822878",
            icon: XIcon,
        },
        {
            name: "Email",
            url: "mailto:akshatupadhyay2501@gmail.com",
            icon: Mail,
        },
    ],
};

export const SKILLS = [
    { category: "Languages", items: ["Rust", "Solidity", "JavaScript", "Python", "Java", "HTML5", "CSS3", "SQL"] },
    { category: "Frameworks & Libs", items: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Web3.js", "Ethers.js"] },
    { category: "Blockchain", items: ["Ethereum", "Smart Contracts", "Hardhat", "Truffle", "MetaMask"] },
    { category: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code"] },
    { category: "AI & ML", items: ["Prompt Engineering", "NLP Applications", "Model Deployment"] },
];

export const PROJECTS = [
    {
        title: "Decentralized Voting DApp",
        description:
            "A transparent and tamper-proof voting platform built on Ethereum using smart contracts to ensure immutable vote recording, secure authentication, and real-time result tracking.",
        tech: ["Solidity", "React", "Web3.js", "Hardhat", "Ethereum"],
        links: {
            demo: "https://decentravote-green.vercel.app/",
            repo: "https://github.com/Akshat0125/Voting-dApp",
        },
    },
    {
        title: "File Processing CLI Tool",
        description:
            "A high-performance Rust-based CLI tool for efficient file parsing and asynchronous data processing using Tokio runtime and Serde serialization.",
        tech: ["Rust", "Tokio", "Serde"],
        links: {
            repo: "https://github.com/Akshat0125/File-Processing-CLI-Tool.git",
        },
    },
    {
        title: "Personal Portfolio Website",
        description:
            "This portfolio itself — continuously evolving. Built with Next.js 14 and Tailwind CSS.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        links: {
            demo: "https://personal-portfolio-nine-omega-25.vercel.app/",
            repo: "https://github.com/Akshat0125/Personal-portfolio.git",
        },
    },
];

export const EXPERIENCE = [
    {
        role: "Contributor",
        company: "Mindrift",
        year: "2025",
        description: "Contributed to an AI-powered tutoring platform. Hands-on experience with prompt engineering and AI tool integration.",
    },
    {
        role: "Freelance Developer",
        company: "Self-Employed",
        year: "Present",
        description: "Delivering international software solutions. Built ML and NLP-based applications for automation and data analysis.",
    },
];

export const EDUCATION = [
    {
        degree: "B.Tech CSE (AI & ML)",
        school: "Galgotias College of Engineering and Technology",
        year: "2023 – 2027",
        location: "Greater Noida, India",
    },
];
