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
    { category: "Languages", items: ["Rust", "TypeScript", "JavaScript", "Python", "Java", "HTML5", "CSS3", "SQL", "Solidity"] },
    { category: "Solana & Web3", items: ["Solana", "Anchor Framework", "SPL Tokens", "PDAs", "Solana Web3.js", "Metaplex", "IPFS"] },
    { category: "Frameworks & Libs", items: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Anchor"] },
    { category: "Blockchain Tooling", items: ["Anchor CLI", "Solana CLI", "Hardhat", "Phantom Wallet", "MetaMask"] },
    { category: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Cargo"] },
    { category: "AI & ML", items: ["Prompt Engineering", "NLP Applications", "Model Deployment"] },
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
        title: "NFTicket — Soulbound Event Attendance",
        description:
            "A full-stack Solana dApp where event organizers create custom NFT badge events and attendees mint non-transferable Soulbound NFTs as permanent on-chain proof of attendance. Organizers get a dashboard with live attendance tracking and instant QR code generation. Attendees connect their Phantom wallet, scan or enter a code, and receive a permanently frozen badge NFT in one click — zero transferability, 100% verifiable.",
        tech: [
            "Solana",
            "Anchor",
            "Metaplex",
            "TypeScript",
            "Next.js",
            "Phantom Wallet",
            "IPFS",
            "PDAs",
            "SPL Tokens",
            "Solana Web3.js",
        ],
        links: {
            demo: "https://event-attendance-nft-8y3h.vercel.app/",
            repo: "https://github.com/Akshat0125/event-attendance-nft.git",
        },
        badge: "Live on Devnet",
    },
    {
        title: "Anchor Escrow — Trustless SPL Token Swap",
        description:
            "A trustless, decentralized escrow program built on Solana using the Anchor framework. Implements the full swap lifecycle: a maker deposits Token A into a PDA-controlled vault, a taker exchanges Token B to claim it, and a refund instruction lets the maker cancel and reclaim funds at any time. All 3/3 tests passed on Blueshift — NFT achievement unlocked on-chain. Clean modular architecture with separate files for make, take, refund instructions, escrow state, and custom errors.",
        tech: [
            "Solana",
            "Anchor",
            "Rust",
            "SPL Tokens",
            "PDAs",
            "CPI",
            "Blueshift Challenge",
        ],
        links: {
            repo: "https://github.com/Akshat0125/ESCROW.git",
        },
        badge: "Blueshift Certified ✓",
    },
    {
        title: "Voting-SOL — Decentralized On-Chain Voting",
        description:
            "A fully decentralized on-chain voting program built on Solana using the Anchor framework. Supports creating polls, registering candidates, and casting tamper-proof votes — all stored on-chain with PDA-backed accounts. Includes a comprehensive test suite migrated to solana-program-test for fast, local program testing without a live cluster. Demonstrates clean Anchor program architecture with account validation, access control, and error handling in native Rust.",
        tech: [
            "Solana",
            "Anchor",
            "Rust",
            "PDAs",
            "solana-program-test",
            "On-chain Voting",
            "SPL",
        ],
        links: {
            repo: "https://github.com/Akshat0125/Voting-SOL.git",
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
