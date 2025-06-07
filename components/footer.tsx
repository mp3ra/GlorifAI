import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
              GlorifAI
            </span>
            <p className="mt-4 text-gray-500 text-sm">
              Connecting you with God through personalized AI-powered prayers and Bible meditations.
            </p>
          </div>
         {/*
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
              
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} GlorifAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
