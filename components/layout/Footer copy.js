import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">
              <Image
              src="/images/logo.png"
              alt="Xingke Development"
              width={120}
              height={30}
              className="object-contain"
            /></h3>
            <p className="text-gray-100">
              Short description about your company or website.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-100 hover:text-gray-50">
                  home
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-100 hover:text-gray-50">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-gray-100 hover:text-gray-50">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <p className="text-gray-100">support@coincollection.it.com</p>
              <p className="text-gray-100">Phone: +61 400 000 000
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-100">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer