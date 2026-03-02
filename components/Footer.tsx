'use client'

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/EddieJorden' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/edward-moger-1a50b21bb/' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/eddiemoger_com' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/eddiemoger_com/' },
]

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Eddie Moger. All rights reserved.
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-6">
            <a
              href="/pitch-deck"
              className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              🚀 Investment Deck
            </a>
            <a
              href="mailto:eddie@eddiemoger.com"
              className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right - Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
