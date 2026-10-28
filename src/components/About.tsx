import { siteContent } from '@/content/site';
import { MotionWrapper } from './MotionWrapper';
import { Languages, MapPin, Terminal } from 'lucide-react';

export function About() {
  const { owner } = siteContent;

  return (
    <section id="about" className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper delay={0.05}>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-8 tracking-tight">
            About Me
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Main Summary Bullets */}
          <div className="md:col-span-2 space-y-4">
            {owner.summary.map((paragraph, idx) => (
              <MotionWrapper key={idx} delay={0.1 + idx * 0.05}>
                <div className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                  <p>{paragraph}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Quick Context Card */}
          <MotionWrapper delay={0.2} className="w-full">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-5 space-y-4 text-sm">
              <div>
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Base Location</span>
                </div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  {owner.location}
                </p>
              </div>

              <div className="border-t border-zinc-200/80 dark:border-zinc-800/80 pt-3">
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase mb-1.5">
                  <Languages className="w-3.5 h-3.5 text-amber-500" />
                  <span>Spoken Languages</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {owner.languages.map((lang) => (
                    <span
                      key={lang}
                      className="inline-block px-2 py-0.5 rounded text-xs font-mono bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300/40 dark:border-zinc-700/50"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-200/80 dark:border-zinc-800/80 pt-3">
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase mb-1">
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  <span>Primary Focus</span>
                </div>
                <p className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  LLMs · RAG Architectures · Python Services
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
