import { Footer } from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "../styles/globals.css";

export const metadata = {
  title: "Coin Collection | Digital Asset OTC Desk",
  description:
    "Coin Collection is a premier cryptocurrency OTC trading desk providing deep liquidity and tailored solutions for institutional clients.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="bg-white">
      <body className="antialiased text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

