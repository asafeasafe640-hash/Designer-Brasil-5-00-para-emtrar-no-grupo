import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="relative w-full max-w-lg mb-10 flex justify-center items-center">
      <div 
        className="relative w-full rounded-[25px] flex items-center justify-center border border-white/10"
        style={{
          background: `
            radial-gradient(70.27% 100% at 50% 0%, #141415 0%, #000000 100%),
            linear-gradient(180deg, rgba(96, 96, 96, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%)
          `,
          padding: '20px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Yellow Glow behind Lock */}
        <div 
          className="absolute pointer-events-none z-0 left-[20px] top-0 w-[120px] h-[100px]"
          style={{
            background: 'radial-gradient(circle at center, #FFE53B 0%, #FFB800 40%, transparent 70%)',
            filter: 'blur(20px)',
            opacity: 1
          }}
        />

        {/* Lock Icon */}
        <div className="relative z-10 flex-shrink-0 -rotate-[8.42deg] -ml-4 -mt-2 mr-6 md:mr-10">
          <div className="relative">
             {/* Using Lucide Lock as placeholder for the image, styled to look metallic/golden/orange */}
             <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] flex items-center justify-center drop-shadow-2xl">
                <Lock 
                    className="w-full h-full text-[#e0e0e0]" 
                    strokeWidth={1.5}
                    fill="url(#lockGradient)"
                />
                <svg width="0" height="0">
                  <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#555" offset="0%" />
                    <stop stopColor="#222" offset="100%" />
                  </linearGradient>
                </svg>
             </div>
          </div>
        </div>

        {/* Timer Digits */}
        <div className="flex items-center gap-4 md:gap-8 flex-shrink-0 z-10">
          <div className="text-center">
            <div 
              className="text-4xl md:text-[50px] font-bold leading-none"
              style={{
                background: 'linear-gradient(180deg, #FFE53B 0%, #FFB800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {formatTime(minutes)}
            </div>
            <p className="text-[#C1C1C1] text-[10px] md:text-xs uppercase tracking-wider mt-1">Minutos</p>
          </div>
          
          <div className="h-10 w-[1px] bg-gray-700/50"></div>

          <div className="text-center">
            <div 
              className="text-4xl md:text-[50px] font-bold leading-none"
              style={{
                background: 'linear-gradient(180deg, #FFE53B 0%, #FFB800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {formatTime(seconds)}
            </div>
            <p className="text-[#C1C1C1] text-[10px] md:text-xs uppercase tracking-wider mt-1">Segundos</p>
          </div>
        </div>
      </div>
    </div>
  );
};