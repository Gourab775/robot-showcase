'use client'

import { Cpu, Palette, Globe, Shield, Rocket, Code2 } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Design",
    description: "Let artificial intelligence handle the heavy lifting while you focus on creativity and innovation.",
  },
  {
    icon: Palette,
    title: "Stunning Visuals",
    description: "Create breathtaking 3D scenes and animations that leave a lasting impression on your visitors.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy to edge networks worldwide. Your content loads instantly, no matter where your users are.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols protect your data and your users' privacy.",
  },
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Optimized performance ensures your 3D experiences load in milliseconds, not seconds.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Clean APIs, comprehensive docs, and a thriving community. Built by developers, for developers.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-400 bg-white/5 rounded-full border border-white/10 mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Everything you need
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            A complete toolkit for building the next generation of interactive web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 hover:border-white/15 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
