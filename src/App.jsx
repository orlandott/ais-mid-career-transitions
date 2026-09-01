import { copy } from "./copy.js";

// Placeholder Tally embed URLs. Swap these for the real form links.
const TALLY_ORG_FORM_URL =
  "https://tally.so/embed/TALLY_ORG_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1";
const TALLY_CANDIDATE_FORM_URL =
  "https://tally.so/embed/TALLY_CANDIDATE_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1";

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-accent"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-700">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// True while a URL above is still the unswapped placeholder. Tally serves its
// own 404 page for a form ID that doesn't exist, so show a neutral panel until
// the real embed URLs are in place.
function isPlaceholder(src) {
  return src.includes("TALLY_ORG_FORM_ID") || src.includes("TALLY_CANDIDATE_FORM_ID");
}

function TallyEmbed({ src, title }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {isPlaceholder(src) ? (
        <div className="flex h-[540px] flex-col items-center justify-center gap-2 bg-slate-50 px-6 text-center">
          <p className="font-semibold text-slate-700">{title}</p>
          <p className="max-w-xs text-sm text-slate-500">
            {copy.forms.placeholder}
          </p>
        </div>
      ) : (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="block h-[540px] w-full"
        />
      )}
    </div>
  );
}

function Header() {
  const links = [
    [copy.nav.howItWorks, "#how-it-works"],
    [copy.nav.orgs, "#organizations"],
    [copy.nav.candidates, "#candidates"],
    [copy.nav.faq, "#faq"],
  ];
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight text-slate-900">
          {copy.siteName}
        </a>
        <nav className="hidden gap-7 sm:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const { hero } = copy;
  const audiences = [
    {
      label: hero.orgLabel,
      sentence: hero.orgSentence,
      cta: hero.orgCta,
      href: "#organizations",
      primary: true,
    },
    {
      label: hero.candidateLabel,
      sentence: hero.candidateSentence,
      cta: hero.candidateCta,
      href: "#candidates",
      primary: false,
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pb-24 sm:pt-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {hero.eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {hero.heading}
      </h1>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {audiences.map((a) => (
          <div
            key={a.label}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {a.label}
            </p>
            <p className="mt-3 grow text-lg leading-relaxed text-slate-800">
              {a.sentence}
            </p>
            <a
              href={a.href}
              className={
                "mt-8 inline-block self-start rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors " +
                (a.primary
                  ? "bg-accent text-white hover:bg-accent-dark"
                  : "bg-accent-soft text-accent-dark hover:bg-accent hover:text-white")
              }
            >
              {a.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const { howItWorks } = copy;
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {howItWorks.heading}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <div key={step.title}>
              <span className="text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection({ id, content, formSrc, mirrored = false }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div className={mirrored ? "lg:order-2" : ""}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {content.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">{content.intro}</p>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
            {content.eligibilityHeading}
          </h3>
          <div className="mt-4">
            <BulletList items={content.bullets} />
          </div>
        </div>
        <div className={mirrored ? "lg:order-1" : ""}>
          <h3 className="text-lg font-semibold text-slate-900">
            {content.formHeading}
          </h3>
          <p className="mb-4 mt-1 text-sm text-slate-500">{content.formNote}</p>
          <TallyEmbed src={formSrc} title={content.formHeading} />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { faq } = copy;
  return (
    <section id="faq" className="scroll-mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {faq.heading}
        </h2>
        <div className="mt-8 divide-y divide-slate-200">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { footer } = copy;
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {footer.contactLabel}:{" "}
          <a
            href={`mailto:${footer.contactEmail}`}
            className="font-medium text-accent transition-colors hover:text-accent-dark"
          >
            {footer.contactEmail}
          </a>
        </p>
        <p>
          {footer.pilotNote}
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <AudienceSection
          id="organizations"
          content={copy.orgs}
          formSrc={TALLY_ORG_FORM_URL}
        />
        <AudienceSection
          id="candidates"
          content={copy.candidates}
          formSrc={TALLY_CANDIDATE_FORM_URL}
          mirrored
        />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
