"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background/Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Hire
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Trust</span> <br />
                        in a Digital World.
                    </h1>

                    <p className="text-xl text-muted max-w-lg">
                        {PERSONAL_INFO.title} & {PERSONAL_INFO.subtitle}. <br />
                        {PERSONAL_INFO.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
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
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="relative glass-card p-6 rounded-2xl border-none bg-gradient-to-br from-[#1A1C20] to-[#0F1012]">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <pre className="font-mono text-sm text-gray-300 overflow-x-auto p-2">
                            <code>
                                {`// system_entry.rs
struct Developer {
    name: "Akshat Upadhyay",
    role: "Blockchain Engineer",
    skills: ["Rust", "Solidty", "AI"],
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
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}
