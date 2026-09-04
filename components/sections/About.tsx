"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PERSONAL_INFO, EDUCATION, EXPERIENCE } from "@/lib/data";
import { GraduationCap, Briefcase, Code, Award } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200/60">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                
                {/* Section Title */}
                <div className="mb-12">
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider block mb-2">
                        01. Background & Profile
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        About Me
                    </h2>
                </div>

                {/* Two-column layout: Left (60%), Right (40%) */}
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column (60%): Main About Paragraphs & Highlights */}
                    <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
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

                    {/* Right Column (40%): Experience & Education Summary Cards */}
                    <div className="space-y-6">
                        
                        {/* Experience Card */}
                        <div id="experience" className="scroll-mt-28">
                            <GlassCard hoverEffect={false} className="bg-slate-50 border-slate-200 p-6 space-y-6">
                                <div className="flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-3">
                                    <Briefcase className="w-5 h-5 text-slate-700" />
                                    <h3 className="text-lg font-bold tracking-tight">Experience</h3>
                                </div>
                                <div className="space-y-6">
                                    {EXPERIENCE.map((exp, idx) => (
                                        <div key={idx} className="space-y-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-bold text-slate-900">
                                                    {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
                                                </span>
                                                <span className="text-xs font-mono font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                                                    {exp.year}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>

                        {/* Education Card */}
                        <GlassCard hoverEffect={false} className="bg-slate-50 border-slate-200 p-6 space-y-6">
                            <div className="flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-3">
                                <GraduationCap className="w-5 h-5 text-slate-700" />
                                <h3 className="text-lg font-bold tracking-tight">Education</h3>
                            </div>
                            <div className="space-y-4">
                                {EDUCATION.map((edu, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-slate-900">
                                                {edu.degree}
                                            </span>
                                            <span className="text-xs font-mono font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                                                {edu.year}
                                            </span>
                                        </div>
                                        <p className="text-xs font-medium text-slate-700">
                                            {edu.school}
                                        </p>
                                        <p className="text-[11px] text-slate-400">
                                            {edu.location}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                    </div>

                </div>

            </div>
        </section>
    );
}
