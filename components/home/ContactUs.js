'use client'

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  const inputVariants = {
    initial: { borderColor: "rgb(209, 213, 219)" },
    focus: { borderColor: "rgb(59, 130, 246)" },
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Header Section */}
        <motion.div 
          className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We deliver live quotes 24/7 globally via our mobile friendly User Interface to both retail and institutional customers.
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-500 max-w-3xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Reach out to our team to explore how we can support your Cryptocurrency needs.
            </motion.p>
          </div>

          {/* Content Section */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Left Column - Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div 
                    className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 sm:p-6 cursor-pointer"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mb-2 sm:mb-3" />
                    </motion.div>
                    <h3 className="text-black font-bold mb-1 sm:mb-2 text-sm sm:text-base">24/7 Available</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">Round the clock support</p>
                  </motion.div>

                  <motion.div 
                    className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 sm:p-6 cursor-pointer"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    >
                      <Users className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 mb-2 sm:mb-3" />
                    </motion.div>
                    <h3 className="text-black font-bold mb-1 sm:mb-2 text-sm sm:text-base">Expert Team</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">Professional support staff</p>
                  </motion.div>
                </div>

                {/* Contact Cards */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <motion.a
                    href="mailto:support@mail-biteitc.com"
                    className="block"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        className="p-2 sm:p-3 bg-blue-500/20 rounded-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                      </motion.div>
                      <div className="min-w-0">
                        <h3 className="text-black font-bold text-base sm:text-lg">Email</h3>
                        <p className="text-black text-sm sm:text-base mt-1 break-all hover:text-blue-400 transition">
                          support@mail-biteitc.com
                        </p>
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+61400000000"
                    className="block"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        className="p-2 sm:p-3 bg-cyan-500/20 rounded-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-black font-bold text-base sm:text-lg">Phone</h3>
                        <p className="text-black text-sm sm:text-base mt-1 hover:text-cyan-400 transition">
                          +61 400 000 000
                        </p>
                      </div>
                    </div>
                  </motion.a>

                  <motion.div 
                    className="bg-slate-200 border border-slate-300 rounded-lg p-4 sm:p-6 backdrop-blur-sm"
                    variants={itemVariants}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        className="p-2 sm:p-3 bg-purple-500/20 rounded-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-black font-bold text-base sm:text-lg">Headquarters</h3>
                        <p className="text-gray-700 text-sm sm:text-base mt-1">Australia</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <motion.div 
                className="w-full"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-white text-black shadow-lg border border-gray-300 rounded-xl p-4 sm:p-6 md:p-8 transition-all"
                  whileHover={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                >
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Send us a Message
                  </motion.h3>

                  <motion.div 
                    className="space-y-3 sm:space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Name */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-black font-medium mb-2 text-xs sm:text-sm">Full Name</label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition text-sm"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-black font-medium mb-2 text-xs sm:text-sm">Email Address</label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition text-sm"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-black font-medium mb-2 text-xs sm:text-sm">Phone Number</label>
                      <motion.input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+61 400 000 000"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition text-sm"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-black font-medium mb-2 text-xs sm:text-sm">Message</label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us about your cryptocurrency needs..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition resize-none text-sm"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <motion.div
                        animate={loading ? { rotate: 360 } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                      </motion.div>
                      {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;