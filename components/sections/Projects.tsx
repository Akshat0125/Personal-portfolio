"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PROJECTS, Project } from "@/lib/data";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-20 md:py-28 bg-white border-b border-slate-200/60">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        Featured Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {PROJECTS.map((project: Project, idx: number) => (
                        <GlassCard
                            key={idx}
                            hoverEffect={true}
                            className="bg-white border-slate-200 flex flex-col justify-between h-full p-6 group hover:border-slate-300 [&:nth-child(odd):last-child]:md:col-span-2"
                        >
                            <div>
                                {/* Header: Icon + Badge + Header Links */}
                                <div className="flex items-start justify-between mb-4 gap-2">
                                    <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0">
                                        <FolderGit2 className="w-5 h-5" />
                                    </div>

                                    <div className="flex flex-wrap items-center justify-end gap-2">
                                        {project.badge && (
                                            <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                                                {project.badge}
                                            </span>
                                        )}
                                        {project.links.repo && (
                                            <a
                                                href={project.links.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-slate-900 transition-colors p-1"
                                                aria-label="GitHub Repository"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-slate-900 transition-colors p-1"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack + Action Buttons */}
                            <div className="space-y-4 pt-4 border-t border-slate-100">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100/80 text-slate-600 border border-slate-200/60"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {(project.links.demo || project.links.repo) && (
                                    <div className="pt-2">
                                        {project.links.demo && project.links.repo ? (
                                            <div className="grid grid-cols-2 gap-2 w-full">
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 shadow-sm px-3 py-1.5 text-xs active:scale-[0.98]"
                                                >
                                                    <span className="flex items-center gap-1.5">
                                                        Live Demo <ExternalLink className="w-3 h-3 ml-0.5" />
                                                    </span>
                                                </a>
                                                <a
                                                    href={project.links.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm px-3 py-1.5 text-xs active:scale-[0.98]"
                                                >
                                                    <span className="flex items-center gap-1.5">
                                                        <Github className="w-3.5 h-3.5 mr-0.5" /> GitHub
                                                    </span>
                                                </a>
                                            </div>
                                        ) : project.links.demo ? (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 shadow-sm px-3 py-1.5 text-xs active:scale-[0.98]"
                                            >
                                                <span className="flex items-center gap-1.5">
                                                    Live Demo <ExternalLink className="w-3 h-3 ml-0.5" />
                                                </span>
                                            </a>
                                        ) : (
                                            <a
                                                href={project.links.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm px-3 py-1.5 text-xs active:scale-[0.98]"
                                            >
                                                <span className="flex items-center gap-1.5">
                                                    <Github className="w-3.5 h-3.5 mr-0.5" /> GitHub
                                                </span>
                                            </a>
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
