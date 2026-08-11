'use client'

import { useEffect, useState } from "react"

const stats = [
  { value: 10, suffix: "M+", label: "Active Users" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 50, suffix: "+", label: "Countries" },
  { value: 4.9, suffix: "/5", label: "User Rating" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * 10) / 10)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
