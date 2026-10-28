# Environment files
- `.env.example` documents every environment variable. Read it for context, and keep it updated whenever you add, rename, or remove a variable. It holds placeholder values only.
- NEVER read, open, print, search, diff, copy, or summarize `.env` or any `.env.*` file other than `.env.example` (for example `.env.local` or `.env.production`). This includes shell commands such as cat, grep, type, Get-Content, and dumps of environment variables.
- If you need the value of a variable, ask me. Do not try to work around this rule.
- Never put real values in `.env.example`, source code, the README, logs, or commits.
- NEXT_PUBLIC_* variables are public. Never store secrets in them.