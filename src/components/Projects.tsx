import { siteContent, Project } from '@/content/site';
import { MotionWrapper } from './MotionWrapper';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { projects } = siteContent;

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper delay={0.05}>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-8 tracking-tight">
            Featured Projects
          </h2>
        </MotionWrapper>

        <div className="space-y-8">
          {projects.map((project: Project, idx: number) => {
            const hasRepo = Boolean(project.repoUrl && project.repoUrl.trim().length > 0);
            const hasLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

            return (
              <MotionWrapper key={project.id} delay={0.1 * (idx + 1)}>
                <article className="rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 md:p-7 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all">
                  {/* Header: Title and Period */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                      {project.period}
                    </span>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-200/60 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons (only rendered when URL is non-empty) */}
                  {(hasLive || hasRepo) && (
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 font-medium text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group"
                        >
                          <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                          <span>Live project</span>
                          {project.liveHost && (
                            <span className="font-mono text-xs opacity-80 ml-1">
                              ({project.liveHost})
                            </span>
                          )}
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      )}

                      {hasRepo && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 font-medium text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                          <span>Source Code</span>
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
