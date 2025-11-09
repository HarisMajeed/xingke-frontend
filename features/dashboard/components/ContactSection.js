export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-2xl font-semibold text-brand-700">Ready to trade with Coin Reserve?</h2>
        <p className="max-w-3xl text-sm text-slate-600">
          Speak with our trading desk to unlock bespoke liquidity solutions and global digital
          asset access tailored to your workflow.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:desk@coinreserve.com"
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-brand-700"
          >
            desk@coinreserve.com
          </a>
          <a
            href="tel:+611300000000"
            className="rounded-full border border-brand-200 px-6 py-3 text-sm font-medium text-brand-600 transition hover:border-brand-400"
          >
            +61 1300 000 000
          </a>
        </div>
      </div>
    </section>
  );
}
