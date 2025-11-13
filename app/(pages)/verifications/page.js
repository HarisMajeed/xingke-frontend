"use client";
import TermsVarifacations from "../../../components/verifications/TermsVarifacations";
import { LanguageProvider } from "../../../components/verifications/LanguageContext.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <TermsVarifacations />
    </LanguageProvider>
  );
}
