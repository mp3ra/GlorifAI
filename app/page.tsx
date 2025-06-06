import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import HowItWorksSection from "@/components/how-it-works-section"
import WhyGlorifaiSection from "@/components/why-glorifai-section"
import BibleVerseSection from "@/components/bible-verse-section"
import CtaSection from "@/components/cta_section"
import PricingSection from "@/components/pricing"
import QuizSection from "@/components/quiz"
import NewsletterSection from "@/components/newsletter"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhyGlorifaiSection />
        <QuizSection />
        <HowItWorksSection />
        <BibleVerseSection />
        <CtaSection />
        <PricingSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
