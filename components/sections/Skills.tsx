"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SKILLS } from "@/lib/data";
import { Cpu, Layout, Wrench, Sparkles } from "lucide-react";

const CATEGORY_ICONS: Record<string, any> = {
    "Blockchain & Web3": Cpu,
    "Frontend & Fullstack": Layout,
    "Tools & Infrastructure": Wrench,
    "AI & Machine Learning": Sparkles,
};

export function Skills() {
    return (
        <section id="skills" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/60">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider block mb-2">
                        02. Capability Matrix
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        Technical Arsenal
                    </h2>
                </div>

                {/* Clean Grouped Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {SKILLS.map((skillGroup) => {
                        const IconComponent = CATEGORY_ICONS[skillGroup.category] || Cpu;

                        return (
                            <div
                                key={skillGroup.category}
                                className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
                            >
                                <div>
                                    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                                        <div className="p-2 rounded-lg bg-slate-100 text-slate-800 shrink-0">
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xs uppercase font-bold tracking-wider text-slate-900 font-mono">
                                            {skillGroup.category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {skillGroup.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border border-[#E2E8F0] text-xs font-mono font-medium hover:bg-slate-100 hover:border-slate-300 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
