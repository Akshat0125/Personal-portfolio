"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b",
                scrolled
                    ? "bg-slate-50/85 backdrop-blur-md border-slate-200/80 py-3 shadow-xs"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-slate-900 font-bold tracking-tight text-sm md:text-base font-mono hover:opacity-80 transition-opacity">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block" />
                    <span>AKSHAT UPADHYAY</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-slate-900 transition-colors py-1 relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="https://github.com/Akshat0125"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors py-1 border-l border-slate-200 pl-4"
                        aria-label="GitHub"
                    >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-700 hover:text-slate-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4 font-medium text-slate-700">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base hover:text-slate-900"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://github.com/Akshat0125"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-base text-slate-900 pt-2 border-t border-slate-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
