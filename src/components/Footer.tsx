import { siteContent } from '@/content/site';
import { ArrowUp, Github, Mail } from 'lucide-react';

export function Footer() {
  const { owner } = siteContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#070b12] py-12 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {owner.name}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Built with Next.js & Tailwind CSS. Hosted on Cloudflare Pages.
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">
              © {currentYear} {owner.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={owner.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="GitHub Profile (opens in a new tab)"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={`mailto:${owner.email}`}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={`Send email to ${owner.email}`}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="/#hero"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
