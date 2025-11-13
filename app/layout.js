import { Footer } from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "../styles/globals.css";

export const metadata = {
  title: "Coin Reserve | Digital Asset OTC Desk",
  description:
    "Coin Reserve is a premier cryptocurrency OTC trading desk providing deep liquidity and tailored solutions for institutional clients.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="bg-white">
          <Header />

      <body className="antialiased text-slate-900">{children}</body>
      <Footer />
    </html>
  );
}

