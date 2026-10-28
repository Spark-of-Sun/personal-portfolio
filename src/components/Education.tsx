import { siteContent } from '@/content/site';
import { MotionWrapper } from './MotionWrapper';
import { Award, GraduationCap, MapPin } from 'lucide-react';

export function Education() {
  const { training, education } = siteContent;

  return (
    <section id="education" className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper delay={0.05}>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-8 tracking-tight">
            Training & Education
          </h2>
        </MotionWrapper>

        <div className="space-y-10">
          {/* Training subsection */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Professional Training
              </h3>
            </div>

            <div className="space-y-4">
              {training.map((item, idx) => (
                <MotionWrapper key={idx} delay={0.1}>
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h4 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
                        {item.title} — <span className="font-normal text-zinc-700 dark:text-zinc-300">{item.organization}</span>
                      </h4>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{item.location}</span>
                    </div>

                    <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* Education subsection */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <MotionWrapper key={idx} delay={0.1 + idx * 0.05}>
                  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h4 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
                        {item.degree}
                      </h4>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      {item.institution}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs">
                      <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{item.location}</span>
                      </div>
                      <span className="font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-medium">
                        {item.details}
                      </span>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
