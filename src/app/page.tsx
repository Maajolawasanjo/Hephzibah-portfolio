/**
 * Phase 02 design-system preview only.
 * This is NOT the final homepage, navigation, or project gallery.
 */
export default function DesignSystemPreview() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="layout-container">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-rule py-6">
          <p className="type-label">Hephie Creatives</p>
          <p className="type-label text-muted">Design system / 02</p>
        </header>

        <section className="layout-section grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="min-w-0 lg:col-span-9">
            <p className="type-label mb-7 text-muted">Modern editorial minimalism</p>
            <h1 className="type-display">
              Intentional
              <span className="block">by design.</span>
            </h1>
          </div>
          <div className="lg:col-span-3">
            <p className="type-lead">
              A typography-led foundation for Hephzibah Uzorndu’s creative portfolio.
            </p>
            <p className="type-small mt-5 text-muted">
              This is a token showcase, not the final homepage. Alro remains a
              documented display-font fallback until licensed webfont files arrive.
            </p>
          </div>
        </section>

        <section aria-labelledby="palette" className="editorial-rule layout-section">
          <div className="mb-10 grid gap-5 lg:grid-cols-12">
            <h2 id="palette" className="type-heading-md lg:col-span-5">01 / Color</h2>
            <p className="type-body text-muted lg:col-span-7">
              Two approved brand colors. Secondary surfaces, rules, and supporting
              text are derived from the same pair, not introduced as new brand colors.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-56 flex-col justify-end bg-brand-burgundy p-7 text-brand-cream">
              <p className="type-heading-md">Burgundy</p>
              <p className="type-small mt-2">#66001F / Primary ink</p>
            </div>
            <div className="flex min-h-56 flex-col justify-end border border-rule bg-brand-cream p-7 text-brand-burgundy">
              <p className="type-heading-md">Cream</p>
              <p className="type-small mt-2">#FEFCEF / Primary paper</p>
            </div>
          </div>
          <p className="type-small mt-5 text-muted">
            Burgundy on cream contrast: approximately 12.9:1 (WCAG AAA for normal text).
          </p>
        </section>

        <section aria-labelledby="typography" className="editorial-rule layout-section">
          <div className="mb-12 grid gap-5 lg:grid-cols-12">
            <h2 id="typography" className="type-heading-md lg:col-span-5">02 / Typography</h2>
            <p className="type-body text-muted lg:col-span-7">
              Fluid sizes and carefully controlled spacing. Alro is the intended
              display face; DM Sans is the supporting body type.
            </p>
          </div>
          <div className="space-y-9">
            <div>
              <p className="type-label mb-3 text-muted">Display / Alro pending</p>
              <p className="type-heading-xl">Type has presence.</p>
            </div>
            <div>
              <p className="type-label mb-3 text-muted">Section heading</p>
              <p className="type-heading-lg">Every detail matters.</p>
            </div>
            <div>
              <p className="type-label mb-3 text-muted">Supporting statement</p>
              <p className="type-lead">
                Quiet structure gives expressive visual storytelling room to breathe.
              </p>
            </div>
            <div>
              <p className="type-label mb-3 text-muted">Body copy</p>
              <p className="type-body">
                From brand identity to editorial composition, the visual system uses
                measured whitespace, legible copy, and a consistent rhythm. Real
                client projects will retain their own creative colors and imagery.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section aria-labelledby="inverse" className="theme-inverse layout-section">
        <div className="layout-container grid gap-9 lg:grid-cols-12">
          <h2 id="inverse" className="type-heading-lg lg:col-span-7">
            Contrast creates rhythm.
          </h2>
          <div className="lg:col-span-5">
            <p className="type-label mb-4 text-muted">03 / Inverse section</p>
            <p className="type-lead">
              Burgundy sections use cream typography with the same semantic color
              system and accessible contrast.
            </p>
          </div>
        </div>
      </section>

      <div className="layout-container">
        <section aria-labelledby="grid" className="layout-section grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-label mb-4 text-muted">04 / Layout rhythm</p>
            <h2 id="grid" className="type-heading-lg">A disciplined grid.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="type-lead">
              Mobile-first responsive gutters, a wide portfolio canvas, and a
              readable column for longer project stories.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-[var(--layout-grid-gap)] sm:grid-cols-4">
              {["01", "02", "03", "04"].map((number) => (
                <div key={number} className="flex aspect-square items-end border border-rule bg-soft p-4">
                  <span className="type-label">{number}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="flex flex-wrap justify-between gap-4 border-t border-rule py-7">
          <p className="type-small">Hephie Creatives / Foundation preview</p>
          <p className="type-small text-muted">Components follow in Phase 03</p>
        </footer>
      </div>
    </main>
  );
}
