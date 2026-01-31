"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SKILLS } from "@/lib/data";

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-12">
                    Technical Arsenal
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS.map((skillGroup) => (
                        <GlassCard key={skillGroup.category} className="group">
                            <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-white transition-colors">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-muted hover:bg-white/10 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
