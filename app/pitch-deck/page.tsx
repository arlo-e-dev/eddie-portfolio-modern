'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  Zap, TrendingUp, Shield, DollarSign, Users, Cpu,
  ArrowRight, ChevronDown, Download, BarChart3, Rocket,
  Globe, Lock, Server, Clock, CheckCircle2, Layers,
  Sparkles, Target, BrainCircuit
} from 'lucide-react'

function Section({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StatCard({ value, label, icon: Icon, gradient }: { value: string; label: string; icon: any; gradient: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 ${gradient}`}>
      <div className="absolute top-3 right-3 opacity-20">
        <Icon size={48} />
      </div>
      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl font-black text-white mb-1">{value}</div>
        <div className="text-sm text-white/80 font-medium">{label}</div>
      </div>
    </div>
  )
}

function RevenueRow({ title, desc, revenue, margin, icon: Icon }: { title: string; desc: string; revenue: string; margin: string; icon: any }) {
  return (
    <div className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-300">
      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
        <Icon className="text-emerald-400" size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-white text-lg mb-1">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="text-emerald-400 font-bold text-lg">{revenue}</div>
        <div className="text-slate-500 text-xs">{margin} margin</div>
      </div>
    </div>
  )
}

function TimelineStep({ month, title, desc, revenue, active = false }: { month: string; title: string; desc: string; revenue: string; active?: boolean }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-emerald-500 bg-slate-950" />
      <div className="absolute left-[7px] top-5 w-[2px] h-full bg-gradient-to-b from-emerald-500/50 to-transparent last:hidden" />
      <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-1">{month}</div>
      <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
      <p className="text-slate-400 text-sm mb-2">{desc}</p>
      <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold">{revenue}</span>
    </div>
  )
}

export default function PitchDeck() {
  const [showPDF, setShowPDF] = useState(false)

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
            ← Back to Portfolio
          </Link>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8">
              🚀 Investment Opportunity — Private AI Infrastructure
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
                Own the AI Stack.
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Sell the Intelligence.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              A <span className="text-white font-semibold">$20K infrastructure investment</span> that replaces 
              $50K–$200K+/year in cloud AI costs — then generates <span className="text-emerald-400 font-semibold">$150K–$500K+ 
              in annual revenue</span> selling AI-powered products and services with zero per-query costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            <StatCard value="$20K" label="Total Investment" icon={DollarSign} gradient="bg-gradient-to-br from-slate-800 to-slate-900" />
            <StatCard value="3–6mo" label="Break-Even" icon={Clock} gradient="bg-gradient-to-br from-emerald-900/60 to-emerald-950/60" />
            <StatCard value="70–85%" label="Net Margins" icon={TrendingUp} gradient="bg-gradient-to-br from-cyan-900/60 to-cyan-950/60" />
            <StatCard value="$0" label="Per-Query Cost" icon={Zap} gradient="bg-gradient-to-br from-amber-900/50 to-amber-950/50" />
          </motion.div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">The Opportunity</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Everyone can write code. Not everyone has frontier-level AI compute running locally with zero ongoing costs.
                That&apos;s the moat.
              </p>
            </div>
          </Section>

          <div className="grid md:grid-cols-3 gap-5">
            <Section delay={0.1}>
              <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] hover:border-emerald-500/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <BrainCircuit className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Frontier AI, Locally</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Run 1-trillion-parameter models (Kimi K2.5, DeepSeek v3.1) at full quality on a 
                  two-machine cluster. Same capability as $200K+ GPU servers — at 1/10th the cost.
                </p>
              </div>
            </Section>

            <Section delay={0.2}>
              <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] hover:border-cyan-500/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Lock className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Recurring AI Costs</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No API bills. No per-token charges. Run unlimited queries 24/7/365. Cloud AI for 
                  heavy agentic use costs $3–$25 per million tokens — that adds up to $50K–$200K+/year 
                  at scale.
                </p>
              </div>
            </Section>

            <Section delay={0.3}>
              <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] hover:border-amber-500/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <Shield className="text-amber-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Privacy as a Feature</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Enterprise clients in healthcare, finance, and legal need AI that never leaves their 
                  control. Local inference = HIPAA/GDPR-friendly by default. This alone commands premium pricing.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Revenue Model</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Four revenue streams. All high-margin. All leveraging the same infrastructure investment.
              </p>
            </div>
          </Section>

          <div className="space-y-4">
            <Section delay={0.1}>
              <RevenueRow
                icon={Sparkles}
                title="AI-Powered Apps & Products"
                desc="Build and sell SaaS products with AI baked in — document processors, research assistants, content engines, industry-specific tools. Your compute is unlimited, so your cost-per-user approaches zero. Everyone can code apps, but without this compute, they're paying per query and their margins collapse."
                revenue="$10K–$40K/mo"
                margin="80–90%"
              />
            </Section>

            <Section delay={0.15}>
              <RevenueRow
                icon={Users}
                title="Custom Agent Development"
                desc="Build industry-specific AI agents for clients — legal contract reviewers, real-estate lead qualifiers, medical research summarizers, marketing automation. One-time build fee + monthly management. Demo live on your cluster, iterate instantly."
                revenue="$5K–$25K/client"
                margin="75–85%"
              />
            </Section>

            <Section delay={0.2}>
              <RevenueRow
                icon={Lock}
                title="Private AI-as-a-Service"
                desc="Offer secure, managed AI workspaces for clients who need frontier-model intelligence but can't (or won't) send data to the cloud. Healthcare, finance, legal — they'll pay premium for guaranteed privacy."
                revenue="$1K–$5K/mo/client"
                margin="70–80%"
              />
            </Section>

            <Section delay={0.25}>
              <RevenueRow
                icon={Layers}
                title="Templates, Courses & Consulting"
                desc="Productized knowledge — pre-built agent templates ($49–$499), online courses on local AI deployment ($497–$997), enterprise consulting ($2K+/day). Your cluster is the demo that sells itself."
                revenue="$5K–$20K/mo"
                margin="85–95%"
              />
            </Section>
          </div>
        </div>
      </section>

      {/* Why This Works — The Economics */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">The Economics</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Cloud AI gets more expensive as you scale. Local AI gets cheaper.
              </p>
            </div>
          </Section>

          <Section delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Cloud */}
              <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.03]">
                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                  <Globe size={20} /> Cloud AI (The Alternative)
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>API costs (heavy agentic use)</span>
                    <span className="text-red-400 font-semibold">$4K–$20K/mo</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Scales linearly with usage</span>
                    <span className="text-red-400 font-semibold">↑ More users = more cost</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Data leaves your control</span>
                    <span className="text-red-400 font-semibold">Privacy risk</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Rate limits & outages</span>
                    <span className="text-red-400 font-semibold">Dependent on provider</span>
                  </div>
                  <div className="pt-3 border-t border-red-500/20 flex justify-between">
                    <span className="text-slate-300 font-semibold">Year 1 Total</span>
                    <span className="text-red-400 font-bold text-lg">$50K–$240K+</span>
                  </div>
                </div>
              </div>

              {/* Local */}
              <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03]">
                <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <Server size={20} /> Local AI Cluster (This Proposal)
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Hardware (one-time)</span>
                    <span className="text-emerald-400 font-semibold">~$20K</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Electricity (~100–150W avg/machine)</span>
                    <span className="text-emerald-400 font-semibold">~$300–$600/yr</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Unlimited queries, 24/7</span>
                    <span className="text-emerald-400 font-semibold">$0 per query</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Full data sovereignty</span>
                    <span className="text-emerald-400 font-semibold">HIPAA/GDPR ready</span>
                  </div>
                  <div className="pt-3 border-t border-emerald-500/20 flex justify-between">
                    <span className="text-slate-300 font-semibold">Year 1 Total</span>
                    <span className="text-emerald-400 font-bold text-lg">~$20.5K</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section delay={0.2}>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-500/20">
              <div className="text-3xl font-black text-white mb-1">
                Save $30K–$220K in Year 1 alone
              </div>
              <p className="text-slate-400">
                Hardware retains 60–80% resale value over 2–3 years. Apple Silicon depreciates slower than any other compute platform.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* Technology Stack — kept brief for investors */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">The Stack</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Production-ready. Open-source. Battle-tested by thousands of developers worldwide.
              </p>
            </div>
          </Section>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Cpu,
                name: "Apple Silicon Cluster",
                desc: "2× Mac Studio, 1TB unified memory, RDMA over Thunderbolt 5",
                color: "text-slate-300",
                bg: "bg-slate-500/10"
              },
              {
                icon: BrainCircuit,
                name: "Frontier AI Models",
                desc: "Kimi K2.5, DeepSeek v3.1, Qwen — run the best, switch anytime",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10"
              },
              {
                icon: Rocket,
                name: "Exo Runtime",
                desc: "Open-source clustering with automatic device discovery & tensor parallelism",
                color: "text-cyan-400",
                bg: "bg-cyan-500/10"
              },
              {
                icon: Zap,
                name: "OpenClaw Agents",
                desc: "Agentic AI framework — memory, tools, browser control, messaging, cron tasks",
                color: "text-amber-400",
                bg: "bg-amber-500/10"
              }
            ].map((item, i) => (
              <Section key={item.name} delay={0.1 * i}>
                <div className="h-full p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all">
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                    <item.icon className={item.color} size={20} />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{item.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Timeline */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Path to ROI</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Conservative projections. Break-even in 3–6 months. Scale from there.
              </p>
            </div>
          </Section>

          <Section delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <TimelineStep
                month="Month 1–2"
                title="Setup & First Clients"
                desc="Cluster operational. First 2–3 custom agent clients acquired through direct outreach and demo sessions. Launch first AI-powered app MVP."
                revenue="$15K–$40K revenue"
              />
              <TimelineStep
                month="Month 3–4"
                title="Product-Market Fit"
                desc="Refine offerings based on client feedback. Scale to 4–6 active clients. First recurring Private AI-as-a-Service contracts signed. App generating organic revenue."
                revenue="$20K–$50K/mo"
              />
              <TimelineStep
                month="Month 5–6"
                title="Break-Even & Beyond"
                desc="Investment fully recovered. Launch productized templates and courses. Word-of-mouth and content marketing driving inbound leads."
                revenue="$30K–$60K/mo"
              />
              <TimelineStep
                month="Month 7–12"
                title="Scale"
                desc="Multiple revenue streams compounding. Expand cluster if demand warrants. White-label partnerships with agencies. Projected run-rate at year end."
                revenue="$50K–$100K+/mo"
              />
            </div>
          </Section>
        </div>
      </section>

      {/* The Ask */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-emerald-950/15 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <Section>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">The Ask</span>
            </h2>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-8">
              <div className="text-5xl font-black text-white mb-2">$20,000</div>
              <p className="text-slate-400 text-lg mb-6">
                Total infrastructure investment for a frontier-class local AI cluster
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-emerald-400 font-bold text-xl">3–6mo</div>
                  <div className="text-slate-500 text-xs">to break-even</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-xl">$150K–$500K+</div>
                  <div className="text-slate-500 text-xs">Year 1 revenue potential</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-xl">60–80%</div>
                  <div className="text-slate-500 text-xs">hardware resale value</div>
                </div>
              </div>
            </div>

            <p className="text-slate-400 mb-8 leading-relaxed">
              The local AI wave is here. Thousands of developers are already building on this stack.
              This investment positions us at the infrastructure layer — where the margins are highest 
              and the moat is deepest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:eddie@eddiemoger.com?subject=AI%20Infrastructure%20Investment%20Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg transition-colors"
              >
                Schedule a Conversation <ArrowRight size={20} />
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Eddie Moger. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-slate-500 hover:text-white text-sm transition-colors">
              Portfolio
            </Link>
            <a href="mailto:eddie@eddiemoger.com" className="text-slate-500 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
