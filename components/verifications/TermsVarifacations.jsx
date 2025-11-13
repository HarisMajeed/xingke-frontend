// src/components/TermsPage.jsx

import Link from "next/link";
import { termsContent } from "../../constants/partners";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image";


export default function TermsVarifacations() {
    const { language, setLanguage } = useLanguage();
    const content = termsContent[language];

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
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder={content.fields.name} className="border p-2 rounded" />
                    <input placeholder={content.fields.dob} type="date" className="border p-2 rounded" />
                    <input placeholder={content.fields.email} className="border p-2 rounded md:col-span-1" />
                    <input placeholder={content.fields.phone} className="border p-2 rounded md:col-span-1" />

                    <label className="flex gap-2 items-center mt-2 md:col-span-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>{content.fields.checkbox}</span>
                    </label>

                    <button className="bg-black text-white py-2 rounded hover:bg-gray-900 md:col-span-2">
                        {content.fields.submit}
                    </button>
                </form>

                <p className="mt-4 text-xs text-gray-500">{content.footer}</p>
            </div>
        </>
    );
}
