import AMLPolicyComponent from "../components/home/AMLPolicyComponent";
import ContactUs from "../components/home/ContactUs";
import HeroSection from "../components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-900/5">
      <main className="flex-1">
        <HeroSection />
        <section id="aml-section">
          <AMLPolicyComponent />
        </section>
        <ContactUs />
      </main>
    </div>
  );
}
