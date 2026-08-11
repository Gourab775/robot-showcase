'use client'

import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-neutral-400" />
          <span className="text-sm text-neutral-300">Start building today</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500 leading-tight">
          Ready to create something
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
            extraordinary?
          </span>
        </h2>

        <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Join thousands of creators who are already building the future of the web.
          No credit card required. Start for free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black font-semibold text-lg rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Start Free Trial</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-neutral-500">
          <span>No credit card required</span>
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
          <span>14-day free trial</span>
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  )
}
