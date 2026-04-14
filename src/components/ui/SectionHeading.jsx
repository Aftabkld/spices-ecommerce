export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="rounded-full border border-brand-yellow/40 bg-brand-yellow/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-tight text-brand-dark sm:text-4xl">{title}</h2>
        {description ? <p className="max-w-2xl text-sm leading-7 text-brand-dark/70 sm:text-base">{description}</p> : null}
      </div>
    </div>
  );
}
