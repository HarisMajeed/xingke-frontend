import "../styles/globals.css";

export const metadata = {
  title: "Coin Reserve | Digital Asset OTC Desk",
  description:
    "Coin Reserve is a premier cryptocurrency OTC trading desk providing deep liquidity and tailored solutions for institutional clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className="antialiased text-slate-900">{children}</body>
    </html>
  );
}
