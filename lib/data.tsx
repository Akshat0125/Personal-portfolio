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
    about: [
        "Computer Science undergraduate specializing in AI & ML with a focus on Rust and Web3 development. I build secure, scalable decentralized applications and PDA-controlled smart contracts on Solana using the Anchor framework, alongside high-performance systems tooling in Rust.",
        "Experienced in prompt engineering, AI tool integration, and full-stack development, with a strong foundation in blockchain architecture and modern software engineering practices.",
    ],
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
    {
        category: "Blockchain & Web3",
        items: [
            "Solana",
            "Anchor Framework",
            "Rust",
            "SPL Tokens",
            "PDAs",
            "Metaplex",
            "Solana Web3.js",
            "IPFS",
            "Ethereum",
            "Solidity",
            "Web3.js",
            "Ethers.js",
            "Hardhat",
            "Truffle",
            "Smart Contracts",
            "MetaMask",
        ],
    },
    {
        category: "Languages",
        items: ["Rust", "JavaScript", "Python", "Java", "Solidity", "HTML5", "CSS3", "SQL"],
    },
    {
        category: "Frameworks & Libraries",
        items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
        category: "Developer Tools",
        items: ["Anchor CLI", "Solana CLI", "Cargo", "Git", "GitHub", "VS Code", "Docker", "Postman"],
    },
    {
        category: "AI & ML",
        items: ["Prompt Engineering", "AI Tool Integration", "Machine Learning Model Deployment", "NLP Applications"],
    },
];

export interface Project {
    title: string;
    description: string;
    tech: string[];
    links: {
        demo?: string;
        repo?: string;
    };
    badge?: string;
}

export const PROJECTS: Project[] = [
    {
        title: "NFTicket – Soulbound Event Attendance",
        description:
            "Solana dApp minting non-transferable Soulbound NFTs as immutable proof of event attendance. Organizers launch badge events and generate QR codes for check-in; attendees mint in one click with Phantom.",
        tech: ["Solana", "Anchor", "PDAs", "Metaplex", "Next.js"],
        links: {
            demo: "https://event-attendance-nft-8y3h.vercel.app/",
            repo: "https://github.com/Akshat0125/event-attendance-nft",
        },
        badge: "Live on Devnet",
    },
    {
        title: "Anchor Escrow – Trustless Token Swap",
        description:
            "Trustless SPL token-swap program securing maker deposits in a PDA vault, with atomic taker-claim and maker-refund instructions. Full test coverage certified on Blueshift.",
        tech: ["Solana", "Anchor", "Rust", "SPL Tokens", "CPI"],
        links: {
            repo: "https://github.com/Akshat0125/ESCROW",
        },
        badge: "Blueshift Certified ✓",
    },
    {
        title: "PredictProof – Prediction Market Reputation",
        description:
            "Solana dApp on the Panta API that turns market outcomes into on-chain reputation. Scores predictors using Brier scores and win rates on a public leaderboard; top predictors mint soulbound NFT credentials on devnet via an Anchor program.",
        tech: ["Solana", "Anchor", "Rust", "Soulbound NFTs"],
        links: {
            demo: "https://predict-proof.vercel.app",
            repo: "https://github.com/Akshat0125/PredictProof",
        },
    },
    {
        title: "Voting-SOL – On-Chain Decentralized Voting",
        description:
            "Decentralized voting program on Solana built with Anchor: poll creation, candidate registration, tamper-proof votes, tested with solana-program-test.",
        tech: ["Solana", "Anchor", "Rust", "PDAs"],
        links: {
            repo: "https://github.com/Akshat0125/Voting-SOL",
        },
    },
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
            repo: "https://github.com/Akshat0125/File-Processing-CLI-Tool",
        },
    },
    {
        title: "Personal Portfolio Website",
        description:
            "This portfolio itself — continuously evolving. Built with Next.js 14 and Tailwind CSS.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        links: {
            demo: "https://personal-portfolio-nine-omega-25.vercel.app/",
            repo: "https://github.com/Akshat0125/Personal-portfolio",
        },
    },
];

export const EXPERIENCE = [
    {
        role: "Software Development Engineer (Freelance)",
        company: "Mindrift",
        year: "2025 – Present",
        description:
            "Contributing to an AI-powered tutoring platform using prompt engineering, machine learning, and NLP to deliver personalized learning experiences.",
    },
    {
        role: "Data Science Intern",
        company: "Cogknit Semantics",
        year: "Feb – Jul 2026",
        description:
            "Built a multi-threaded real-time simulation for a MANET-based project and explored ML algorithms for camouflaged object detection.",
    },
];

export interface EducationItem {
    degree: string;
    school: string;
    year: string;
    location: string;
    coursework?: string;
}

export const EDUCATION: EducationItem[] = [
    {
        degree: "Bachelor of Technology in Computer Science and Engineering (AI & ML)",
        school: "Galgotias College of Engineering and Technology",
        location: "Greater Noida, India",
        year: "2023 – 2027 (Expected)",
        coursework:
            "Data Structures, Algorithms, Database Systems, Machine Learning, Web Development",
    },
];
