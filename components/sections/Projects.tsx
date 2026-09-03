"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { PROJECTS, Project } from "@/lib/data";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-12">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project: Project, idx: number) => (
                        <div key={idx} className="group relative flex flex-col h-full rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,92,246,0.3)]">
                            {/* Animated gradient border shimmer */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                            
                            <GlassCard className="flex flex-col h-full border-t border-t-primary/50 group-hover:border-t-transparent bg-card/80 hover:bg-card relative z-10">
                                <div className="flex items-start justify-between mb-4 gap-2">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors group-hover:glow-primary shrink-0">
                                        <FolderGit2 className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-wrap items-center justify-end gap-2">
                                        {project.badge && (
                                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-cyan-300 border border-primary/40 shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                                                {project.badge}
                                            </span>
                                        )}
                                        {project.links.repo && (
                                            <a
                                                href={project.links.repo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-muted hover:text-white transition-colors p-1"
                                                aria-label="GitHub Repo"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-muted hover:text-white transition-colors p-1"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {(project.links.demo || project.links.repo) && (
                                        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                            {project.links.demo && project.links.repo ? (
                                                <div className="grid grid-cols-2 gap-2 w-full">
                                                    <Button size="sm" className="w-full text-xs px-2" onClick={() => window.open(project.links.demo, '_blank')}>
                                                        Live Demo
                                                    </Button>
                                                    <Button size="sm" variant="outline" className="w-full text-xs px-2" onClick={() => window.open(project.links.repo, '_blank')}>
                                                        View Code
                                                    </Button>
                                                </div>
                                            ) : project.links.demo ? (
                                                <Button size="sm" className="w-full" onClick={() => window.open(project.links.demo, '_blank')}>
                                                    Live Demo
                                                </Button>
                                            ) : (
                                                <Button size="sm" variant="outline" className="w-full" onClick={() => window.open(project.links.repo, '_blank')}>
                                                    View Code
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
