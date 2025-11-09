import { acceptedAssets } from "../../../constants/partners";

export function AcceptedAssetsSection() {
  return (
    <section
      id="aml"
      className="relative -mt-20 rounded-[2.5rem] bg-white px-6 py-16 shadow-xl sm:px-12"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-brand-700">We Accept</h2>
          <p className="mt-2 text-sm text-slate-500">
            Seamless settlement across the leading digital assets and stablecoins.
          </p>
        </div>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {acceptedAssets.map((asset) => (
            <div
              key={asset.ticker}
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br p-[1px]"
            >
              <div
                className={`flex h-full w-full flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${asset.color} text-white shadow-inner`}
                >
                  <span className="text-lg font-semibold">{asset.ticker}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-slate-700">{asset.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
