'use client'

import React, { useState } from 'react';
import { ChevronDown, Shield, AlertCircle, CheckCircle, Users, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { amlpolicyComponent } from '../../constants/partners';

const AMLPolicyComponent = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  
  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">AML Policy</h1>
          </div>
          <motion.p 
            className="text-blue-100 text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Xingke Development's commitment to preventing financial crime and maintaining compliance with international AML/CTF standards.
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <motion.div 
          className="grid grid-cols-1 gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {amlpolicyComponent.map((section, index) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSection === section.id;

            return (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all"
              >
                {/* Section Header */}
                <motion.button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                  whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.1)" }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 text-left min-w-0">
                    <motion.div 
                      className="p-2 sm:p-3 bg-blue-500/20 rounded-lg flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                    </motion.div>
                    <div className="min-w-0">
                      <h2 className="text-lg sm:text-xl font-bold text-white break-words">{section.title}</h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">Section {section.id}</p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                  </motion.div>
                </motion.button>

                {/* Section Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-700 bg-slate-900/50"
                    >
                      <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm sm:text-base px-4 sm:px-6 py-4 sm:py-6">
                        {section.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Points Summary */}
        <motion.div 
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: Shield,
              title: "Compliance First",
              description: "We comply with AML/CTF laws in Australia, EU, and Mexico."
            },
            {
              icon: Users,
              title: "Customer Monitoring",
              description: "Risk-based due diligence and ongoing behavioral monitoring."
            },
            {
              icon: AlertCircle,
              title: "Active Reporting",
              description: "Mandatory reporting of suspicious activity to regulators."
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 sm:p-6 cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-blue-400 mb-3 sm:mb-4" />
                </motion.div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4"
            animate={{ color: ["#ffffff", "#93c5fd", "#ffffff"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Questions About Our AML Policy?
          </motion.h3>
          <p className="text-slate-300 mb-4 text-sm sm:text-base">
            For inquiries regarding our Anti-Money Laundering policy or compliance procedures, please contact us:
          </p>
          <motion.a 
            href="mailto:support@mail-biteitc.com" 
            className="text-blue-400 hover:text-blue-300 transition font-semibold inline-block"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            support@mail-biteitc.com
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AMLPolicyComponent;