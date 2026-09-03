"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PERSONAL_INFO, EDUCATION, EXPERIENCE } from "@/lib/data";
import { GraduationCap, Briefcase, Code, Award } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200/60">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Section Title */}
                <div className="mb-12">
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider block mb-2">
                        01. Background & Profile
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Main About Paragraphs */}
                    <div className="lg:col-span-7 space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                        {PERSONAL_INFO.about.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}

                        {/* Subtle highlight pills */}
                        <div className="pt-4 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80">
                                <Code className="w-3.5 h-3.5 text-slate-500" /> Systems & Smart Contracts
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80">
                                <Award className="w-3.5 h-3.5 text-slate-500" /> Solana Anchor dApps
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80">
                                <Briefcase className="w-3.5 h-3.5 text-slate-500" /> AI & Machine Learning
                            </span>
                        </div>
                    </div>

                    {/* Stats / Quick Info */}
                    <div className="lg:col-span-5">
                        <GlassCard hoverEffect={false} className="bg-slate-50 border-slate-200 p-6 space-y-6">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 font-mono">
                                Quick Facts
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-left">
                                <div className="p-4 bg-white rounded-lg border border-slate-200">
                                    <div className="text-2xl font-bold text-slate-900 font-mono">2+</div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">Years Coding</div>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-slate-200">
                                    <div className="text-2xl font-bold text-slate-900 font-mono">6+</div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">Major Projects</div>
                                </div>
                            </div>
                            <div className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Focus:</span>
                                    <span className="font-medium text-slate-700">Solana, Anchor, Rust</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Status:</span>
                                    <span className="font-medium text-emerald-600">Available for Hire</span>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                </div>

                {/* Experience & Education Minimal Timeline Section */}
                <div id="experience" className="mt-20 pt-12 border-t border-slate-200/80">
                    <div className="grid md:grid-cols-2 gap-12">
                        
                        {/* Experience */}
                        <div>
                            <div className="flex items-center gap-2 mb-8 text-slate-900">
                                <Briefcase className="w-5 h-5 text-slate-700" />
                                <h3 className="text-xl font-bold tracking-tight">Experience</h3>
                            </div>
                            <div className="relative border-l border-slate-200 pl-6 space-y-8">
                                {EXPERIENCE.map((exp, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors" />
                                        <div className="text-xs font-mono font-medium text-slate-400 mb-1">
                                            {exp.year}
                                        </div>
                                        <h4 className="text-base font-bold text-slate-900">
                                            {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
                                        </h4>
                                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center gap-2 mb-8 text-slate-900">
                                <GraduationCap className="w-5 h-5 text-slate-700" />
                                <h3 className="text-xl font-bold tracking-tight">Education</h3>
                            </div>
                            <div className="relative border-l border-slate-200 pl-6 space-y-8">
                                {EDUCATION.map((edu, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors" />
                                        <div className="text-xs font-mono font-medium text-slate-400 mb-1">
                                            {edu.year}
                                        </div>
                                        <h4 className="text-base font-bold text-slate-900">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-sm font-medium text-slate-700 mt-0.5">
                                            {edu.school}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {edu.location}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
