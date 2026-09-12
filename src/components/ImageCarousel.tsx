import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  aspectRatio?: string;
  itemsPerViewMobile?: number;
  itemsPerViewDesktop?: number;
  showArrows?: boolean;
  showDots?: boolean;
  autoplayInterval?: number;
  className?: string;
  imageClassName?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  itemsPerViewMobile = 1,
  itemsPerViewDesktop = 2,
  showArrows = true,
  showDots = true,
  autoplayInterval = 4000,
  className = '',
  imageClassName = 'rounded-2xl',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(itemsPerViewDesktop);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(itemsPerViewMobile);
      } else {
        setItemsPerView(itemsPerViewDesktop);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerViewMobile, itemsPerViewDesktop]);

  const maxIndex = Math.max(0, images.length - itemsPerView);

  // Autoplay
  useEffect(() => {
    if (autoplayInterval <= 0 || images.length <= itemsPerView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayInterval, maxIndex, images.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch navigation
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <div className={`relative w-full overflow-hidden select-none py-2 ${className}`}>
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-2 box-border"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src={src}
                  alt={`Depoimento ${idx + 1}`}
                  className={`w-full h-auto object-contain max-h-[500px] shadow-md border border-neutral-800/20 ${imageClassName}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > itemsPerView && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Slide anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Próximo slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Pagination Bullets */}
      {showDots && images.length > itemsPerView && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Ir para o slide ${dotIdx + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === dotIdx
                  ? 'bg-[#FF4002] scale-125'
                  : 'bg-neutral-500/40 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
