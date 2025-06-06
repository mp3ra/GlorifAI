// components/CtaSection.tsx

import Image from 'next/image';

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
            <button className="bg-[#1c6bfe] text-white px-6 sm:px-12 md:px-16 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition">
              🎧 Try GlorifAI – It’s Free
            </button>

            {/* Optional: Waitlist input */}
            <form className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email..."
                className="px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c6bfe] w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-[#1c6bfe] text-white px-5 py-3 rounded-r-full hover:bg-blue-700 transition"
              >
                Notify Me
              </button>
            </form>
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
