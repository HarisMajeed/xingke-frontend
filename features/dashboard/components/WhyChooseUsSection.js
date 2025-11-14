const pillars = [
  {
    title: "Deep Liquidity",
    description:
      "Institutional-grade liquidity with settlement options tailored to your treasury requirements.",
  },
  {
    title: "Global Reach",
    description:
      "24/7 coverage across all major asset pairs with dedicated relationship managers.",
  },
  {
    title: "Compliance First",
    description:
      "Robust AML control framework aligned with industry-leading regulatory standards.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="legal" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-brand-700">
              Institutional expertise designed for digital asset markets.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We combine a premier trading desk with concierge-grade service. From high-touch
              execution to treasury solutions, Coin Collection keeps you ahead of market shifts.
            </p>
          </div>
          <div className="grid gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-600">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
