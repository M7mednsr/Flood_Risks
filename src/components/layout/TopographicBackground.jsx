import React from 'react';
import topoImage from '../../assets/topography_bg.png';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
      <style>{`
        @keyframes drift3d {
          0% { transform: scale(1) rotateX(10deg) rotateY(-5deg) translateZ(-50px) translateY(0%); }
          50% { transform: scale(1.15) rotateX(20deg) rotateY(5deg) translateZ(50px) translateY(-5%); }
          100% { transform: scale(1) rotateX(10deg) rotateY(-5deg) translateZ(-50px) translateY(0%); }
        }
        .animate-drift-3d {
          animation: drift3d 35s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>

      {/* Base Slate Background */}
      <div className="absolute inset-0 bg-slate-50"></div>
      
      {/* Topographic Pattern Overlay */}
      <div 
        className="absolute -inset-[30%] opacity-40 mix-blend-multiply animate-drift-3d"
        style={{
          backgroundImage: `url(${topoImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

    </div>
  );
};

export default TopographicBackground;
