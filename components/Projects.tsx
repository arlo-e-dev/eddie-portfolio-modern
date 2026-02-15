'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'Agentic AI Development Platform',
    description: 'Building next-generation agentic AI systems with autonomous decision-making, tool use, and multi-agent collaboration. Specialized in LangChain, OpenAI GPT-4, and Anthropic Claude.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'Claude AI', 'Vector DBs', 'React'],
    featured: true
  },
  {
    name: 'AI-Powered CRM Solutions',
    description: 'Custom enterprise CRM systems with integrated AI assistants for automation, intelligent routing, and predictive analytics. Built for healthcare, tech, and service industries.',
    tech: ['Next.js', 'TypeScript', 'AI/ML', 'PostgreSQL', 'RAG'],
    featured: true
  },
  {
    name: 'Multi-Agent Orchestration System',
    description: 'Developing autonomous agent frameworks where multiple AI agents collaborate to complete complex workflows. Includes task delegation, state management, and inter-agent communication.',
    tech: ['Python', 'TypeScript', 'Agent Frameworks', 'OpenAI', 'Node.js'],
    featured: true
  },
  {
    name: 'Full Stack Task Manager',
    description: 'Complete task management application with real-time updates, user authentication, and intelligent task prioritization.',
    tech: ['React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    link: 'https://eddies-balance-app.netlify.app/',
    github: 'https://github.com/EddieJorden/balance-app',
    featured: false
  },
  {
    name: 'AI Document Intelligence',
    description: 'Document processing system using GPT-4 and Claude for extraction, summarization, and analysis. Supports PDF, Word, and scanned documents.',
    tech: ['Python', 'OpenAI', 'Claude', 'OCR', 'React'],
    featured: false
  },
  {
    name: 'SimpleSpectra.com',
    description: 'Modern e-commerce platform with product management, shopping cart, and secure payment processing.',
    tech: ['React', 'Node.js', 'Express', 'Stripe'],
    link: 'https://simplespectra.com/',
    featured: false
  },
  {
    name: 'Data Visualization Dashboard',
    description: 'Interactive data visualization component with D3.js featuring real-time charts and analytics.',
    tech: ['React', 'Redux', 'D3.js', 'Express'],
    link: 'https://eddiejorden.github.io/ui-ux-project/',
    github: 'https://github.com/EddieJorden/ui-ux-project',
    featured: false
  },
  {
    name: 'Reddit Clone',
    description: 'Reddit clone using the official API with real-time post updates and commenting system.',
    tech: ['React', 'Redux', 'Reddit API'],
    link: 'https://eddiejorden.github.io/reddit-clone/',
    github: 'https://github.com/EddieJorden/reddit-clone',
    featured: false
  },
  {
    name: 'Flash Cards Learning App',
    description: 'Educational app for creating and studying custom flashcard quizzes with spaced repetition.',
    tech: ['React', 'Redux', 'LocalStorage'],
    link: 'https://eddiejorden.github.io/flashcards/',
    github: 'https://github.com/EddieJorden/flashcards',
    featured: false
  },
  {
    name: 'My Jams - Spotify Playlist Manager',
    description: 'Spotify integration app for creating and managing playlists with advanced search functionality.',
    tech: ['React', 'Spotify API', 'OAuth'],
    link: 'https://eddiejorden.github.io/my-jams',
    github: 'https://github.com/EddieJorden/my-jams',
    featured: false
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work building modern web applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.name}
                    </h3>
                    <p className="text-slate-300 text-lg mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-white transition-all duration-300"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
