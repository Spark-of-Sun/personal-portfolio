'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';
import { MotionWrapper } from './MotionWrapper';
import { Check, Copy, Mail, Send } from 'lucide-react';

export function Contact() {
  const { owner } = siteContent;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(owner.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper delay={0.05}>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mb-8 leading-relaxed">
            Interested in collaboration, engineering discussions, or AI/ML roles? Feel free to reach out directly via email.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                Primary Email
              </span>
              <a
                href={`mailto:${owner.email}`}
                className="text-lg sm:text-xl font-mono text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                {owner.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-amber-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-700/60 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label={copied ? 'Email copied to clipboard' : 'Copy email address to clipboard'}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${owner.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-amber-500 dark:text-zinc-950 dark:hover:bg-amber-400 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
