import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  AcceptedAssetsSection,
  ContactSection,
  HeroSection,
  WhyChooseUsSection,
} from "../features/dashboard";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-900/5">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AcceptedAssetsSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
