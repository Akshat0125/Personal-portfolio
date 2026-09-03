import { PERSONAL_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 text-white py-20 border-t border-slate-800 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Contact Section Header */}
                <div className="max-w-2xl space-y-6 mb-16">
                    <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider block">
                        04. Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        Let's build something meaningful.
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                        Open for freelance engineering, Solana Web3 dApp development, and Rust systems collaboration.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4 items-center">
                        <a href={`mailto:${PERSONAL_INFO.email}`}>
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-white">
                                <Mail className="w-4 h-4 mr-2" /> Say Hello <ArrowUpRight className="w-4 h-4 ml-1" />
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    {/* Left Side: Name & Subtitle */}
                    <div className="text-center md:text-left space-y-1">
                        <div className="font-mono text-sm font-bold text-white tracking-wider">
                            AKSHAT UPADHYAY
                        </div>
                        <p className="text-xs text-slate-400 font-mono">
                            Rust & Web3 Engineer
                        </p>
                    </div>

                    {/* Middle: Icon Links */}
                    <div className="flex items-center gap-6 text-slate-400">
                        {PERSONAL_INFO.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Right: Copyright */}
                    <div className="text-xs text-slate-500 font-mono">
                        © {new Date().getFullYear()} Akshat Upadhyay. All rights reserved.
                    </div>

                </div>

            </div>
        </footer>
    );
}
