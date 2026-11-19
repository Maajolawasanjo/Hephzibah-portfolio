/**
 * Phase 01 smoke-test only — not the final homepage.
 * Shared components and production sections come in later phases.
 */
export default function FoundationPreview() {
  return (
    <main className="min-h-screen bg-brand-cream px-[var(--page-gutter)] py-10 text-brand-burgundy sm:py-14">
      <div className="mx-auto max-w-[var(--content-max)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Hephie Creatives
          </p>
          <p className="text-xs uppercase tracking-[0.14em]">
            Phase 01 / Foundation preview
          </p>
        </div>

        <div className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em]">
              Editorial minimalism / Identity in progress
            </p>
            <h1 className="font-display text-[clamp(3.3rem,8.3vw,8.5rem)] leading-[0.93] font-bold tracking-[-0.065em]">
              Design begins
              <span className="block">with intention.</span>
            </h1>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-lg leading-relaxed md:text-xl">
              A structured foundation for Hephzibah Uzorndu’s design portfolio.
            </p>
            <p className="text-sm leading-relaxed opacity-75">
              This is a development preview—not the approved hero, site navigation, or final typography. Alro webfont files are still needed.
            </p>
          </div>
        </div>

        <section aria-labelledby="palette-heading" className="border-t border-brand-border pt-8">
          <h2 id="palette-heading" className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
            Brand palette
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-44 flex-col justify-end bg-brand-burgundy p-6 text-brand-cream">
              <p className="text-xl font-semibold">Burgundy</p>
              <p className="mt-1 text-sm">#66001F</p>
            </div>
            <div className="flex min-h-44 flex-col justify-end border border-brand-border bg-brand-cream p-6">
              <p className="text-xl font-semibold">Cream</p>
              <p className="mt-1 text-sm">#FEFCEF</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
