// components/NewsletterSection.tsx
import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 md:px-24 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Receive Peaceful Inspiration in Your Inbox
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Sign up for our newsletter to get calming Bible meditations, prayer reflections, and spiritual encouragement — once a week, no noise, just peace.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c6bfe] transition"
          />
          <button
            type="submit"
            className="bg-[#1c6bfe] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            ✉️ Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
