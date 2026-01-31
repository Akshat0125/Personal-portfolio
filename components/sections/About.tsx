"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PERSONAL_INFO, EDUCATION, EXPERIENCE } from "@/lib/data";
import { GraduationCap, Briefcase } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-[#0A0B0D]">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main About Text */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-muted text-lg leading-relaxed">
                            {PERSONAL_INFO.about}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-8">
                            {/* Education */}
                            {EDUCATION.map((edu, idx) => (
                                <GlassCard key={idx} className="p-5" hoverEffect={false}>
                                    <div className="flex items-center gap-3 mb-2 text-primary">
                                        <GraduationCap className="w-5 h-5" />
                                        <span className="font-semibold">Education</span>
                                    </div>
                                    <h3 className="font-bold text-white">{edu.degree}</h3>
                                    <p className="text-sm text-muted">{edu.school}</p>
                                    <p className="text-xs text-muted/60 mt-1">{edu.year}</p>
                                </GlassCard>
                            ))}

                            {/* Experience */}
                            {EXPERIENCE.map((exp, idx) => (
                                <GlassCard key={idx} className="p-5" hoverEffect={false}>
                                    <div className="flex items-center gap-3 mb-2 text-secondary">
                                        <Briefcase className="w-5 h-5" />
                                        <span className="font-semibold">{exp.role}</span>
                                    </div>
                                    <h3 className="font-bold text-white">{exp.company}</h3>
                                    <p className="text-sm text-muted line-clamp-2">{exp.description}</p>
                                    <p className="text-xs text-muted/60 mt-1">{exp.year}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Side Image or additional stats could go here */}
                    <GlassCard className="flex items-center justify-center p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                        <div className="text-center space-y-4">
                            <div className="text-5xl font-bold text-white">2+</div>
                            <div className="text-muted">Years of Coding</div>
                            <div className="w-full h-px bg-white/10 my-4" />
                            <div className="text-5xl font-bold text-white">5+</div>
                            <div className="text-muted">Projects Built</div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
