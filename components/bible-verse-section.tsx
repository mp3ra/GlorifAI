import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const verses = [
  {
    text: `"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."`,
    reference: "— John 3:16",
  },
  {
    text: `"For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."`,
    reference: "— Jeremiah 29:11",
  },
  {
    text: `"I can do all this through him who gives me strength."`,
    reference: "— Philippians 4:13",
  },
  {
    text: `"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."`,
    reference: "— Romans 8:28",
  },
  {
    text: `"Trust in the Lord with all your heart and lean not on your own understanding."`,
    reference: "— Proverbs 3:5",
  },
  
  // Add more verses as needed
];
export default function BibleVerseSection() {

  
  return (
    <section id="bible-verse" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-50"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Let God&apos;s Word speak to you today
          </span>
        </div>

       {/* Carousel for verses */}
  <Carousel>
    <CarouselContent>
      {verses.map((verse, idx) => (
        <CarouselItem key={idx}>
          <blockquote className="relative">
            {/* Glow effect behind text */}
            <div className="absolute inset-0 blur-2xl opacity-20">
              <p className="text-4xl md:text-5xl lg:text-6xl font-serif leading-relaxed text-[#1c6bfe]">
                {verse.text}
              </p>
            </div>
            {/* Main text */}
            <p className="relative text-4xl md:text-5xl lg:text-6xl font-serif leading-relaxed text-gray-800 drop-shadow-sm">
              {verse.text}
            </p>
            {/* Bible reference */}
            <cite className="block mt-8 text-lg md:text-xl text-gray-600 font-medium not-italic">
              {verse.reference}
            </cite>
          </blockquote>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-white/40 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-white/60 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-1 h-1 rounded-full bg-white/50 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  )
}
