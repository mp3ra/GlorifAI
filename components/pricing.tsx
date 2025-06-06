// components/PricingSection.tsx

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Choose Your Path to Peace</h2>
        <p className="text-gray-500 mb-10">Find peace — on your terms. Cancel anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">Free</h3>
            <p className="text-lg text-gray-500 mb-4">$0 / month</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ 5 prayers/month</li>
              <li>✓ Access to basic Bible verses</li>
              <li>✓ Limited prayer options</li>
              <li>✓ Standard quality audio</li>
              <li>✓ Basic listening features</li>
            </ul>
            <a href="https://apps.apple.com/pl/app/glorifai-daily-prayers/id6743354836">
            <button className="w-full bg-[#1c6bfe] text-white py-2 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button></a>
          </div>

          {/* Faithful Plan (Most Popular) */}
          <div className="border-2 border-[#1c6bfe] rounded-2xl p-6 shadow-lg relative bg-blue-50">
            <span className="absolute top-0 right-0 bg-[#1c6bfe] text-white text-sm px-3 py-1 rounded-bl-lg font-medium rounded-full">
              Most Popular
            </span>
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">Faithful Plan</h3>
            <p className="text-lg text-gray-700 mb-4">$14.99 / month</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✓ 30 prayers/month</li>
              <li>✓ Premium Bible study content</li>
              <li>✓ Enhanced prayer options</li>
              <li>✓ High-quality audio</li>
              <li>✓ Billed monthly</li>
            </ul>
            <a href="https://apps.apple.com/pl/app/glorifai-daily-prayers/id6743354836">
            <button className="w-full bg-[#1c6bfe] text-white py-2 rounded-full hover:bg-blue-700 transition">
              Choose Plan
            </button></a>
          </div>

          {/* Unlimited Plan */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">Unlimited Prayer</h3>
            <p className="text-lg text-gray-500 mb-4">$29.99 / month</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ Unlimited daily prayers</li>
              <li>✓ All Faithful Plan features</li>
              <li>✓ Priority prayer requests</li>
              <li>✓ Early access to new features</li>
              <li>✓ Billed monthly</li>
            </ul>
            <a href="https://apps.apple.com/pl/app/glorifai-daily-prayers/id6743354836">
            <button className="w-full bg-[#1c6bfe] text-white py-2 rounded-full hover:bg-blue-700 transition">
              Choose Plan
            </button></a>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          🙌 Easy cancellation — cancel anytime from your phone. No hidden fees or commitments.
        </p>
      </div>
    </section>
  );
}
