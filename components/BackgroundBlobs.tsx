import React from 'react';

export const BackgroundBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
      {/* Top Left White Blob */}
      <div 
        className="absolute w-[300px] h-[300px] md:w-[469px] md:h-[469px] rounded-full"
        style={{
          top: '-150px',
          left: '-100px',
          background: 'radial-gradient(circle at center, #FFFFFF 0%, #E7E7E7 40%, transparent 70%)',
          filter: 'blur(180px)',
          opacity: 0.6,
          transform: 'translate3d(0,0,0)' // Hardware acceleration
        }}
      />
      
      {/* Bottom Right Green Blob (Desktop mostly, but visible on mobile slightly) */}
      <div 
        className="absolute w-[250px] h-[250px] md:w-[313px] md:h-[313px] rounded-full"
        style={{
          bottom: '5%',
          right: '-10%',
          background: 'radial-gradient(circle at center, #259D17 0%, #259D17 40%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.4,
          transform: 'translate3d(0,0,0)'
        }}
      />
    </div>
  );
};