import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Connect with God</span>
              <span className="block text-[#1c6bfe]">through AI-powered prayer</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
              Experience personalized audio prayers and Bible meditations tailored to your spiritual journey, struggles,
              and dreams.
            </p>
            <div className="mt-8 sm:mt-10">
              <Button className="rounded-full px-8 py-6 text-lg">Try GlorifAI</Button>
              <p className="mt-3 text-sm text-gray-500">No credit card required</p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Background decorative elements */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

              {/* App mockup */}
              <div className="relative">
                <Image
                  src="images/hero.png"
                  alt="GlorifAI App"
                  width={300}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
