import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const WeddingCarousel = ({ photos = [], autoPlayInterval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Default photos if none provided
  const defaultPhotos = [
    { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', alt: 'Wedding ceremony' },
    { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', alt: 'First dance' },
    { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', alt: 'Exchange of vows' },
    { url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800', alt: 'Wedding party' },
  ];

  const displayPhotos = photos.length > 0 ? photos : defaultPhotos;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % displayPhotos.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [isPlaying, isPaused, displayPhotos.length, autoPlayInterval]);

  return (
    <div className="space-y-6">
      {/* Main Image Display */}
      <div 
        className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-200"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img
          src={displayPhotos[currentSlide].url}
          alt={displayPhotos[currentSlide].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + displayPhotos.length) % displayPhotos.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Previous photo"
        >
          <ChevronLeft className="text-purple-700" size={24} />
        </button>
        
        {/* Next Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % displayPhotos.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Next photo"
        >
          <ChevronRight className="text-purple-700" size={24} />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying && !isPaused ? (
            <Pause className="text-purple-700" size={20} />
          ) : (
            <Play className="text-purple-700" size={20} />
          )}
        </button>
        
        {/* Slide Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
          {currentSlide + 1} / {displayPhotos.length}
        </div>

        {/* Progress Bar */}
        {isPlaying && !isPaused && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
            <div 
              className="h-full bg-purple-500"
              style={{
                animation: `progress ${autoPlayInterval}ms linear`,
                animationFillMode: 'forwards'
              }}
            />
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-hide">
        {displayPhotos.map((photo, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
              currentSlide === idx
                ? 'ring-4 ring-purple-500 scale-110 shadow-lg'
                : 'opacity-60 hover:opacity-100 hover:scale-105'
            }`}
            aria-label={`Go to photo ${idx + 1}`}
          >
            <img
              src={photo.url}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default WeddingCarousel;