export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-600 py-24 text-white sm:py-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <span className="rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
          Premier OTC Desk
        </span>
        <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">
          Driven to make digital currency available to investors globally.
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
          Coin Reserve is a premier cryptocurrency OTC trading desk headquartered in
          Australia. We specialise in providing deep liquidity &amp; offer services
          24/7 across all major digital asset pairs.
        </p>
        <p className="mt-4 max-w-3xl text-sm text-white/70 sm:text-base">
          Our ever-evolving product suite ensures we stay ahead in the dynamic crypto
          landscape. Our trading desk has successfully facilitated millions in retail
          &amp; institutional flows across various asset classes.
        </p>
        <div className="mt-16 h-48 w-full max-w-4xl rounded-3xl bg-brand-500/50 p-8">
          <div className="h-full w-full rounded-2xl bg-brand-500/40 backdrop-blur dotted-map" />
        </div>
      </div>
    </section>
  );
}
