import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider mb-2">
          404 // Page Not Found
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-zinc-50 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          This portfolio is a single-page website. All sections (About, Skills, Projects, Education, and Contact) are located on the main page.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-amber-500 dark:text-zinc-950 dark:hover:bg-amber-400 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </section>
  );
}
