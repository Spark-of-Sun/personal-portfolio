export interface Project {
  id: string;
  title: string;
  period: string;
  stack: string[];
  bullets: string[];
  repoUrl: string;
  liveUrl: string;
  liveHost?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export interface TrainingItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SiteContent {
  owner: {
    name: string;
    headline: string;
    email: string;
    github: string;
    location: string;
    languages: string[];
    summary: string[];
    heroValueStatement: string;
    resumePath: string;
    resumeUrl: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  training: TrainingItem[];
  education: EducationItem[];
  metadata: {
    title: string;
    description: string;
    siteUrl: string;
    canonical: string;
    ogImage: string;
  };
}

export function assetUrl(path: string): string {
  const base = (process.env.NEXT_PUBLIC_ASSETS_BASE_URL || '').trim();
  if (!base) return '';
  const cleanBase = base.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  return `${cleanBase}/${cleanPath}`;
}

export const siteContent: SiteContent = {
  owner: {
    name: "Ganpati Kumar Sah",
    headline: "AI/ML Engineer | LLMs, RAG, Python",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@ganpatikrsah.site",
    github: "https://github.com/Spark-of-Sun",
    location: "Bengaluru, Karnataka, India",
    languages: ["English", "Hindi", "Nepali"],
    summary: [
      "AI/ML Engineer with a strong foundation in Python, machine learning, and end-to-end application development.",
      "Experience with LLM-powered applications, Retrieval-Augmented Generation (RAG) systems, and agent workflows.",
      "Interested in prompt engineering, token optimization, and scalable backend integration.",
    ],
    heroValueStatement:
      "Engineering robust LLM-powered applications, high-precision RAG systems, and autonomous agent workflows with scalable Python backends.",
    resumePath: assetUrl("Ganpati_Kumar_Sah_Resume.pdf"),
    resumeUrl: assetUrl("Ganpati_Kumar_Sah_Resume.pdf"),
  },
  skills: [
    {
      name: "Languages",
      skills: ["Python", "Java", "TypeScript", "C"],
    },
    {
      name: "AI/ML",
      skills: [
        "LLMs",
        "RAG",
        "AI Agents",
        "NLP",
        "Prompt Engineering",
        "Token Optimization",
        "Embeddings",
        "Model Evaluation",
      ],
    },
    {
      name: "Frameworks/Libraries",
      skills: [
        "FastAPI",
        "LangChain",
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Hugging Face Transformers",
        "Next.js",
      ],
    },
    {
      name: "Data/Infra",
      skills: ["PostgreSQL", "Redis", "Qdrant", "Docker", "Composio"],
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "Postman", "Jupyter Notebook", "VS Code"],
    },
  ],
  projects: [
    {
      id: "rag-qa-system",
      title: "Legal/Medical RAG Q&A System",
      period: "Jun 2026 – Present",
      stack: ["Python", "FastAPI", "Next.js", "LLMs", "Qdrant", "PostgreSQL"],
      bullets: [
        "Answers questions over legal and medical documents with citations tied to source passages, lowering hallucination risk in compliance-sensitive settings.",
        "Services for retrieval, generation, and citation validation run separately on FastAPI, with hybrid search and tenant-level access isolation.",
        "A compression and caching layer fits 200+ page documents inside a fixed token budget, cutting cost and latency.",
      ],
      // TODO: Add repository URL when public
      repoUrl: "",
      // TODO: Add live deployment URL when public
      liveUrl: "",
    },
    {
      id: "cpaa-agent",
      title: "Configurable Personal AI Agent (CPAA)",
      period: "Dec 2025 – Present",
      stack: ["Python", "FastAPI", "LLMs", "Composio", "Redis", "PostgreSQL"],
      bullets: [
        "Personal AI agent that handles tasks through natural-language commands across WhatsApp, Gmail, Google Calendar, Google Meet, and Slack.",
        "Modular FastAPI backend with LLM-driven orchestration, Composio integrations, WhatsApp webhooks, authentication, and account-linking workflows.",
        "Memory services, Redis session caching, PostgreSQL persistence, and event-driven triggers keep conversations contextual and support cross-platform task automation.",
      ],
      // TODO: Add repository URL when public
      repoUrl: "",
      liveUrl: process.env.NEXT_PUBLIC_CPAA_URL || "",
      liveHost: process.env.NEXT_PUBLIC_CPAA_URL
        ? (function (u: string) {
            try {
              return new URL(u).hostname;
            } catch {
              return "";
            }
          })(process.env.NEXT_PUBLIC_CPAA_URL)
        : "",
    },
  ],
  training: [
    {
      title: "Technical Training",
      organization: "TNS India Foundation",
      location: "Bengaluru, India",
      period: "Aug 2026 – Oct 2026",
      bullets: [
        "Covered Python programming, machine learning, and soft skills.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. in Computer Science and Engineering (AI & ML)",
      institution: "AMC Engineering College",
      location: "Bengaluru, Karnataka, India",
      period: "Sep 2023 – Present",
      details: "CGPA: 7.62",
    },
    {
      degree: "Class XII (CBSE), PCM with Computer Science",
      institution: "Delhi Public School",
      location: "Siliguri, West Bengal, India",
      period: "2020 – 2022",
      details: "72.0%",
    },
    {
      degree: "Class X (ICSE)",
      institution: "St. Augustine's School",
      location: "Kalimpong, West Bengal, India",
      period: "Completed 2020",
      details: "90.6%",
    },
  ],
  metadata: {
    title: "Ganpati Kumar Sah | AI/ML Engineer (LLMs, RAG, Python)",
    description:
      "AI/ML Engineer specializing in LLMs, Retrieval-Augmented Generation (RAG) systems, and agent workflows with Python and FastAPI.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ganpatikrsah.site",
    canonical: (process.env.NEXT_PUBLIC_SITE_URL || "https://ganpatikrsah.site").replace(/\/?$/, "/"),
    ogImage: "/og.png",
  },
};
