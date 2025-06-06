"use client"

import { useEffect, useRef, useState } from "react"

export default function HowItWorksSection() {
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

  const steps = [
    {
      icon: "✍️",
      title: "Tell us what's on your heart",
      description: "Share your struggles, dreams, or gratitude in just a few words.",
    },
    {
      icon: "🎙️",
      title: "We generate your audio prayer or meditation",
      description: "Our AI creates a personalized prayer or meditation based on biblical principles.",
    },
    {
      icon: "🙏",
      title: "You listen and reconnect",
      description: "Experience a moment of peace and connection with God anywhere.",
    },
  ]

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            How <span className="text-[#1c6bfe]">GlorifAI</span> brings faith into your everyday
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to reconnect with God through personalized prayer
          </p>
        </div>

        <div className="relative">
          {/* Progress line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gray-200">
            <div
              className={`h-full bg-[#1c6bfe] transition-all duration-1000 ease-out ${isVisible ? "w-full" : "w-0"}`}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1c6bfe] text-white font-bold text-lg mb-6 mx-auto relative z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mx-auto w-0.5 h-8 bg-gray-200 my-4">
                    <div
                      className={`w-full bg-[#1c6bfe] transition-all duration-500 ${isVisible ? "h-full" : "h-0"}`}
                      style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
