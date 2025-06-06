"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
               src="/images/logog.png"
                alt="GlorifAI Logo"
                width={400}
               height={120}
                className="h-8 w-auto sm:h-10" // h-8 (32px) on mobile, h-10 (40px) on small screens and up
                priority
             />
          </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
            How it works            
            </Link>
            <Link
            href="#why-glorifai"
            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
            Why GlorifAI            
            </Link>
            <Link
            href="#quiz"
            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
            Quiz
            </Link>
            <Link
            href="#pricing"
            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
            Pricing
            </Link>
            <a href="https://apps.apple.com/pl/app/glorifai-daily-prayers/id6743354836">
            <Button variant="default" className="ml-4">
              Try GlorifAI
            </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="#why-glorifai"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Why GlorifAI
            </Link>
            <Link
              href="#quiz"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiz
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-2">
              <a href="https://apps.apple.com/pl/app/glorifai-daily-prayers/id6743354836">
              <Button variant="default" className="w-full">
                Try GlorifAI
              </Button></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
