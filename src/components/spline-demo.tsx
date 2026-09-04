'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={600}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none" />

      <div className="relative z-20 flex flex-col lg:flex-row h-full items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl pt-20 lg:pt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="text-white">Build The</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              Future
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button className="group relative px-8 py-4 border border-white/20 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <span className="relative z-10">Watch Demo</span>
              <div className="absolute inset-0 bg-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative w-full h-[400px] lg:h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
