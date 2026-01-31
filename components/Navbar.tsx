"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-[#0F1012]/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <span className="font-bold text-sm text-primary group-hover:text-white">AU</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Akshat Upadhyay</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=akshatupadhyay2501@gmail.com', '_blank')}>
                        Let's Talk
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0F1012] border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-muted hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=akshatupadhyay2501@gmail.com', '_blank')}>
                                Let's Talk
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
