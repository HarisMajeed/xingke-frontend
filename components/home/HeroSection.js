'use client'
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{
      backgroundImage: "url('/images/heroBanner.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-64 md:w-80 h-64 md:h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 30, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-40 -left-40 w-64 md:w-80 h-64 md:h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 md:w-80 h-64 md:h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 20, -20, 0],
              y: [0, 30, -30, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          ></motion.div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <motion.div 
          className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto w-full text-center">
            <motion.div 
              className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 sm:mb-8"
              variants={badgeVariants}
            >
              <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-400 font-medium">Driving Digital Currency Innovation</span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Driven to make <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">digital currency</span> available to investors globally
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 max-w-5xl mx-auto"
              variants={itemVariants}
            >
              Xingke Development is a premier Cryptocurrency OTC trading desk, headquartered in Australia. We specialise in providing deep liquidity & offer services 24/7 across all major digital asset pairs.
            </motion.p>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-5xl mx-auto"
              variants={itemVariants}
            >
              Our ever-evolving product suite ensures we stay ahead in the dynamic crypto landscape. Our trading desk has successfully facilitated millions in retail & institutional flows across various asset classes.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.button 
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all transform"
                variants={buttonVariants}
                whileHover="hover"
              >
                Explore OTC Trading
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.button>
              
              <motion.button 
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-slate-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/5 transition-all"
                variants={buttonVariants}
                whileHover="hover"
              >
                Learn More
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;