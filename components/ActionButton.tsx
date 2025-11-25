import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ActionButton: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/FBxmhSSvP49G1fnWcHah5w?mode=hqrt2";

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-md block">
      <button
        className="
          relative overflow-hidden w-full h-16 rounded-full flex items-center justify-center gap-3
          transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]
          group
        "
        style={{
          background: 'linear-gradient(270deg, #00C400 0%, #004B00 100%)',
          boxShadow: '0px 0px 15.14px 0px #6EC06F99 inset, 0px 11.35px 54.11px 0px #02FE344D',
          border: '1.26px solid #009A00'
        }}
      >
        {/* Shine Effect */}
        <span 
          aria-hidden="true" 
          className="pointer-events-none absolute top-0 h-full w-[50px] opacity-50 mix-blend-overlay animate-shine"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
            transform: 'skewX(-15deg)',
            zIndex: 10
          }}
        />

        <div className="flex items-center justify-center gap-2 z-20">
          <span 
            className="text-base md:text-lg font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 drop-shadow-sm"
          >
            Garantir meu ingresso
          </span>
          <MessageCircle className="w-6 h-6 text-white fill-white" />
        </div>
      </button>
    </a>
  );
};