import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import HowItWorksSection from "@/components/how-it-works-section"
import WhyGlorifaiSection from "@/components/why-glorifai-section"
import BibleVerseSection from "@/components/bible-verse-section"
import CtaSection from "@/components/cta_section"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyGlorifaiSection />
        <BibleVerseSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
