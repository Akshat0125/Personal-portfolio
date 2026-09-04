"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50 border-b border-slate-200/60">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center w-full max-w-full">
                    
                    {/* Hero Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full text-left space-y-6"
                    >
                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                            <span>RUST • SOLANA • WEB3</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                            Building <span className="text-slate-900 underline decoration-orange-500/40 decoration-2 underline-offset-4">Trust</span> in a <br className="hidden sm:inline" />
                            Digital World.
                        </h1>

                        {/* Subtitle / Intro text */}
                        <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                            {PERSONAL_INFO.title} & {PERSONAL_INFO.subtitle}. <br />
                            {PERSONAL_INFO.description}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Button
                                size="lg"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Projects <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => window.open('https://github.com/Akshat0125', '_blank')}
                            >
                                <Github className="w-4 h-4 mr-1.5" /> GitHub
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4 flex items-center gap-5 text-slate-500">
                            {PERSONAL_INFO.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-500 hover:text-slate-900 transition-colors p-1"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Rust Code Panel Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="w-full max-w-full overflow-hidden"
                    >
                        <div className="w-full max-w-full rounded-xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden text-left font-mono relative">
                            {/* Editor Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-xs text-slate-400 font-sans font-medium">main.rs</span>
                                <div className="w-12" /> {/* Spacer */}
                            </div>

                            {/* Code Snippet Container */}
                            <div className="p-4 sm:p-5 text-[13px] sm:text-sm leading-relaxed text-slate-300 w-full max-w-full overflow-x-hidden relative">
                                <pre className="font-mono whitespace-pre-wrap break-words overflow-x-hidden max-w-full">
                                    <code className="font-mono whitespace-pre-wrap break-words block max-w-full">
<span className="text-slate-500">// main.rs — On-Chain Proof System</span>{'\n'}
<span className="text-orange-400">struct</span> <span className="text-amber-300">Developer</span> {'{\n'}
{'    '}<span className="text-slate-300">name</span>: &amp;<span className="text-orange-400">str</span>,{'\n'}
{'    '}<span className="text-slate-300">role</span>: &amp;<span className="text-orange-400">str</span>,{'\n'}
{'    '}<span className="text-slate-300">ecosystems</span>: [&amp;<span className="text-orange-400">str</span>; <span className="text-sky-300">3</span>],{'\n'}
{'}'}{'\n\n'}
<span className="text-orange-400">impl</span> <span className="text-amber-300">Developer</span> {'{\n'}
{'    '}<span className="text-orange-400">pub fn</span> <span className="text-sky-300">new</span>() -&gt; <span className="text-orange-400">Self</span> {'{\n'}
{'        '}<span className="text-orange-400">Self</span> {'{\n'}
{'            '}<span className="text-slate-300">name</span>: <span className="text-emerald-400">"Akshat Upadhyay"</span>,{'\n'}
{'            '}<span className="text-slate-300">role</span>: <span className="text-emerald-400 font-sans">"Rust &amp; Web3 Engineer"</span>,{'\n'}
{'            '}<span className="text-slate-300">ecosystems</span>: [<span className="text-emerald-400">"Solana"</span>, <span className="text-emerald-400">"Anchor"</span>, <span className="text-emerald-400">"Rust"</span>],{'\n'}
{'        '}{'}'}{'\n'}
{'    '}{'}'}{'\n\n'}
{'    '}<span className="text-orange-400">pub fn</span> <span className="text-sky-300">build_trust</span>(&amp;<span className="text-orange-400">self</span>) -&gt; <span className="text-sky-300">Result</span>&lt;<span className="text-amber-300">Proof</span>, <span className="text-orange-400">Error</span>&gt; {'{\n'}
{'        '}<span className="text-sky-300">Ok</span>(<span className="text-amber-300">Proof</span>::<span className="text-sky-300">on_chain</span>()){'\n'}
{'    '}{'}'}{'\n'}
{'}'}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
