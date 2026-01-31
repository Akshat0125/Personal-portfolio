"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#0A0B0D]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-12">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, idx) => (
                        <GlassCard key={idx} className="flex flex-col h-full group">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FolderGit2 className="w-6 h-6" />
                                </div>
                                <div className="flex gap-2">
                                    {project.links.repo && (
                                        <a
                                            href={project.links.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted hover:text-white transition-colors"
                                            aria-label="GitHub Repo"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {/* The type definition for links in data.ts implies it might have flexible keys, 
                      but we know 'demo' is one of them for the first project */}
                                    {(project.links as any).demo && (
                                        <a
                                            href={(project.links as any).demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted hover:text-white transition-colors"
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

                                {((project.links as any).demo || project.links.repo) && (
                                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                                        {(project.links as any).demo ? (
                                            <Button size="sm" className="w-full" onClick={() => window.open((project.links as any).demo, '_blank')}>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
