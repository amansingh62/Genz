'use client';

import { Oswald } from 'next/font/google';
import Button2 from './Button2';
import TextShimmer from '@/components/TextShimmer';

// ✅ Correct font initialization with variable
const oswaldFont = Oswald({ subsets: ['latin'], weight: '700', variable: '--font-oswald' });

export default function DietTitle() {
  return (
    <div className={`mt-20 flex items-center justify-center bg-black text-white px-6 ${oswaldFont.variable}`}>
      <div className="w-full max-w-screen-xl text-center space-y-6">

        {/* Shimmer Effect on Text */}
        <TextShimmer
          duration={1.5} 
          className="tracking-[0.5rem] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4]"
        >
          Introducing Diet Plans
        </TextShimmer>

        {/* Title with Gradient Effect */}
        <h1
          className="text-6xl lg:text-8xl font-extrabold text-center uppercase leading-[7rem] text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] tracking-wider"
          style={{ fontFamily: 'var(--font-oswald)' }} // ✅ Ensuring the correct font is applied
        >
          The Ultimate Guide to <br /> Fitness Nutrition
        </h1>

        {/* Paragraph with Soft Shadow and Reduced Width */}
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Your fitness journey is not just about workouts, it is about what you <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] text-xl"><strong>fuel your body with</strong></span>. A well- <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] text-xl"><strong>balanced diet</strong></span> is the key to maximizing your performance, <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] text-xl"><strong>accelerating muscle growth,</strong></span> and shedding unwanted fat. Say goodbye to guesswork and hello to a <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E3A8A] to-[#06B6D4] text-xl"><strong>structured nutrition plan</strong></span> that keeps you energized, focused, and ready to conquer every workout.
        </p>

        <Button2 text="Get Started" />
      </div>
    </div>
  );
}
