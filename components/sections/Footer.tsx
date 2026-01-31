import { PERSONAL_INFO } from "@/lib/data";

export function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-white/5 bg-[#08090A]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
                {/* Left Side: Name & Title */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white">Akshat Upadhyay</h3>
                    <p className="text-sm text-muted">Rust & Web3 Developer</p>
                </div>

                {/* Right Side: Socials & Copyright */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex items-center gap-6">
                        {PERSONAL_INFO.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted hover:text-primary transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                    <div className="text-xs text-muted/40">
                        © {new Date().getFullYear()} Akshat Upadhyay. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
