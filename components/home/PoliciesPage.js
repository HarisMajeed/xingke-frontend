'use client'

import React, { useState } from 'react';
import { ChevronDown, Shield, FileText, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PoliciesPage() {
  const [expandedPolicy, setExpandedPolicy] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const policies = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: Shield,
      sections: [
        {
          heading: '1. INTRODUCTION',
          content: 'Xingke Development Ltd is committed to protecting your personal information and complying with applicable data protection and privacy laws. In Australia, this includes the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). In Europe, we comply with the General Data Protection Regulation (EU) 2016/679 (GDPR), and in Mexico, we comply with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP).\n\nThis Privacy Policy sets out our approach to the collection, use, storage, disclosure, and protection of your personal data.'
        },
        {
          heading: '2. WHAT KINDS OF PERSONAL INFORMATION DO WE COLLECT AND HOLD?',
          content: 'We may collect a wide range of personal information including:\n\n• Identity and contact details: Full name, date of birth, addresses, email addresses, phone numbers, employment data, identification documents, and utility bills.\n\n• Financial and transactional information: Bank and digital currency account details, transaction history, preferences, and behavioural data.\n\n• Technical and device information: IP addresses, browser type and version, operating system, device identifiers, cookies, and metadata.\n\n• Communications and support history: Records of interactions, support requests, or technical issues logged via our Platform or helpdesk.'
        },
        {
          heading: '3. HOW DO WE COLLECT PERSONAL INFORMATION?',
          content: 'We collect personal data directly from you, including when:\n\n• You register, create an account, or complete onboarding forms\n• You contact us via phone, email, or live chat\n• You interact with our website or Platform\n\nWe may also collect information from third-party providers such as identity verification services, referral partners, and public registries.'
        },
        {
          heading: '4. COOKIES AND ONLINE TRACKING',
          content: 'Our website uses cookies and similar tracking technologies to:\n\n• Improve the functionality and usability of our Platform\n• Monitor performance and usage\n• Provide relevant marketing or advertising content\n\nYou can manage cookie settings via your browser. Disabling cookies may affect your user experience.'
        },
        {
          heading: '5. WHO DO WE COLLECT PERSONAL INFORMATION ABOUT?',
          content: 'We may collect information about:\n\n• Current and prospective customers\n• Business partners and service providers\n• Staff and applicants (for internal purposes)'
        },
        {
          heading: '6. WHY DO WE COLLECT PERSONAL INFORMATION?',
          content: 'We use your personal information for purposes including:\n\n• Providing our services, including onboarding and account maintenance\n• Communicating with you regarding your account\n• Fulfilling legal and regulatory obligations (e.g., AML/CTF, taxation, dispute resolution)\n• Conducting risk, fraud, or financial crime assessments\n• Informing you about updates or promotions\n• Performing analytics and service improvements\n• Ensuring cybersecurity and data integrity'
        },
        {
          heading: '7. WHO DO WE DISCLOSE PERSONAL INFORMATION TO?',
          content: 'Your data may be disclosed to:\n\n• Our affiliates, partners, and subsidiaries\n• Cloud storage and IT infrastructure providers\n• Identity verification, compliance, and KYC service providers\n• Financial institutions and payment processors\n• Government agencies and regulators\n• Legal, tax, or professional advisors\n• Parties involved in corporate transactions\n• Dispute resolution bodies or courts'
        },
        {
          heading: '8. INTERNATIONAL DATA TRANSFERS',
          content: 'We may transfer data across jurisdictions, including to Southeast Asia, Europe, and Mexico. When doing so, we ensure:\n\n• The recipient has adequate data protection standards\n• Appropriate safeguards such as GDPR Article 46 mechanisms are in place\n• You are notified if required'
        },
        {
          heading: '9. HOW WE SECURE YOUR PERSONAL INFORMATION',
          content: 'We take robust technical and organizational security measures to protect data, including:\n\n• Password-protected systems and two-factor authentication\n• Role-based access controls\n• End-to-end encryption of sensitive transmissions\n• Secure storage via Microsoft Azure and AWS platforms\n• Employee training and background checks'
        },
        {
          heading: '10. ACCESSING YOUR PERSONAL INFORMATION',
          content: 'You may request access to your personal data at any time. We will:\n\n• Respond within 30 days\n• Require proof of identity\n• Provide data unless a lawful exception applies'
        }
      ]
    },
    {
      id: 'risk',
      title: 'Risk Disclosure',
      icon: AlertCircle,
      sections: [
        {
          heading: 'IMPORTANT – PLEASE READ CAREFULLY',
          content: 'This Risk Disclosure Statement is a general overview of risks associated with the financial products and services provided by Xingke Development. This Statement is not intended to be legal, financial, or investment advice. Before engaging with our platform, services, or products, you should assess the potential risks and obtain independent professional advice.'
        },
        {
          heading: 'GENERAL RISK FACTORS',
          content: 'Systemic Risk: Failure of interconnected financial institutions may impact market function.\n\nMarket Risk: Prices may fluctuate due to economic, political, or external factors.\n\nCurrency Risk: FX volatility may impact cross-border investments.\n\nInterest Rate Risk: Changes in rates affect asset value.\n\nLiquidity Risk: You may be unable to exit positions without incurring significant losses.\n\nCredit Risk: Borrowers or counterparties may default on obligations.'
        },
        {
          heading: 'REGULATORY AND LEGAL RISKS',
          content: 'Different jurisdictions impose varying legal obligations. Regulatory changes, currency controls, and nationalisation can affect investments. In the EU, MiFID II mandates clear risk disclosures and consumer protections. In Mexico, the Ley Fintech and CNBV circulars establish rules for fintech operations.'
        },
        {
          heading: 'TAX RISK',
          content: 'Tax treatment of digital assets and financial products may vary by jurisdiction and change over time. In the EU, local tax laws and DAC7 reporting obligations may apply. In Mexico, SAT regulations govern income reporting. You should consult a qualified tax professional.'
        },
        {
          heading: 'OPERATIONAL AND TECHNOLOGICAL RISKS',
          content: 'System outages, cyberattacks, and technological failures may interrupt access to your account or delay trade execution. Xingke Development maintains redundancy systems, but risk cannot be entirely eliminated.'
        },
        {
          heading: 'PRODUCT-SPECIFIC RISKS',
          content: 'Equities: Subject to price volatility and issuer risk.\n\nDebt Securities: Subject to interest rate, credit, and liquidity risks.\n\nFOREX: Highly leveraged; influenced by geopolitical, economic, and environmental events.\n\nOptions: Complex derivatives that may lead to total capital loss.\n\nFutures/Forwards: May result in unlimited losses.\n\nCommodities: High volatility and exposure to physical delivery or regulatory shifts.'
        }
      ]
    },
    {
      id: 'conflicts',
      title: 'Conflicts of Interest',
      icon: FileText,
      sections: [
        {
          heading: 'PURPOSE',
          content: 'Xingke Development (ABN 50 643 368 496) is an AUSTRAC-registered Digital Currency Exchange provider. This Conflicts of Interest Policy sets out our commitment to the fair treatment of clients and to upholding integrity in all jurisdictions in which we operate.'
        },
        {
          heading: 'SCOPE',
          content: 'This Policy applies to Xingke Development, its directors, officers, employees, contractors, agents, and any other person directly or indirectly linked to the Company. It is applicable across all investment and financial services offered by the Company.\n\nConflicts may arise between Xingke Development and a client, between employees and clients, or between one client and another client.'
        },
        {
          heading: 'FRAMEWORK FOR CONFLICT MANAGEMENT',
          content: 'Xingke Development has adopted internal systems and procedures to ensure that conflicts of interest are properly identified, assessed, and mitigated. The Company:\n\n• Maintains effective organisational and administrative arrangements\n• Discloses conflicts in a durable medium when mitigation measures are insufficient\n• Reviews this Policy at least annually'
        },
        {
          heading: 'IDENTIFICATION OF CONFLICTS',
          content: 'Conflicts of interest may include:\n\n• A relevant person gaining financial benefit at the client\'s expense\n• Competing interests between services provided and client outcomes\n• Preferential treatment given to certain clients over others\n• Insider knowledge being used to inform trading activities'
        },
        {
          heading: 'MANAGEMENT AND MITIGATION MEASURES',
          content: 'Xingke Development applies the following practices:\n\n• Independent Compliance function overseeing conflict management\n• Documentation of identified conflicts and their mitigation\n• Client interests are always prioritised\n• Separation of functions and teams where conflicts may occur\n• Disclosure to clients where full mitigation is not possible\n• Restriction on personal account dealings'
        },
        {
          heading: 'PROHIBITED BUSINESS CONDUCT',
          content: 'The following conduct is strictly prohibited:\n\n• Manipulation of financial instruments\n• Misuse or disclosure of confidential client transaction data\n• Engaging in trades before publication of proprietary research\n• Preferential treatment of internal parties over clients\n• Use of inside information for personal gain'
        },
        {
          heading: 'EMPLOYEE OBLIGATIONS',
          content: 'All employees must:\n\n• Avoid engaging in prohibited practices\n• Promptly report concerns to the Compliance Officer\n• Seek guidance when uncertain about potential conflicts\n• Disclose outside financial interests or personal investments\n• Submit personal trades for review and approval'
        },
        {
          heading: 'COMPLIANCE REVIEW AND OVERSIGHT',
          content: 'The Compliance Officer is responsible for:\n\n• Reviewing all conflict disclosures\n• Monitoring adherence to this Policy\n• Providing conflict training\n• Advising senior management and the Board on issues\n• Ensuring international compliance obligations are met'
        }
      ]
    }
  ];

  const currentPolicy = policies[expandedPolicy];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Policies
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Review our comprehensive legal and compliance policies
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Policy Navigation */}
          <div className="lg:col-span-1">
            {/* Mobile Menu Button */}
            <div className="lg:hidden mb-4">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between p-3 sm:p-4 bg-white border border-gray-200 rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold text-gray-800">Select Policy</span>
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden lg:block space-y-3 sticky top-20"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {policies.map((policy, idx) => {
                const IconComponent = policy.icon;
                return (
                  <motion.button
                    key={policy.id}
                    onClick={() => setExpandedPolicy(idx)}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className={`w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg transition-all text-left ${
                      expandedPolicy === idx
                        ? 'bg-blue-600 border-l-4 border-blue-800 shadow-lg'
                        : 'bg-white border-l-4 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 ${expandedPolicy === idx ? 'text-white' : 'text-gray-600'}`} />
                    <span className={`font-semibold text-xs sm:text-sm ${expandedPolicy === idx ? 'text-white' : 'text-gray-800'}`}>
                      {policy.title}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  className="lg:hidden space-y-2 mb-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {policies.map((policy, idx) => {
                    const IconComponent = policy.icon;
                    return (
                      <motion.button
                        key={policy.id}
                        onClick={() => {
                          setExpandedPolicy(idx);
                          setMobileMenuOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                        className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all text-left ${
                          expandedPolicy === idx
                            ? 'bg-blue-600 border-l-4 border-blue-800'
                            : 'bg-white border-l-4 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className={`w-5 h-5 flex-shrink-0 ${expandedPolicy === idx ? 'text-white' : 'text-gray-600'}`} />
                        <span className={`font-semibold ${expandedPolicy === idx ? 'text-white' : 'text-gray-800'}`}>
                          {policy.title}
                        </span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Policy Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div 
                key={expandedPolicy}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Policy Header */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 sm:px-6 md:px-8 py-6 sm:py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{currentPolicy.title}</h2>
                </motion.div>

                {/* Sections */}
                <motion.div 
                  className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {currentPolicy.sections.map((section, idx) => (
                    <motion.div 
                      key={idx} 
                      className="p-4 sm:p-6 md:p-8 hover:bg-blue-50/50 transition-colors"
                      variants={itemVariants}
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 sm:mb-4">{section.heading}</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Contact Section */}
            <motion.div 
              className="mt-6 sm:mt-8 bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">Questions?</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                For privacy inquiries or compliance questions, please contact our team:
              </p>
              <motion.a 
                href="mailto:support@mail-biteitc.com" 
                className="text-blue-600 hover:text-blue-700 transition font-semibold inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                support@mail-biteitc.com
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}