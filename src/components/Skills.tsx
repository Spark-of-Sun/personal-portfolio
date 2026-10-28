import { siteContent } from '@/content/site';
import { MotionWrapper } from './MotionWrapper';
import { Code2, Cpu, Database, Layers, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-4 h-4 text-amber-500" aria-hidden="true" />,
  'AI/ML': <Cpu className="w-4 h-4 text-amber-500" aria-hidden="true" />,
  'Frameworks/Libraries': <Layers className="w-4 h-4 text-amber-500" aria-hidden="true" />,
  'Data/Infra': <Database className="w-4 h-4 text-amber-500" aria-hidden="true" />,
  Tools: <Wrench className="w-4 h-4 text-amber-500" aria-hidden="true" />,
};

export function Skills() {
  const { skills } = siteContent;

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper delay={0.05}>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-8 tracking-tight">
            Technical Skills
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, idx) => (
            <MotionWrapper key={category.name} delay={0.08 * (idx + 1)}>
              <div className="h-full rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/30 p-5 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-colors">
                <div className="flex items-center gap-2.5 mb-4">
                  {categoryIcons[category.name] || (
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                  )}
                  <h3 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 hover:border-amber-500/40 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
