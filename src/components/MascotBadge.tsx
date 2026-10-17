import React from 'react';

interface MascotBadgeProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const MascotBadge: React.FC<MascotBadgeProps> = ({ 
  size = 'md', 
  showTagline = false,
  className = '' 
}) => {
  const sizeMap = {
    sm: { container: 'w-10 h-10', text: 'text-xs', crown: 'w-3 h-3' },
    md: { container: 'w-14 h-14', text: 'text-sm', crown: 'w-4 h-4' },
    lg: { container: 'w-24 h-24', text: 'text-lg', crown: 'w-6 h-6' },
    xl: { container: 'w-36 h-36', text: 'text-xl', crown: 'w-8 h-8' }
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className={`relative ${current.container} flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#0c1836] via-[#091124] to-[#040814] p-1 border border-[#E5B842]/40 shadow-xl shadow-[#E5B842]/10 group`}>
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#E5B842]/20 via-transparent to-[#00F0FF]/20 opacity-70 group-hover:opacity-100 transition-opacity" />
        
        {/* Mascot SVG Silhouette / Artwork */}
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle background glow */}
          <circle cx="50" cy="50" r="42" fill="url(#bg-gradient)" />
          
          {/* Upward market chart lines */}
          <path d="M68 62 L74 54 L80 58 L88 40" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M88 40 L84 40 M88 40 L88 44" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />

          {/* Water wave at bottom */}
          <path d="M15 78 Q30 72 45 78 T75 78 T95 78" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 84 Q28 80 44 84 T74 84 T92 84" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />

          {/* Crocodile Head & Hoodie */}
          {/* Hoodie Body */}
          <path d="M28 88 C28 68 35 58 50 58 C65 58 72 68 72 88 Z" fill="#111827" stroke="#E5B842" strokeWidth="1.5" />
          {/* Hoodie inner zipper & N crown */}
          <line x1="50" y1="64" x2="50" y2="86" stroke="#E5B842" strokeWidth="1.5" />
          <path d="M47 70 L50 67 L53 70 L52 73 L48 73 Z" fill="#E5B842" />

          {/* Crocodile Snout and Head */}
          <ellipse cx="50" cy="46" rx="20" ry="16" fill="#15803D" stroke="#166534" strokeWidth="1.5" />
          {/* Snout front */}
          <path d="M34 46 C34 38 42 34 50 34 C58 34 66 38 66 46 C66 52 58 54 50 54 C42 54 34 52 34 46 Z" fill="#22C55E" />
          {/* Smile / Jaws */}
          <path d="M38 48 Q50 54 62 48" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Friendly sharp teeth */}
          <path d="M42 47 L44 50 L46 47 M48 48 L50 51 L52 48 M54 48 L56 50 L58 47" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Eyes */}
          <circle cx="43" cy="36" r="4.5" fill="#FFFFFF" />
          <circle cx="44" cy="36" r="2.5" fill="#047857" />
          <circle cx="44.8" cy="35.2" r="0.9" fill="#FFFFFF" />

          <circle cx="57" cy="36" r="4.5" fill="#FFFFFF" />
          <circle cx="56" cy="36" r="2.5" fill="#047857" />
          <circle cx="56.8" cy="35.2" r="0.9" fill="#FFFFFF" />

          {/* Snout nostrils */}
          <circle cx="47" cy="44" r="1" fill="#065F46" />
          <circle cx="53" cy="44" r="1" fill="#065F46" />

          {/* Golden Bitcoin Coin held in claw */}
          <g transform="translate(18, 52)">
            <circle cx="10" cy="10" r="9" fill="url(#gold-coin)" stroke="#B45309" strokeWidth="1" />
            <text x="7" y="14" fontSize="10" fontWeight="bold" fill="#78350F" fontFamily="sans-serif">₿</text>
          </g>

          {/* Gradients */}
          <defs>
            <radialGradient id="bg-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0.9" />
            </radialGradient>
            <linearGradient id="gold-coin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
          </defs>
        </svg>

        {/* Mini Gold crown top pin */}
        <div className="absolute -top-1.5 -right-1 px-1.5 py-0.5 rounded-full bg-[#E5B842] text-[#070D1B] text-[9px] font-black tracking-wider uppercase shadow">
          N
        </div>
      </div>

      {showTagline && (
        <div className="mt-2 text-center">
          <div className="text-[11px] font-bold tracking-widest text-[#E5B842] uppercase">
            NILE ECOSYSTEM
          </div>
          <div className="text-[9px] text-slate-400 tracking-wider">
            HUNT OPPORTUNITIES. BUILD WEALTH.
          </div>
        </div>
      )}
    </div>
  );
};
