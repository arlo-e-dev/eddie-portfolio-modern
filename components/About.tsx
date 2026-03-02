'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Briefcase, Code, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Zap,
    title: 'Agentic AI',
    description: 'Multi-Agent Systems & LLM Orchestration'
  },
  {
    icon: Code,
    title: 'Full Stack',
    description: 'React, Next.js, Python & TypeScript'
  },
  {
    icon: Briefcase,
    title: '15 Years',
    description: 'Entrepreneurial Experience'
  },
  {
    icon: Trophy,
    title: 'Innovation',
    description: 'Cutting-Edge AI Solutions'
  }
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Developer, entrepreneur, and adrenaline junkie
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Welcome to my corner of the internet!
                </span>
              </p>

              <p>
                My name is Eddie and I am a <strong className="text-white">software developer and entrepreneur</strong> with 
                a passion for building innovative solutions. I have an extensive background in automotive racing, 
                specializing in chassis tuning, and a background in PC building, including hardware assembly, 
                overclocking, and using aftermarket software.
              </p>

              <p>
                My true passion lies in <strong className="text-blue-400">agentic AI development</strong> - building 
                autonomous systems that can reason, make decisions, and collaborate with other agents. I specialize 
                in creating <strong className="text-purple-400">multi-agent frameworks</strong> using GPT-4, Claude, 
                and LangChain, developing everything from intelligent CRM assistants to complex workflow automation 
                with LLM orchestration. I also build full-stack applications, custom back-end systems, financial 
                simulations, data visualization, and enterprise solutions.
              </p>

              <p>
                I have a passion for <strong className="text-purple-400">dynamic programming and problem-solving</strong>. 
                I spent 8 years in corporate management before starting my own business, which I ran with great 
                success for 15 years before deciding to switch to something I am more passionate 
                about - software development.
              </p>

              <p>
                Now, let's talk about the fun stuff. I have competed in <strong className="text-white">auto racing, 
                motorcycle racing, rock climbing, downhill mountain bike racing, Muay Thai Kickboxing</strong> and 
                much more. I believe that my passion for these activities translates into my work ethic - 
                I am always pushing myself to be the best and constantly seeking new challenges.
              </p>

              <p>
                So, why should you choose me for your next project? Well, I am a nerd at heart and love 
                solving problems. My skills are not just tools, they are the tools I use for success. 
                I am excited to work on new projects and help build your dreams. So, whether you're looking 
                for a new website, custom software, or just someone to bounce ideas off of, I am here for you. 
                Let's make something great together!
              </p>

              <p className="text-sm text-slate-400 italic">
                Oh, and one last thing, I promise to keep the nerdy jokes to a minimum, but I can't guarantee 
                I won't throw in a Star Wars reference or two. 😉
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
