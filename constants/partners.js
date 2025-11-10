export const acceptedAssets = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "USD Coin",
    ticker: "USDC",
    color: "from-sky-400 to-blue-500",
  },
  {
    name: "Tether",
    ticker: "USDT",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Ripple",
    ticker: "XRP",
    color: "from-slate-500 to-gray-700",
  },
];

import { ChevronDown, Shield, AlertCircle, CheckCircle, Users, FileText } from 'lucide-react';
export const amlpolicyComponent = [
    {
      id: 1,
      title: "INTRODUCTION",
      icon: Shield,
      content: "Xingke Development Ltd is committed to preventing financial crime, including money laundering and terrorism financing, in all jurisdictions where we operate. As a registered reporting entity with the Australian Transaction Reports and Analysis Centre (AUSTRAC), we maintain strict compliance with the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth).\n\nWe adhere to equivalent laws in the European Union (EU Anti-Money Laundering Directives) and in Mexico (LFPIORPI and LFPDPPP). We implement robust processes, staff training, and systems that meet and exceed regulatory expectations."
    },
    {
      id: 2,
      title: "POLICY OBJECTIVES",
      icon: CheckCircle,
      content: "• Comply with all relevant AML/CTF legislation in Australia, EU, Mexico, and other jurisdictions\n\n• Prevent, detect, and report suspicious or illegal activity\n\n• Foster a culture of compliance and accountability\n\n• Provide clear guidelines to all employees, contractors, and service providers\n\n• Align with international standards, including the Financial Action Task Force (FATF) Recommendations"
    },
    {
      id: 3,
      title: "OUR AML/CTF FRAMEWORK",
      icon: Shield,
      content: "Xingke Development implements comprehensive controls including:\n\n• Compliance Measures: Designed to meet AML/CTF Act obligations\n\n• Employee Training: Mandatory onboarding and ongoing training\n\n• Risk-Based Customer Due Diligence: Tailored verification based on risk profile\n\n• Ongoing Monitoring: Transactional surveillance and behavioral monitoring\n\n• Reporting: Mandatory reporting of SMRs, TTRs, and IFTIs as required by AUSTRAC"
    },
    {
      id: 4,
      title: "DEFINITIONS",
      icon: FileText,
      content: "Money Laundering: The process of concealing the origins of illegally obtained funds to make them appear legitimate.\n\nTerrorism Financing: Funding terrorist activities, often involving smaller sums which may be sourced from both legal and illegal origins.\n\nPolitically Exposed Persons (PEPs): Individuals entrusted with prominent public functions, including their close associates and family members."
    },
    {
      id: 5,
      title: "CUSTOMER DUE DILIGENCE (CDD) & KYC",
      icon: Users,
      content: "We employ a risk-based CDD and KYC framework consistent with global best practices:\n\n• Identity Verification: Valid government-issued documents and proof of address\n\n• Beneficial Ownership: Identifying ultimate controllers or shareholders\n\n• Enhanced Due Diligence (EDD): For high-risk customers, PEPs, and complex structures\n\n• Ongoing Monitoring: Dynamic assessments to detect unusual activity\n\nWe perform CDD on all client types including individuals, sole traders, companies, partnerships, trusts, cooperatives, and government bodies."
    },
    {
      id: 6,
      title: "PRIVACY & DATA PROTECTION",
      icon: Shield,
      content: "In accordance with Australia's National Privacy Principles, GDPR (Europe), and LFPDPPP (Mexico), Xingke Development ensures:\n\n• Only relevant data is collected\n\n• Personal data is used solely for regulatory and compliance purposes\n\n• Adequate safeguards are in place to protect data\n\n• Data subjects are informed of their rights and can access, correct, or request deletion as required by law"
    },
    {
      id: 7,
      title: "FIVE KEY AML/CTF PRINCIPLES",
      icon: CheckCircle,
      content: "1. Compliance: Meet legal obligations across all jurisdictions\n\n2. International Alignment: Follow FATF Recommendations and regulator guidance\n\n3. Cooperation: Work with AUSTRAC, CNBV, EU authorities, and law enforcement\n\n4. Risk-Based Approach: Restrict or deny services where ML/TF risk is high\n\n5. Program Governance: Maintain an auditable and adaptive compliance framework"
    },
    {
      id: 8,
      title: "ROLES AND RESPONSIBILITIES",
      icon: Users,
      content: "Board and Senior Management: Oversee program design, resource allocation, and governance.\n\nMLRO (Money Laundering Reporting Officer): Appointed as Group AML/CTF Officer, responsible for implementation, oversight, and reporting.\n\nCompliance Staff: Ensure day-to-day adherence, training delivery, and support internal audits.\n\nAll staff must complete AML/CTF training relevant to their role and report any unusual activity immediately."
    },
    {
      id: 9,
      title: "AML/CTF PROGRAM COMPONENTS",
      icon: FileText,
      content: "Our program includes:\n\n• ML/TF Risk Assessments: Reviewed regularly based on business model, customers, and geographies\n\n• Staff Training: Comprehensive learning modules and refresher sessions\n\n• Transaction Monitoring Systems: AI-assisted flagging of suspicious behavior\n\n• Record Keeping: Data retention practices aligned with local laws (5+ years where required)"
    },
    {
      id: 10,
      title: "REPORTING OBLIGATIONS",
      icon: AlertCircle,
      content: "Xingke Development is committed to timely and accurate reporting, including:\n\n• Transactions with cash components ≥ AUD 10,000\n\n• International fund transfers\n\n• Any suspicious activity or structuring behaviour\n\n• Reports to local regulators in the EU or Mexico where required by law"
    },
    {
      id: 11,
      title: "PENALTIES FOR NON-COMPLIANCE",
      icon: AlertCircle,
      content: "Non-compliance may result in:\n\n• Regulatory fines and civil penalties\n\n• Criminal prosecution or custodial sentences\n\n• Revocation of licences or registration\n\n• Reputational harm\n\n• Loss of customer trust and business partnerships\n\nAll employees must immediately report suspected non-compliance to the MLRO or designated compliance officer."
    }
  ];



  export const policies = [
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