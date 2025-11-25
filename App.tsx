import React from 'react';
import { BackgroundBlobs } from './components/BackgroundBlobs';
import { GradientText } from './components/GradientText';
import { CountdownTimer } from './components/CountdownTimer';
import { ActionButton } from './components/ActionButton';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-background text-white selection:bg-yellow-500/30">
      <BackgroundBlobs />
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center select-none">
        
        {/* Header Label */}
        <p className="text-[12px] md:text-[14px] tracking-[0.3em] text-[#7F7F7F] mb-4 md:mb-6 uppercase font-medium">
          Parabéns
        </p>
        
        {/* Main Title */}
        <h2 className="text-white text-[32px] md:text-[46px] max-w-[300px] md:max-w-[500px] font-bold mb-6 md:mb-8 leading-[1.1]">
          Esse é o <GradientText>último passo</GradientText>
        </h2>
        
        {/* Description */}
        <p className="text-[#C1C1C1] max-w-[320px] md:max-w-[500px] text-[16px] md:text-[22px] mb-8 md:mb-12 leading-relaxed">
          Para garantir o seu ingresso gratuito e liberar acesso ao canal exclusivo da Apresentação "Designer" Brasil,{' '}
          <GradientText className="font-semibold">
            desbloqueie agora seu ingresso gratuito
          </GradientText>{' '}
          clicando no botão abaixo:
        </p>
        
        {/* Timer Card */}
        <CountdownTimer />
        
        {/* CTA Button */}
        <div className="w-full flex justify-center px-4">
            <ActionButton />
        </div>
        
        {/* Footer/Safe Message */}
        <div className="mt-8 flex items-center gap-2 text-[#7F7F7F] text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>Ambiente 100% Seguro</span>
        </div>

      </div>
    </main>
  );
};

export default App;