'use client'

import React, { useState } from 'react';
import { ChevronDown, Shield, FileText, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { policies } from '../../constants/partners';

export default function PoliciesPage() {
  const [expandedPolicy, setExpandedPolicy] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

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
    <div className="min-h-screen bg-gradient-to-br pt-[72px] from-white via-blue-50 to-white">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
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
                href="mailto:support@coincollection.com" 
                className="text-blue-600 hover:text-blue-700 transition font-semibold inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                support@coincollection.com
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}