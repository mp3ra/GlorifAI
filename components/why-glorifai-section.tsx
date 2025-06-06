"use client"

import { useEffect, useRef, useState } from "react"

export default function WhyGlorifaiSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const cards = [
    {
      emoji: "🧬",
      title: "100% Personalized",
      description: "Every prayer and meditation is tailored to your current need.",
      gradient: "from-blue-500/10 to-indigo-500/10",
      borderGradient: "from-blue-500/30 to-indigo-500/30",
      delay: 0.1,
    },
    {
      emoji: "💫",
      title: "For Seekers & Believers",
      description: "We welcome everyone on a spiritual path.",
      gradient: "from-indigo-500/10 to-purple-500/10",
      borderGradient: "from-indigo-500/30 to-purple-500/30",
      delay: 0.2,
    },
    {
      emoji: "❤️",
      title: "Built with Purpose, Not Profit",
      description: "Just two friends who needed help — and built what helped others.",
      gradient: "from-blue-500/10 to-sky-500/10",
      borderGradient: "from-blue-500/30 to-sky-500/30",
      delay: 0.3,
    },
  ]

  return (
    <section id="why-glorifai" ref={sectionRef} className="py-12 relative overflow-hidden">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Why <span className="text-[#1c6bfe]">GlorifAI</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We're building something different — technology that strengthens your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                transition: `opacity 0.5s ease-out ${card.delay}s, transform 0.5s ease-out ${card.delay}s`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Card */}
              <div
                className={`
                  relative h-full p-8 rounded-2xl backdrop-blur-sm
                  bg-gradient-to-br ${card.gradient}
                  border border-transparent hover:border-gradient-to-br hover:${card.borderGradient}
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1
                `}
              >
                {/* Emoji with background */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-6 relative">
                  <span className="text-3xl">{card.emoji}</span>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#1c6bfe] rounded-full"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-tl-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
