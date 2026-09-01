// All site copy lives in this one object. Edit text here, no JSX changes needed.
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
        body: "A funded open role, the required skills and tools, location expectations, and a scoped two-week task from their backlog. Orgs commit to interviewing everyone who completes the sprint.",
      },
      {
        title: "We headhunt and run the sprint",
        body: "We find matching senior professionals in industry. Selected candidates take two weeks (vacation or unpaid leave, about 40 hrs/wk, remote) for a paid sprint. Roughly half is AI safety field context. The rest is org-specific context and the scoped task. A flat stipend covers the time.",
      },
      {
        title: "Work product, then an interview",
        body: "The sprint ends with a work product and an interview. The org pays a success fee only if they hire. If there's no hire, the candidate returns to their job having risked nothing but two weeks.",
      },
    ],
  },

  orgs: {
    heading: "For organizations",
    intro:
      "Candidates reach your interview having already spent two weeks on a real task from your backlog.",
    eligibilityHeading: "Eligibility",
    bullets: [
      "The role is funded and currently open.",
      "You can scope a real two-week task from your backlog.",
      "You commit to interviewing everyone who completes the sprint.",
      "You pay a success fee only if you hire.",
    ],
    formHeading: "Submit a role spec",
    formNote: "Takes about 10 minutes. We'll follow up within a few days.",
    // Shown instead of the form until TALLY_ORG_FORM_URL is set.
    emailCta: "Submit a role spec",
    emailSubject: "Role spec",
  },

  candidates: {
    heading: "For candidates",
    intro:
      "Two focused weeks to find out whether AI safety work suits you, and to show an org what you can do. You keep your job while you do it.",
    eligibilityHeading: "Eligibility",
    bullets: [
      "8+ years of experience, or equivalent demonstrated seniority.",
      "Your skills match one of our open role specs.",
      "You can commit two focused weeks (vacation or unpaid leave, remote).",
    ],
    formHeading: "Apply for a sprint",
    formNote:
      "Takes about 10 minutes. We get in touch when there's a matching role spec.",
    // Shown instead of the form until TALLY_CANDIDATE_FORM_URL is set.
    emailCta: "Apply for a sprint",
    emailSubject: "Sprint application",
  },

  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Why not just apply directly?",
        a: "You can, and for some roles you should. But a cold application doesn't show an org what two weeks of your work looks like, and it doesn't show you what the job is actually like. The sprint does both. Every org in the program has agreed to interview you if you complete it.",
      },
      {
        q: "What does the stipend cover?",
        a: "A flat payment for the two weeks, meant to offset the vacation days or unpaid leave you use. It's the same for every candidate in a cohort. It isn't a salary, and it doesn't make you an employee of the org.",
      },
      {
        q: "What if I don't get hired?",
        a: "You go back to the job you never left. You keep the stipend, a completed interview, a work product, and two weeks of AI safety context. The only thing you spent is the time.",
      },
      {
        q: "Who pays for this?",
        a: "Hiring organizations and career transition grants. Orgs pay a success fee when they hire someone through the program. When there's no hire, grant funding covers the stipend. Candidates are paid either way, and never pay us anything.",
      },
      {
        q: "Is this remote?",
        a: "The sprint is remote, about 40 hours a week for two weeks. The role you'd be hired into follows the org's own location expectations, which are stated in every role spec.",
      },
    ],
  },

  footer: {
    contactLabel: "Contact",
    contactEmail: "hello@example.com", // placeholder, swap for the real inbox
    pilotNote: "This is a pilot program. Details may change as we learn.",
  },
};
