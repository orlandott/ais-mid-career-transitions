// All site copy lives in this one object. Edit text here — no JSX changes needed.
// The program name is referenced everywhere via `siteName`, so renaming the
// program is a one-line change.

export const copy = {
  siteName: "Sprint Transitions",

  meta: {
    titleSuffix: "A de-risked pipeline into AI safety",
  },

  nav: {
    howItWorks: "How it works",
    orgs: "For organizations",
    candidates: "For candidates",
    faq: "FAQ",
  },

  hero: {
    eyebrow: "Pilot program",
    heading: "A de-risked path from senior tech roles into AI safety.",
    orgLabel: "For organizations",
    orgSentence:
      "Tell us exactly who you need. We'll find them, brief them, and hand you a candidate who's already done two weeks of your actual work.",
    orgCta: "Submit a role spec",
    candidateLabel: "For candidates",
    candidateSentence:
      "Test-drive an AI safety career in two weeks, without quitting your job.",
    candidateCta: "Apply for a sprint",
  },

  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Orgs submit a role spec",
        body: "A funded open role, the required skills and tools, location expectations, and a scoped two-week task pulled from their actual backlog. Orgs commit to interviewing everyone who completes the sprint.",
      },
      {
        title: "We headhunt and run the sprint",
        body: "We find matching senior professionals in industry. Selected candidates take two weeks — vacation or unpaid leave, ~40 hrs/wk, remote — for a paid sprint: roughly half AI safety field context, half org-specific context and the scoped task. A flat stipend covers the time.",
      },
      {
        title: "Work product, then an interview",
        body: "The sprint ends with a real work product and an interview. The org pays a success fee only if they hire. No hire? The candidate returns to their job having risked nothing but two weeks.",
      },
    ],
  },

  orgs: {
    heading: "For organizations",
    intro:
      "Skip the resume pile. Get a shortlist of senior professionals who have already spent two weeks inside your problem.",
    eligibilityHeading: "Eligibility",
    bullets: [
      "The role is funded and currently open.",
      "You can scope a real two-week task from your backlog.",
      "You commit to interviewing everyone who completes the sprint.",
      "You pay a success fee only if you hire.",
    ],
    formHeading: "Submit a role spec",
    formNote: "Takes about 10 minutes. We'll follow up within a few days.",
  },

  candidates: {
    heading: "For candidates",
    intro:
      "You keep your job, your salary, and your optionality. You spend two focused weeks finding out whether AI safety work is for you — and showing an org what you can do.",
    eligibilityHeading: "Eligibility",
    bullets: [
      "8+ years of experience, or equivalent demonstrated seniority.",
      "Your skills match one of our open role specs.",
      "You can commit two focused weeks (vacation or unpaid leave, remote).",
    ],
    formHeading: "Apply for a sprint",
    formNote: "Takes about 10 minutes. We only reach out when there's a matching spec.",
  },

  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Why not just apply directly?",
        a: "You can — and for some roles you should. But cold applications rarely show an org what two weeks of your real work looks like, and they rarely show you what the work actually is. The sprint replaces guesswork on both sides, and every org in the program has committed to interviewing you when you complete it.",
      },
      {
        q: "What does the stipend cover?",
        a: "A flat payment for the two-week sprint, meant to offset the vacation days or unpaid leave you use. It's the same for every candidate in a cohort. It is not a salary and doesn't create an employment relationship with the org.",
      },
      {
        q: "What if I don't get hired?",
        a: "You go back to the job you never left. You'll have been paid the stipend, completed a real interview, produced a concrete work product, and gained two weeks of AI safety field context — with nothing at risk but the time.",
      },
      {
        q: "Who pays for this?",
        a: "Hiring organizations do. They pay a success fee only when they hire someone through the program, and that funds the stipends and operations. Candidates never pay anything.",
      },
      {
        q: "Is this remote?",
        a: "The sprint itself is remote (~40 hrs/wk for two weeks). The role you'd be hired into follows the org's own location expectations, which are stated up front in every role spec.",
      },
    ],
  },

  footer: {
    contactLabel: "Contact",
    contactEmail: "hello@example.com", // placeholder — swap for the real inbox
    pilotNote:
      "This is a pilot program. Scope, pricing, and process may change as we learn.",
  },
};
