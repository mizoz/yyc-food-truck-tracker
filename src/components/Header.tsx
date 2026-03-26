'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Truck, Menu, X, Github } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl group-hover:animate-bounce">🚚</span>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight">YYC Food Trucks</h1>
              <p className="text-xs text-orange-100 hidden sm:block">Calgary&apos;s Best on Wheels</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium hover:text-orange-200 transition-colors flex items-center gap-1">
              🗺️ Map
            </Link>
            <Link href="#popular" className="font-medium hover:text-orange-200 transition-colors flex items-center gap-1">
              🔥 Popular
            </Link>
            <a 
              href="https://github.com/mizoz/yyc-food-truck-tracker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-3">
              <Link 
                href="/" 
                className="font-medium hover:text-orange-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                🗺️ Map
              </Link>
              <Link 
                href="#popular" 
                className="font-medium hover:text-orange-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                🔥 Popular
              </Link>
              <a 
                href="https://github.com/mizoz/yyc-food-truck-tracker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-medium hover:text-orange-200 transition-colors py-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}