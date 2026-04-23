"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SKILLS } from "@/lib/data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

function SkillCard({ skillGroup }: { skillGroup: { category: string; items: string[] } }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useTransform(x, [-0.5, 0.5], [5, -5]);
    const mouseYSpring = useTransform(y, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: mouseYSpring,
                rotateY: mouseXSpring,
                transformStyle: "preserve-3d",
            }}
            className="perspective-1000 h-full"
        >
            <GlassCard className="group h-full bg-card hover:bg-card-hover transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] border-card-border hover:border-primary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10" style={{ transform: "translateZ(10px)" }}>
                    {skillGroup.items.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-background/50 border border-white/5 text-sm text-muted hover:border-primary hover:text-white hover:glow-primary hover:scale-105 transition-all duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </GlassCard>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-12">
                    Technical Arsenal
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS.map((skillGroup) => (
                        <SkillCard key={skillGroup.category} skillGroup={skillGroup} />
                    ))}
                </div>
            </div>
        </section>
    );
}
