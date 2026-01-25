import React, { useState, useEffect } from 'react';
import { Music, MapPin, Calendar, Clock, Heart, Sparkles } from 'lucide-react';
import WeddingCarousel from './assets/WeddingCarousel';
import guestData  from '../public/assets/names/guests';

// Wedding details - customize these
const weddingInfo = {
  bride: "និកាណ៌",
  groom: "ឌីម៉ង់",
  date: "២៨ កុម្ភះ ២០២៥",
  time: "០៥:00 ល្ងាច",
  venue: "ភោជនីយដ្ឋាន វិមានពរជ័យ",
  address: "ក្រុងបាត់ដំបង",
  ceremony: "5:00 PM",
  reception: "7:00 PM"
};

// Photo slideshow - replace with your actual photo URLs
const photos = [
  "/assets/DSC023591.jpg",
  "/assets/DSC023761.jpg",
  "/assets/DSC024031.jpg",
  "/assets/DSC024361.jpg",
  "/assets/DSC024571.jpg"
];

  const weddingPhotos = [
    { url: '/assets/iloveimg/IMG1.png', alt: 'Wedding ceremony' },
    { url: '/assets/iloveimg/IMG2.png', alt: 'First dance' },
    { url: '/assets/iloveimg/IMG3.png', alt: 'Exchange of vows' },
    { url: '/assets/iloveimg/IMG4.png', alt: 'Wedding party' },
    { url: '/assets/iloveimg/IMG5.png', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG6.jpg', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG7.jpg', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG8.jpg', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG9.jpg', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG10.jpg', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG11.jpg', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG12.jpg', alt: 'Reception' },
    { url: '/assets/iloveimg/IMG13.jpg', alt: 'Reception' },
    // { url: '/assets/iloveimg/IMG14.jpg', alt: 'Reception' },
    // { url: '/assets/iloveimg/IMG1.png', alt: 'Couple portrait' },
  ];

const Firefly = ({ delay, index }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100
  });
  
  const [opacity, setOpacity] = useState(Math.random() * 0.5 + 0.3);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }, 4000 + Math.random() * 3000);

    const fadeInterval = setInterval(() => {
      setOpacity(Math.random() * 0.6 + 0.2);
    }, 1500 + Math.random() * 1000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(fadeInterval);
    };
  }, []);

  const size = Math.random() * 2.5 + 2;

  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: 'rgba(255, 251, 150, 0.9)',
        transition: `all ${3 + Math.random() * 2}s cubic-bezier(0.4, 0, 0.2, 1)`,
        opacity: opacity,
        boxShadow: `0 0 ${size * 5}px ${size * 2}px rgba(255, 251, 150, 0.8), 0 0 ${size * 10}px ${size * 4}px rgba(255, 251, 150, 0.4)`,
        filter: 'blur(0.3px)',
        animation: `twinkle ${1 + Math.random()}s ease-in-out infinite alternate`
      }}
    />
  );
};
  const flowers = {
    cherry: '/assets/flowers/4.webp',
    blossom: '/assets/flowers/7.webp',
  };

  const Flower = ({ type }) => {
    const [position, setPosition] = useState({
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition({
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360
        });
      }, 10000 + Math.random() * 5000);
      return () => clearInterval(interval);
    }, []);

    const flowerImg = flowers[type] || flowers.cherry;
    const size = 30 + Math.random() * 30; // Slightly larger for images

    return (
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          width: `${size}px`,
          height: `${size}px`,
          transition: `all ${8 + Math.random() * 4}s cubic-bezier(0.4, 0, 0.2, 1)`,
          transform: `rotate(${position.rotation}deg)`,
          opacity: 0.4 + Math.random() * 0.4,
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) brightness(1.1)', // The "Fairy Glow"
          animation: `float ${4 + Math.random() * 3}s ease-in-out infinite alternate`,
        }}
      >
        <img 
          src={flowerImg} 
          alt="flower" 
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  const GlassEdgeFlower = ({ src, className, style }) => (
    <img 
      src={src} 
      alt="Edge Decoration"
      loading="lazy"
      // The z-40 ensures it's OVER the glass container (which is z-30)
      className={`absolute pointer-events-none z-40 ${className}`} 
      style={{
        filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.2))', 
        ...style
      }}
    />
  );

const MagicSparkle = ({ delay }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `sparkle ${2 + Math.random() * 2}s ease-in-out ${delay}s infinite`
      }}
    >
      <Sparkles 
        className="text-purple-300" 
        size={12 + Math.random() * 8}
        style={{
          filter: 'drop-shadow(0 0 3px rgba(216, 180, 254, 0.8))'
        }}
      />
    </div>
  );
};

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center z-50">
    {[...Array(20)].map((_, i) => (
      <Firefly key={`firefly-loading-${i}`} delay={i * 0.2} index={i} />
    ))}
    <div className="text-center">
      <Heart 
        className="w-16 h-16 mx-auto mb-4 text-purple-300 animate-pulse" 
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(216, 180, 254, 0.8))',
          animation: 'float 2s ease-in-out infinite'
        }}
      />
      <p className="text-white text-xl font-serif">Loading your invitation...</p>
      <div className="mt-4 flex justify-center gap-2">
        <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  </div>
);

const PreloadAssets = ({ imageUrls }) => (
  <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
    {imageUrls.map((url, index) => (
      <img
        key={index}
        src={url}
        alt="Preloading asset"
        // Use a high priority for key assets
        loading="eager" 
      />
    ))}
  </div>
);

const PhotoSlideshow = ({ onComplete }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Preload all images before starting slideshow
  useEffect(() => {
    let loaded = 0;
    
    photos.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === photos.length) {
          setAllLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === photos.length) {
          setAllLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  // Only start timer AFTER all images loaded
  useEffect(() => {
    if (!allLoaded) return;

    const timer = setInterval(() => {
      setCurrentPhoto(prev => {
        if (prev >= photos.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [allLoaded, onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 z-50 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <Firefly key={`firefly-slide-${i}`} delay={i * 0.2} index={i} />
      ))}
      
      {[...Array(15)].map((_, i) => (
        <MagicSparkle key={`sparkle-slide-${i}`} delay={i * 0.3} />
      ))}
      
      {/* Show loading indicator while images load */}
      {!allLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
          <Heart 
            className="w-16 h-16 mb-4 text-purple-300 animate-pulse" 
            style={{ 
              filter: 'drop-shadow(0 0 20px rgba(216, 180, 254, 0.8))',
              animation: 'float 2s ease-in-out infinite'
            }}
          />
          <p className="text-white text-xl font-serif mb-4">Loading memories...</p>
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-purple-300 text-sm">{loadedCount} / {photos.length} photos loaded</p>
        </div>
      )}
      
      {/* Photo layers with crossfade - only show when loaded */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${allLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{
              opacity: idx === currentPhoto ? 1 : 0,
              transitionDuration: '2000ms'
            }}
          >
            <img 
              src={photo}
              loading="eager"
              alt={`Wedding photo ${idx + 1}`}
              className="w-full h-full object-cover md:object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [guestName, setGuestName] = useState('Guest');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [framingFlowersLoaded, setFramingFlowersLoaded] = useState(false);

  useEffect(() => {
  // 1. Get the 'id' from the URL (e.g., ?id=1)
  const queryParams = new URLSearchParams(window.location.search);
  const guestId = queryParams.get('id');

  // 2. Set the name based on the ID found
  if (guestId && guestData[guestId]) {
    setGuestName(guestData[guestId]);
  } else {
    setGuestName('Dear Guest'); // Default fallback
  }
}, []);

  useEffect(() => {
    // const guestId = "1";
    // setGuestName(guestData[guestId] || 'Dear Guest');

    // https://invitation.vercel.app/?id=1
        // 1. Get the 'id' from the URL (e.g., ?id=1)
    const queryParams = new URLSearchParams(window.location.search);
    const guestId = queryParams.get('id');

    // 2. Set the name based on the ID found
    if (guestId && guestData[guestId]) {
      setGuestName(guestData[guestId]);
    } else {
      setGuestName('Dear Guest'); // Default fallback
    }
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.9; transform: scale(1.3); }
      }
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
        50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
      }
      @keyframes petalFall {
        0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }

      @keyframes sway {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(2deg); } /* Gentle tilt right */
        100% { transform: rotate(-2deg); } /* Gentle tilt left */
      }

      /* --- ADDED FADE-IN ANIMATION KEYFRAMES --- */
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [audio] = useState(() => {
    const a = new Audio('/assets/song.mp3');
    a.loop = true;
    a.volume = 0; // Start at 0 for fade-in
    return a;
  });


    // --- FINAL CORRECTED FramingFlower COMPONENT ---
const FramingFlower = ({ src, positionClass, sizeClass, delay, baseTransform = '' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`absolute pointer-events-none z-20 ${positionClass} ${sizeClass} transition-opacity duration-700`}
      style={{
        transform: baseTransform,
        opacity: imageLoaded ? 1 : 0,
      }}
    >
      <img 
        src={src} 
        alt="Decorative Flower"
        loading="eager"
        fetchPriority="high"
        className="w-full h-full object-contain"
        onLoad={() => setImageLoaded(true)}
        style={{
          animation: imageLoaded ? `sway ${5 + Math.random() * 3}s ease-in-out ${delay}s infinite alternate` : 'none',
        }}
      />
    </div>
  );
};

useEffect(() => {
  // Preload framing flowers before showing cover page
  const framingFlowerImages = [
    '/assets/flowers/2.webp',
    '/assets/flowers/5.webp'
  ];
  
  let loadedCount = 0;
  
  framingFlowerImages.forEach(src => {
    const img = new Image();
    img.onload = () => {
      loadedCount++;
      if (loadedCount === framingFlowerImages.length) {
        setFramingFlowersLoaded(true);
      }
    };
    img.onerror = () => {
      loadedCount++;
      if (loadedCount === framingFlowerImages.length) {
        setFramingFlowersLoaded(true);
      }
    };
    img.src = src;
  });
}, []);
    // ----------------------------------------------------

  const fadeIn = (audio, duration = 3000) => {
  const steps = 50;
  const stepDuration = duration / steps;
  const volumeIncrement = 0.5 / steps;
  let currentStep = 0;

  const fadeInterval = setInterval(() => {
    if (currentStep >= steps) {
      clearInterval(fadeInterval);
      audio.volume = 0.5;
    } else {
      audio.volume = Math.min(audio.volume + volumeIncrement, 0.5);
      currentStep++;
    }
  }, stepDuration);
};

const fadeOut = (audio, duration = 1000) => {
  const steps = 20;
  const stepDuration = duration / steps;
  const volumeDecrement = audio.volume / steps;
  let currentStep = 0;

  const fadeInterval = setInterval(() => {
    if (currentStep >= steps || audio.volume <= 0) {
      clearInterval(fadeInterval);
      audio.volume = 0;
      audio.pause();
    } else {
      audio.volume = Math.max(audio.volume - volumeDecrement, 0);
      currentStep++;
    }
  }, stepDuration);
};

const toggleMusic = () => {
  if (isMusicPlaying) {
    fadeOut(audio);
    setIsMusicPlaying(false);
  } else {
    audio.volume = 0;
    audio.play()
      .then(() => {
        fadeIn(audio);
        setIsMusicPlaying(true);
      })
      .catch(err => console.log('Audio play failed:', err));
  }
};

const handleOpen = () => {
  // Immediately hide cover page and show loading screen
  setIsOpened(true);
  setIsLoading(true);
  
  // Start music right away
  audio.volume = 0;
  audio.play()
    .then(() => {
      setIsMusicPlaying(true);
      fadeIn(audio, 3000);
      console.log('Music playing successfully!');
    })
    .catch(error => {
      console.log('Audio play failed:', error);
    });
  
  // Preload photos
  const preloadPromises = photos.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        console.log(`✅ Loaded: ${src}`);
        resolve();
      };
      img.onerror = () => {
        console.log(`❌ Failed: ${src}`);
        reject();
      };
      img.src = src;
    });
  });

  // Maximum 10 second timeout for slow connections
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log('⏱️ Timeout: Starting slideshow anyway');
      resolve();
    }, 10000);
  });

  Promise.race([Promise.all(preloadPromises), timeoutPromise])
    .then(() => {
      console.log('✨ All photos ready, waiting before slideshow');
      // Wait 1.5 seconds after loading completes before showing slideshow
      setTimeout(() => {
        setIsLoading(false);
        setShowSlideshow(true);
      }, 1500); // Adjust this number (in milliseconds) for longer/shorter delay
    })
    .catch(error => {
      console.log('⚠️ Some photos failed, starting anyway:', error);
      setTimeout(() => {
        setIsLoading(false);
        setShowSlideshow(true);
      }, 1500);
    });
};

  const handleSlideshowComplete = () => {
    setShowSlideshow(false);
    setShowMainContent(true);
  };

  if (isLoading) {
  return <LoadingScreen />;
}

if (!framingFlowersLoaded) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center z-50">
      {[...Array(20)].map((_, i) => (
        <Firefly key={`firefly-loading-${i}`} delay={i * 0.2} index={i} />
      ))}
      <div className="text-center">
        <Heart 
          className="w-16 h-16 mx-auto mb-4 text-purple-300 animate-pulse" 
          style={{ 
            filter: 'drop-shadow(0 0 20px rgba(216, 180, 254, 0.8))',
            animation: 'float 2s ease-in-out infinite'
          }}
        />
        <p className="text-white text-xl font-serif">Preparing your invitation...</p>
      </div>
    </div>
  );
}

  if (!isOpened) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
        
        {/* --- ADDED FLOWER FRAME IMAGES HERE --- */}
        <FramingFlower 
          src="/assets/flowers/2.webp" 
          // Position: Top edge, centered horizontally
          positionClass="top-0 -translate-x-1/2" 
          // Size: Full width on mobile, constrained on large screens
          sizeClass="w-full lg:w-auto"
          delay={0}
          // NEW PROP: baseTransform handles static positioning and flip
          baseTransform={'rotate(180deg) translateY(100px)'} 
        />

        {/* 2. BOTTOM-LEFT FLOWER (Standard positioning) */}
        <FramingFlower 
          src="/assets/flowers/5.webp" // Changed to 1.png for this spot
          positionClass="bottom-0 left-0" 
          sizeClass="w-60 md:w-48 md:h-48"
          delay={1.5}
        />

        {/* 3. BOTTOM-RIGHT FLOWER (Standard positioning) */}
        <FramingFlower 
          src="/assets/flowers/5.webp" 
          positionClass="bottom-0 right-0" 
          sizeClass="w-60 md:w-48 md:h-48"
          delay={3}
          baseTransform={'translateX(20px) translateY(20px) scaleX(-1)'} 
        />
        {/* -------------------------------------- */}

        {[...Array(35)].map((_, i) => (
          <Firefly key={`firefly-${i}`} delay={i * 0.2} index={i} />
        ))}
        
        {/* {[...Array(15)].map((_, i) => (
          <MagicSparkle key={`sparkle-${i}`} delay={i * 0.3} />
        ))} */}
        
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="text-center z-10 max-w-md w-full">
          <div 
            className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-200/50 relative overflow-hidden"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-tl-full"></div>
            
            <div className="relative">
              <Heart 
                className="w-20 h-20 mx-auto mb-6 text-purple-600 animate-pulse" 
                style={{ 
                  filter: 'drop-shadow(0 0 10px rgba(182, 131, 229, 0.5))',
                  animation: 'float 2s ease-in-out infinite'
                }}
              />
              
              <h1 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 mb-4 py-2">
                {weddingInfo.bride} & {weddingInfo.groom}
              </h1>
              
              <div className="my-8 py-6 border-y-2 border-purple-300 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent"></div>
                <p className="text-lg text-purple-700 mb-2 relative z-10">សូមគោរពអញ្ជើញ</p>
                <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 relative z-10">
                  {guestName}
                </p>
              </div>
              
              <p className="text-gray-700 mb-8 text-sm md:text-base">
                We joyfully invite you to celebrate our magical wedding day
              </p>
              <button
                onClick={handleOpen}
                className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{ animation: 'glow 2s ease-in-out infinite' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles size={20} />
                  បេីកសំបុត្រ
                  <Sparkles size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isOpened && showSlideshow) {
    return (
      <div 
        className="min-h-screen relative"
        style={{
          // Apply the animation here (e.g., 1.5s duration, ease-out)
          animation: 'fade-in 3s ease-out forwards',
        }}
      >
        <PhotoSlideshow 
          onComplete={handleSlideshowComplete} 
        />
      </div>
    );
  }

  if (!showMainContent) {
    return null;
  }

  const flowerTypes = ['cherry', 'blossom'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100/50 to-indigo-100 relative overflow-hidden">
      <PreloadAssets imageUrls={photos} />
      {[...Array(45)].map((_, i) => (
        <Firefly key={`firefly-main-${i}`} delay={i * 0.15} index={i} />
      ))}
      
      {[...Array(25)].map((_, i) => (
        <MagicSparkle key={`sparkle-main-${i}`} delay={i * 0.25} />
      ))}
      
      {[...Array(40)].map((_, i) => (
        <Flower 
          key={`flower-${i}`} 
          delay={i * 0.3} 
          type={flowerTypes[Math.floor(Math.random() * flowerTypes.length)]}
        />
      ))}
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 md:py-12">
        
        <div className="text-center mb-12">
            <div 
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden ring-1 ring-white/80"
              style={{
                // animation: 'float 3s ease-in-out infinite',
                // Strongest inner white shine for reflection, and a defined purple outer glow.
                boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(168, 85, 247, 0.5)'
              }}
            >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/20 via-transparent to-indigo-100/20 pointer-events-none"></div>
            
            <Heart className="w-16 h-16 mx-auto mb-4 text-purple-600" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))' }} />
            <h1 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 mb-2 relative py-2">
              {weddingInfo.bride}
            </h1>
            <p className="text-3xl md:text-4xl text-purple-400 my-4">&</p>
            <h1 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 mb-6 relative py-2">
              {weddingInfo.groom}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-6 rounded-full"></div>
            <p className="text-2xl text-purple-800 font-bold">
              សូមគោរពអញ្ជើញ
            </p>
            <div className="flex justify-center px-6">
              <p className="max-w-prose text-center text-m text-purple-900 mt-6 font-medium leading-[2.2] [text-wrap:balance]">
                យើងខ្ញុំនិងក្រុមគ្រួសារមានកិត្តិយសសូមគោរពអញ្ជើញ <br className="hidden md:block" />
                ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត <br className="hidden md:block" />
                អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយសដើម្បីប្រសិទ្ធពរជ័យ <br className="hidden md:block" />
                សិរីសួស្ដីជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ។
              </p>
            </div>
          </div>
        </div>

        <div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative ring-1 ring-white/80"
            style={{
              // animation: 'float 3s ease-in-out infinite',
              // Strongest inner white shine for reflection, and a defined purple outer glow.
              marginTop: 20,
              boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(168, 85, 247, 0.5)'
            }}
          >
          {/* GlassEdgeFlower will now be visible outside the edge */}
            <GlassEdgeFlower 
              src="/assets/flowers/6.webp" 
              className="top-[-20px] left-[-20px] w-20 h-40" 
              style={{ transform: 'rotate(15deg)' }}
            />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-indigo-100/20 pointer-events-none"></div>
          <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900 text-center mb-6 relative">Our Story</h2>
                  <WeddingCarousel 
          photos={weddingPhotos}
          autoPlayInterval={5000} // 5 seconds per slide (optional)
        />
          {/* <p className="text-center text-purple-600 mt-6 italic text-sm">
            Replace these placeholders with your actual photos
          </p> */}
        </div>

        <div 
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden ring-1 ring-white/80"
          style={{
            // animation: 'float 3s ease-in-out infinite',
            // Strongest inner white shine for reflection, and a defined purple outer glow.
            marginTop: 20,
            boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(168, 85, 247, 0.5)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-indigo-100/20 pointer-events-none"></div>
          <h2 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900 text-center mb-6 relative py-2 leading-relaxed">
            កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
          </h2>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 text-purple-400 mb-1">
              <span className="text-xs">✦</span>
              <span className="text-xl">❀</span>
              <span className="text-xs">✦</span>
            </div>
            <h2 className="text-2xl font-bold text-purple-900 leading-relaxed">
              ព្រឹក
            </h2>
            <div className="w-16 h-1 bg-purple-200 mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="space-y-4 relative">
            {[
              { time: '០៥:៣០', title: 'ពិធីសំពះពិលា', desc: '' },
              { time: '០៧:០០', title: 'ពិធីហែជំនូន', desc: '' },
              { time: '០៩:០០', title: 'ពិធីលេីកផ្កាស្លា និងបំពាក់ចិញ្ចៀន', desc: '' },
              { time: '១០:០០', title: 'ពិធីកាត់សក់បង្កក់សិរី', desc: '' },
              { time: '១១:០០', title: 'អញ្ជេីញភ្ញៀវពិសាអាហារថ្ងៃត្រង់', desc: '' }
            ].map((event, idx) => (
              <div key={idx} className="flex items-start group">
              <div 
                className="bg-gradient-to-br from-purple-400 to-indigo-300 text-white rounded-full w-16 h-16 flex items-center justify-center font-semibold mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                style={{ 
                  filter: 'drop-shadow(0 4px 12px rgba(216, 180, 254, 0.6))',
                  border: '2px solid rgba(255, 255, 255, 0.4)' 
                }}
              >
                <span className="text-sm drop-shadow-sm">
                  {event.time}
                </span>
              </div>
                <div>
                  <h3 className="font-semibold text-lg text-purple-900 py-4">{event.title}</h3>
                  <p className="text-purple-700">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 text-purple-400 mb-1">
              <span className="text-xs">✦</span>
              <span className="text-xl">❀</span>
              <span className="text-xs">✦</span>
            </div>
            <h2 className="text-2xl font-bold text-purple-900 leading-relaxed">
              រសៀល
            </h2>
            <div className="w-16 h-1 bg-purple-200 mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="space-y-4 relative">
            {[
              { time: '០១:០០', title: 'ពិធីសំពះផ្ទឹម សែនចងដៃ បង្វិលពពិល និងព្រះថោងនាងនាគ', desc: '' },
              { time: '០២:០០', title: 'ពិធីសូត្រមន្ដចម្រេីនព្រះបរិត្ត', desc: '' },
              { time: '០៥:០០', title: 'អញ្ជេីញភ្ញៀវពិសាភោជនាហារនៅ ភោជនីយដ្ឋាន វិមានពរជ័យ', desc: '' },
            ].map((event, idx) => (
              <div key={idx} className="flex items-start group">
                <div 
                  className="bg-gradient-to-br from-purple-400 to-indigo-300 text-white rounded-full w-16 h-16 flex items-center justify-center font-semibold mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                  style={{ 
                    filter: 'drop-shadow(0 4px 12px rgba(216, 180, 254, 0.6))',
                    border: '2px solid rgba(255, 255, 255, 0.4)' 
                  }}
                >
                  <span className="text-sm drop-shadow-sm">
                    {event.time}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-purple-900 py-2">{event.title}</h3>
                  <p className="text-purple-700">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

                  <div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative ring-1 ring-white/80"
            // REMOVED: overflow-hidden
            style={{
              // animation: 'float 3s ease-in-out infinite',
              // Strongest inner white shine for reflection, and a defined purple outer glow.
              marginTop: 20,
              boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(168, 85, 247, 0.5)'
            }}
          >
            {/* GlassEdgeFlower will now be visible outside the edge */}
            <GlassEdgeFlower 
              src="/assets/flowers/4.webp" 
              className="bottom-[-20px] left-[-20px] w-20 h-20" 
              style={{ transform: 'rotate(15deg)' }}
            />
            
            {/* ... rest of your content ... */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-indigo-100/20 pointer-events-none"></div>
          <div className="flex items-center justify-center relative">
            <Calendar className="w-8 h-8 text-purple-600 mr-3" style={{ filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))' }} />
            <h2 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900 text-center relative py-2 leading-relaxed">កាលបរិច្ឆេទ</h2>
          </div>
          <div className="text-center relative">
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 mb-2 py-2">{weddingInfo.date}</p>
            <div className="flex items-center justify-center text-xl text-purple-900">
              <Clock className="w-5 h-5 mr-2 text-purple-600" />
              <span>{weddingInfo.time}</span>
            </div>
          </div>
        </div>

        <div 
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative ring-1 ring-white/80"
          style={{
            // animation: 'float 3s ease-in-out infinite',
            // Strongest inner white shine for reflection, and a defined purple outer glow.
            marginTop: 20,
            boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(168, 85, 247, 0.5)'
          }}
        >
            <GlassEdgeFlower 
              src="/assets/flowers/1.webp" 
              className="top-[-20px] right-[-20px] w-20 h-20" 
              style={{ transform: 'rotate(15deg)' }}
            />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-indigo-100/20 pointer-events-none"></div>
          <div className="flex items-center justify-center mb-4 relative">
            <MapPin className="w-8 h-8 text-purple-600 mr-3" style={{ filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))' }} />
            <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900">ទីតាំង</h2>
          </div>
          <div className="text-center relative">
            <p className="text-2xl font-semibold text-purple-900 mb-2">{weddingInfo.venue}</p>
            <p className="text-purple-700 mb-4">{weddingInfo.address}</p>
            <button
              onClick={() => setShowMap(!showMap)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))' }}
            >
              {showMap ? 'Hide Map' : 'View Map'}
            </button>
            {showMap && (
              <div className="mt-6 rounded-2xl overflow-hidden border-4 border-purple-300 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.251994908542!2d103.2096964!3d13.083209499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310549a2c47f8917%3A0xc3a428a914f8a68e!2sVimean%20Pochey!5e0!3m2!1sen!2sjp!4v1769324541125!5m2!1sen!2sjp"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        </div>

          <div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative ring-1 ring-white/80"
            style={{
              // animation: 'float 3s ease-in-out infinite',
              // Strongest inner white shine for reflection, and a defined purple outer glow.
              marginTop: 20,
              boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(168, 85, 247, 0.5)'
            }}
          >
            <GlassEdgeFlower 
              src="/assets/flowers/3.webp" 
              className="top-[-20px] right-[-20px] w-20 h-30" 
              style={{ transform: 'rotate(15deg)' }}
            />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-indigo-100/20 pointer-events-none"></div>
          <Heart className="w-16 h-16 mx-auto mb-4 text-purple-600 relative" style={{ 
            filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))',
            animation: 'float 2s ease-in-out infinite'
          }} />
          {/* <p className="text-xl text-purple-900 mb-4 font-medium relative"> */}
          <div className="max-w-2xl mx-auto text-center space-y-6 mt-6">
            {/* Khmer Text */}
            <p className="text-lg md:text-xl text-purple-900 font-medium leading-relaxed px-4">
              យើងខ្ញុំទាំងពីរនាក់ ពិតជារំភើបសប្បាយរីករាយ
              <br />
              នឹងការអញ្ជើញចូលរួមអបអរសាទរ
              <br />
              របស់អ្នកទាំងអស់គ្នាក្នុងថ្ងៃពិសេសរបស់ខ្ញុំទាំងពីរនាក់
              <br />
              យើងខ្ញុំ សូមអរគុណដោយក្ដីគោរពស្រឡាញ់។
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-300"></div>
              <div className="text-purple-400 text-2xl">♥</div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-300"></div>
            </div>

            {/* English Text */}
            <p className="text-base md:text-lg text-purple-700 leading-relaxed px-4 italic">
              Thank you from the bottom of our hearts for joining us and for your kind
              congratulations on our wedding day. Your presence made our celebration
              truly unforgettable.
            </p>
          </div>
          <div className="mt-6 relative">
            <p className="text-sm text-purple-600">With love,</p>
            <p className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900 mt-2">
              {weddingInfo.bride} & {weddingInfo.groom}
            </p>
          </div>
        </div>

        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-xl p-4 rounded-full shadow-2xl border border-purple-300 cursor-pointer hover:scale-110 transition-all duration-300 z-50"
          style={{ animation: 'glow 2s ease-in-out infinite' }}
          title={isMusicPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isMusicPlaying ? (
            <Music className="w-6 h-6 text-purple-600 animate-pulse" />
          ) : (
            <Music className="w-6 h-6 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}