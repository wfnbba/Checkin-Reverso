import React from 'react';
import { MARQUEE_ICONS } from '../data';

interface MarqueeTickerProps {
  className?: string;
  speed?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden select-none py-3 bg-[#010101] ${className}`}>
      <div className="animate-marquee flex items-center gap-6">
        {MARQUEE_ICONS.concat(MARQUEE_ICONS).concat(MARQUEE_ICONS).map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-12 md:h-14 px-2"
          >
            <img
              src={src}
              alt="Highlight item"
              className="h-9 md:h-12 w-auto object-contain pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
