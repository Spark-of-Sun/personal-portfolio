import { siteContent } from '@/content/site';
import { MotionWrapper } from './MotionWrapper';
import { ArrowDown, Download, Github, Mail, MapPin } from 'lucide-react';

export function Hero() {
  const { owner } = siteContent;

  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Subtle warm ambient glow in dark mode */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MotionWrapper delay={0.05}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Available for AI/ML roles</span>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
            {owner.name}
          </h1>
          <p className="text-xl sm:text-2xl font-mono text-amber-600 dark:text-amber-400 font-medium mb-6">
            {owner.headline}
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.15}>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm mb-6">
            <MapPin className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0" aria-hidden="true" />
            <span>{owner.location}</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mb-8">
            {owner.heroValueStatement}
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-amber-500 dark:text-zinc-950 dark:hover:bg-amber-400 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </a>

            {Boolean(owner.resumeUrl || owner.resumePath) && (
              <a
                href={owner.resumeUrl || owner.resumePath}
                download="Ganpati_Kumar_Sah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 hover:border-amber-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Download className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                <span>Download Resume</span>
                <span className="sr-only">(opens PDF in new tab)</span>
              </a>
            )}

            <div className="flex items-center gap-2 pl-2">
              <a
                href={owner.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${owner.email}`}
                className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label={`Send email to ${owner.email}`}
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
