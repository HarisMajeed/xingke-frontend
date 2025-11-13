'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '', label: 'AML Policy', scrollToId: 'aml-section' },
    { href: '/privacy-policy', label: 'Legal Policies', scrollToId: 'policies-section' },
    { href: '/contact-us', label: 'Contact', scrollToId: 'contact-section' },
    { href: '/verify ', label: 'verify ' },
  ]

  const isActive = (href) => pathname === href
  const showHeader = pathname !== '/verify' // Hide on /verifications

  const handleNavClick = (e, link) => {
    if (link.scrollToId) {
      e.preventDefault()
      if (pathname === link.href) {
        scrollToSection(link.scrollToId)
      } else {
        router.push(link.href)
        setTimeout(() => scrollToSection(link.scrollToId), 300)
      }
      setIsOpen(false)
    } else {
      setIsOpen(false)
    }
  }

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const elementId = hash.replace('#', '')
      setTimeout(() => scrollToSection(elementId), 500)
    }
  }, [pathname])

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.3 } })
  }

  if (!showHeader) return null // Hide header completely on /verifications

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
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="flex items-center gap-3">
                {/* <Image
                  src="/images/logo.png"
                  alt="Xingke Development"
                  width={120}
                  height={30}
                  className="object-contain"
                  priority
                /> */}

                <span className="text-2xl md:text-3xl font-bold text-gray-800">CoinCollection </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-1">
              <div className="flex items-center space-x-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all text-sm lg:text-base ${
                        isActive(link.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop CTA + Language Selector */}
            <div className="hidden md:flex items-center justify-end gap-4">
              
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-800" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div className="flex flex-col space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      custom={idx}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive(link.href)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-800 hover:bg-gray-100'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div variants={linkVariants} custom={navLinks.length} initial="hidden" animate="visible">
                     
                    <motion.button
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all mt-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Spacer */}
     </>
  )
}

export default Header
