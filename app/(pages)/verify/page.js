"use client";
import TermsVarifacations from "../../../components/verifications/TermsVarifacations.jsx";
import { LanguageProvider } from "../../../components/verifications/LanguageContext.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <TermsVarifacations />
    </LanguageProvider>
  );
}
