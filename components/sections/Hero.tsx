"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { MouseEvent } from "react";

export function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useTransform(x, [-0.5, 0.5], [15, -15]);
    const mouseYSpring = useTransform(y, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            <ParticleBackground />
            
            {/* SVG Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h2v2h-2v-2zm-10 0h2v2h-2v-2zm20 0h2v2h-2v-2z' fill='%238b5cf6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />

            {/* Background/Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Hire
                    </div>

                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX: mouseYSpring,
                            rotateY: mouseXSpring,
                            transformStyle: "preserve-3d",
                        }}
                        className="perspective-1000"
                    >
                        <h1 
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                            style={{ transform: "translateZ(30px)" }}
                        >
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text">Trust</span> <br />
                            in a Digital World.
                        </h1>
                    </motion.div>

                    <p className="text-xl text-muted max-w-lg">
                        {PERSONAL_INFO.title} & {PERSONAL_INFO.subtitle}. <br />
                        {PERSONAL_INFO.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-6 text-muted">
                        {PERSONAL_INFO.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Hero Visual / Code Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.2, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
                    className="hidden lg:block relative"
                >
                    <div className="relative glass p-6 rounded-2xl bg-black/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] border-secondary/20">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        </div>
                        <pre className="font-mono text-sm text-cyan-50 overflow-x-auto p-2">
                            <code>
                                {`// system_entry.rs
struct Developer {
    name: "Akshat Upadhyay",
    role: "Blockchain Engineer",
    skills: ["Rust", "Solana", "AI"],
    passionate: true,
}

impl Developer {
    fn build_future(&self) -> Result<Web3, Error> {
        Ok(Web3::new()
            .secure()
            .decentralized()
            .scalable())
    }
}`}
                            </code>
                        </pre>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}
