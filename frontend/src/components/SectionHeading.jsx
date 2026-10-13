import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, subtitle, testId }) => (
  <Reveal className="mb-10 max-w-2xl">
    {eyebrow && (
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">{eyebrow}</p>
    )}
    <h2
      data-testid={testId}
      className="mt-2 font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl"
    >
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-base leading-relaxed text-stone-600 sm:text-lg">{subtitle}</p>}
  </Reveal>
);