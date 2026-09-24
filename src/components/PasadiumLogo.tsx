import React from 'react';

interface PasadiumLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  variant?: 'horizontal' | 'vertical';
}

export const PasadiumLogo: React.FC<PasadiumLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showSubtitle = true,
  variant = 'horizontal',
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[8px] tracking-[0.25em]' },
    md: { icon: 'w-9 h-9', text: 'text-lg', sub: 'text-[9px] tracking-[0.28em]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-[10px] tracking-[0.3em]' },
    xl: { icon: 'w-16 h-16', text: 'text-3xl', sub: 'text-xs tracking-[0.35em]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={`inline-flex items-center ${
        variant === 'vertical' ? 'flex-col text-center' : 'flex-row'
      } gap-3 select-none ${className}`}
    >
      {/* Authentic Multi-Ribbon Cyber "P" Monogram */}
      <div className={`relative ${currentSize.icon} shrink-0`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]"
        >
          <defs>
            {/* Outer Cyan ribbon gradient */}
            <linearGradient id="pGradOuter" x1="10" y1="50" x2="110" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#0077B6" />
            </linearGradient>

            {/* Middle Blue-Violet ribbon gradient */}
            <linearGradient id="pGradMid" x1="15" y1="55" x2="105" y2="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="45%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>

            {/* Inner Purple ribbon gradient */}
            <linearGradient id="pGradInner" x1="20" y1="60" x2="95" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00A3FF" />
              <stop offset="50%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Loop & Stem Magenta transition */}
            <linearGradient id="pGradLoop" x1="40" y1="50" x2="80" y2="115" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0080FF" />
              <stop offset="40%" stopColor="#7C3AED" />
              <stop offset="75%" stopColor="#C026D3" />
              <stop offset="100%" stopColor="#E879F9" />
            </linearGradient>

            {/* Core lower petal glow */}
            <linearGradient id="pGradPetal" x1="30" y1="80" x2="65" y2="118" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>

            <filter id="pGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Group containing the fluid 3-layer ribbon structure */}
          <g filter="url(#pGlow)">
            {/* 1. Outer sweep line */}
            <path
              d="M 22 56 C 26 50, 36 32, 54 22 C 68 14, 86 16, 96 28 C 104 38, 103 54, 91 66 C 79 77, 63 76, 52 82 C 45 86, 40 98, 41 112 C 40 98, 48 85, 59 78 C 72 70, 93 68, 97 50 C 100 37, 86 21, 68 22 C 50 23, 33 38, 22 56 Z"
              fill="url(#pGradOuter)"
            />

            {/* 2. Middle sweeping trail */}
            <path
              d="M 26 60 C 31 54, 40 40, 56 31 C 68 24, 82 26, 90 35 C 96 43, 95 55, 85 64 C 74 72, 60 72, 50 78 C 44 82, 40 93, 41 106 C 41 93, 47 82, 56 75 C 68 67, 85 64, 87 50 C 89 40, 78 28, 64 30 C 49 32, 36 44, 26 60 Z"
              fill="url(#pGradMid)"
            />

            {/* 3. Inner arching accent */}
            <path
              d="M 30 64 C 36 59, 44 48, 58 40 C 68 34, 79 36, 84 43 C 89 49, 87 58, 79 64 C 69 70, 57 71, 48 77 C 43 81, 41 89, 41 98 C 42 89, 47 80, 54 74 C 64 67, 77 64, 78 54 C 80 46, 71 37, 60 38 C 47 41, 38 52, 30 64 Z"
              fill="url(#pGradInner)"
            />

            {/* 4. Lower petal / drop stem forming the bottom of the P */}
            <path
              d="M 41 114 C 41 104, 48 88, 60 76 C 68 68, 78 68, 77 76 C 76 83, 68 93, 58 102 C 50 110, 43 113, 41 114 Z"
              fill="url(#pGradLoop)"
              opacity="0.95"
            />

            {/* 5. Sharp luminous purple/pink quill tip */}
            <path
              d="M 41 114 C 42 108, 46 99, 52 92 C 56 87, 62 84, 60 90 C 58 97, 50 106, 41 114 Z"
              fill="url(#pGradPetal)"
            />

            {/* Highlight specular curve */}
            <path
              d="M 52 23 C 65 17, 82 18, 93 28 C 98 33, 99 41, 95 48 C 93 42, 90 34, 83 29 C 74 23, 62 23, 52 23 Z"
              fill="#FFFFFF"
              opacity="0.35"
            />
          </g>
        </svg>
      </div>

      {/* Typography Wordmark & Brand Subtitle */}
      {showText && (
        <div className={`flex flex-col ${variant === 'vertical' ? 'items-center' : 'items-start'}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-black tracking-tight text-white ${currentSize.text} leading-none`}
            >
              PASADIUM
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`font-mono uppercase font-semibold text-neutral-400 ${currentSize.sub} mt-1`}
            >
              TRADE · INVEST · BUILD · GROW
            </span>
          )}
        </div>
      )}
    </div>
  );
};
