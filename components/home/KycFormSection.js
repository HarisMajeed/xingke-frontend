'use client';

import { useMemo } from 'react';

const warnings = [
  {
    title: 'Investments',
    body:
      'High profit returns or random companies requesting more payments to release profits. Always verify who you are sending money to.',
  },
  {
    title: 'Job Offers',
    body: 'Legitimate employers will never ask you to send cryptocurrency as part of onboarding.',
  },
  {
    title: 'Romance',
    body: 'Scammers often pretend to form relationships online and request funds urgently.',
  },
  {
    title: 'Tax/Bills Issues',
    body:
      'Government agencies or large companies will not request cryptocurrency to settle unknown bills.',
  },
  {
    title: 'Visas Issues',
    body: 'Immigration authorities do not request crypto to prevent deportation or to release paperwork.',
  },
  {
    title: 'Buyer’s Regret',
    body:
      'Only purchase crypto you can afford to lose. Research coins and tokens carefully before paying.',
  },
];

const reminders = [
  'Once you send your crypto, there is no way to reverse it.',
  'Avoid referencing exchanges like Binance, Bybit, OKX, Huobi, Crypto.com, USDT, BTC, etc. in payment descriptions as banks may block the transfer.',
  'Do not send payments from joint accounts unless all account holders have been verified.',
  'Do not use Business, Trust, or Retirement accounts for these transactions.',
  'Some banks may take 24–72 hours to release funds to us; trades are processed only after funds clear.',
  'We may refuse service at our discretion and will refund you if payment has already been made.',
];

const KycFormSection = () => {
  const formUrl = process.env.NEXT_PUBLIC_KYCAID_FORM_URL?.trim();

  const iframeSrc = useMemo(() => {
    if (!formUrl) return null;
    return formUrl.includes('?') ? `${formUrl}&embed=true` : `${formUrl}?embed=true`;
  }, [formUrl]);

  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-3xl font-bold sm:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
            Thank you for opening a trade with Xingke Development. Please review the following
            reminders carefully before continuing. By submitting your verification, you confirm that
            you are purchasing funds for yourself and not on behalf of a third party.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-brand-700">Common scam scenarios</h2>
              <p className="mt-2 text-sm text-slate-600">
                If any of the following apply, stop immediately and contact us before sending funds.
              </p>
            </div>
            <ul className="space-y-4">
              {warnings.map(({ title, body }) => (
                <li key={title} className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
                  <p className="font-semibold text-brand-700">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{body}</p>
                </li>
              ))}
            </ul>

            <div className="space-y-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-900">Important reminders</h3>
              <ul className="space-y-2 text-sm text-amber-900">
                {reminders.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>⚠️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-amber-800">
                We may request additional information in accordance with our AML/KYC policy. Refer to
                the compliance documentation for further details.
              </p>
            </div>
          </article>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-brand-700 sm:text-xl">Complete Your KYC</h2>
            <p className="mt-2 text-sm text-slate-600">
              Please submit the four required fields through our KYCAID widget to verify your trade.
            </p>

            {iframeSrc ? (
              <div className="mt-4 min-h-[520px] overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  src={iframeSrc}
                  title="KYCAID verification"
                  className="h-[700px] w-full"
                  allow="camera; microphone; fullscreen"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
                <p className="font-medium text-slate-600">KYCAID form unavailable</p>
                <p className="mt-2">
                  Set the <code className="rounded bg-slate-200 px-1 py-0.5">NEXT_PUBLIC_KYCAID_FORM_URL</code>{' '}
                  environment variable with the embed link from your KYCAID dashboard to display the
                  verification widget.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KycFormSection;



