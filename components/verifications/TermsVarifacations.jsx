// src/components/TermsPage.jsx

import { useState } from "react";
import Link from "next/link";
import { termsContent } from "../../constants/partners";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";



export default function TermsVarifacations() {
    const { language, setLanguage } = useLanguage();
    const content = termsContent[language];
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        email: "",
        phone: "",
        accepted: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" });

    const handleChange = (field) => (event) => {
        const value = field === "accepted" ? event.target.checked : event.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ type: null, message: "" });

        if (!formData.accepted) {
            setStatus({ type: "error", message: content.fields.checkboxError || "You must accept the terms to continue." });
            return;
        }

        try {
            setIsSubmitting(true);
            setStatus({ type: null, message: "Creating your application..." });
            
            // Step 1: Create applicant
            const applicantResponse = await fetch("/api/kyc", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            let applicantResult;
            try {
                applicantResult = await applicantResponse.json();
            } catch (jsonError) {
                throw new Error(applicantResponse.statusText || "Failed to submit application");
            }

            if (!applicantResponse.ok) {
                throw new Error(applicantResult.error || `Failed to submit application (${applicantResponse.status})`);
            }

            const applicantId = applicantResult.data?.applicant_id || applicantResult.data?.id;
            if (!applicantId) {
                throw new Error("Failed to get applicant ID from response");
            }

            // Step 2: Get form URL
            setStatus({ type: null, message: "Setting up verification..." });
            
            const verificationResponse = await fetch("/api/kyc/verification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ applicant_id: applicantId }),
            });

            let verificationResult;
            try {
                verificationResult = await verificationResponse.json();
            } catch (jsonError) {
                throw new Error("Failed to get verification form URL");
            }

            if (!verificationResponse.ok) {
                throw new Error(verificationResult.error || "Failed to get verification form URL");
            }

            const formUrl = verificationResult.data?.form_url || verificationResult.data?.url;
            if (!formUrl) {
                throw new Error("Failed to get verification form URL");
            }

            // Step 3: Redirect to KYCAID form
            setStatus({ type: "success", message: "Redirecting to verification form..." });
            
            // Small delay to show success message, then redirect
            setTimeout(() => {
                window.location.href = formUrl;
            }, 1000);

        } catch (error) {
            console.error("KYC submission error:", error);
            setStatus({
                type: "error",
                message:
                    error.message ||
                    content.fields.genericError ||
                    "We could not submit your request right now. Please try again later or contact support.",
            });
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 bg-white shadow-md z-30"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href="/" className="flex items-center gap-3">
                                {/* <Image
                                    src="/images/logo.png"
                                    alt="Xingke Development"
                                    width={120}
                                    height={30}
                                    className="object-contain"
                                    priority
                                /> */}
                                <span className="text-2xl md:text-3xl font-bold text-gray-800">{content.headerTile} </span>

                            </Link>
                        </motion.div>
                        <div className="flex justify-end">
                            <select
                                aria-label="Select language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="min-w-[120px] rounded-md border border-gray-300 px-3 py-2 text-sm outline-none
             transition duration-150 focus:border-gray-800 focus:ring-1 focus:ring-gray-800"
                            >
                                {Object.entries(content.languageOptions).map(([key, label]) => (
                                    <option key={key} value={key}>
                                        {label}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                </nav>
            </motion.header>
            <div className="max-w-5xl mx-auto p-6 mt-28 bg-white rounded-lg shadow-md my-6">
                {/* Language Selector */}


                {/* Content */}
                <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>

                <p className="text-sm whitespace-pre-line leading-relaxed mb-6">{content.description}</p>

                {/* FORM */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <input
                        placeholder={content.fields.name}
                        className="border p-2 rounded"
                        value={formData.name}
                        onChange={handleChange("name")}
                        required
                        name="name"
                    />
                    <input
                        placeholder={content.fields.dob}
                        type="date"
                        className="border p-2 rounded"
                        value={formData.dob}
                        onChange={handleChange("dob")}
                        required
                        name="dob"
                    />
                    <input
                        placeholder={content.fields.email}
                        className="border p-2 rounded md:col-span-1"
                        value={formData.email}
                        onChange={handleChange("email")}
                        type="email"
                        required
                        name="email"
                    />
                    <input
                        placeholder={content.fields.phone}
                        className="border p-2 rounded md:col-span-1"
                        value={formData.phone}
                        onChange={handleChange("phone")}
                        required
                        name="phone"
                    />

                    <label className="flex gap-2 items-center mt-2 md:col-span-2">
                        <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={formData.accepted}
                            onChange={handleChange("accepted")}
                            required
                            name="accepted"
                        />
                        <span>{content.fields.checkbox}</span>
                    </label>

                    <button
                        className="bg-black text-white py-2 rounded hover:bg-gray-900 md:col-span-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting 
                            ? (status.message || content.fields.submitting || "Submitting...") 
                            : content.fields.submit}
                    </button>

                    {status.message && (
                        <p
                            className={`md:col-span-2 text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}
                            role={status.type === "error" ? "alert" : "status"}
                        >
                            {status.message}
                        </p>
                    )}
                </form>

                <p className="mt-4 text-xs text-gray-500">{content.footer}</p>
            </div>
        </>
    );
}
