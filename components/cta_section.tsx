// components/CtaSection.tsx

import Image from 'next/image';
import { Button } from "@/components/ui/button"


export default function CtaSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left: Text and CTA */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Start your first guided prayer in under 60 seconds.
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Just answer one question. We'll take care of the rest.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="https://apps.apple.com/pl/app/glorifai-daily-prayers/id6743354836">
            <Button className="rounded-full px-8 py-6 text-lg">Try GlorifAI</Button></a>
            <p className="mt-3 text-sm text-gray-500">No credit card required</p>

           
          </div>
        </div>

        {/* Right: Visual */}
        <div className="md:w-1/2 flex justify-center">
          {/* Replace with actual mockup image when available */}
          <div className="w-64 h-96 relative">
            <Image
              src="/images/mockup.png" 
              alt="GlorifAI App Preview"
             fill
             className="rounded-3xl shadow-xl object-contain"
            priority
    />
</div>

        </div>

      </div>
    </section>
  );
}
