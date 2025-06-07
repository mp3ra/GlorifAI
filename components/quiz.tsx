// components/QuizSection.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function QuizSection() {
  return (
    <section id="quiz" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          What kind of prayer does your heart need right now?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
          Take a moment to reflect. This short quiz will help you uncover the prayer your soul is longing for — based on your season of life, emotions, and spiritual path. Thoughtful. Gentle. Just for you.
          </p>
          <a
            href="https://quiz.glorifai.app/"  // <-- Replace with your target website
           target="_blank"
            rel="noopener noreferrer">
            <Button className="rounded-full px-8 py-6 text-lg">✨ Start the Quiz</Button>
          </a>
        </div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 relative">
            <Image
              src="/images/quiz.png"
              alt="Prayer Quiz Illustration"
              fill
              className="object-contain rounded-xl shadow-xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
