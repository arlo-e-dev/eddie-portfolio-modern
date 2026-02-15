import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eddie Moger | AI Engineer & Full Stack Developer',
  description: 'AI Engineer specializing in agentic AI, multi-agent systems, and LLM orchestration. Expert in GPT-4, Claude, LangChain, React, and Next.js. 15+ years of entrepreneurial experience.',
  keywords: ['Eddie Moger', 'AI Engineer', 'Agentic AI', 'Multi-Agent Systems', 'LangChain', 'GPT-4', 'Claude AI', 'LLM', 'Full Stack Developer', 'React', 'Next.js'],
  authors: [{ name: 'Eddie Moger' }],
  openGraph: {
    title: 'Eddie Moger | AI Engineer & Full Stack Developer',
    description: 'Specializing in agentic AI, multi-agent systems, and LLM orchestration with GPT-4 and Claude',
    url: 'https://eddiemoger.com',
    siteName: 'Eddie Moger Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eddie Moger | AI Engineer',
    description: 'Specializing in agentic AI, multi-agent systems, and LLM orchestration',
    creator: '@eddiemoger_com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
