import React, { useState, useEffect } from 'react';
import { Music, MapPin, Calendar, Clock, Heart, Sparkles } from 'lucide-react';

// Guest data - easily customizable
const guestData = {
  "1": "David",
  "2": "Mary",
  "3": "John & Family",
  "4": "Sarah",
  "5": "Michael & Jennifer"
};

// Wedding details - customize these
const weddingInfo = {
  bride: "Nika",
  groom: "Dimang",
  date: "Feb 28, 2025",
  time: "4:00 PM",
  venue: "Garden Paradise Resort",
  address: "123 Blossom Street, Springfield",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto(prev => {
        if (prev >= photos.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 3000); // 4 seconds per photo for more sentimental feel

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 z-50 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <Firefly key={`firefly-slide-${i}`} delay={i * 0.2} index={i} />
      ))}
      
      {[...Array(15)].map((_, i) => (
        <MagicSparkle key={`sparkle-slide-${i}`} delay={i * 0.3} />
      ))}
      
      {/* Photo layers with crossfade */}
      <div className="absolute inset-0">
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
              loading="lazy"
              alt={`Wedding photo ${idx + 1}`}
              className="w-full h-full object-cover md:object-contain"
            />
            {/* Gradient overlay for better readability */}
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

  useEffect(() => {
    const guestId = "1";
    setGuestName(guestData[guestId] || 'Dear Guest');
    
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
    const FramingFlower = ({ src, positionClass, sizeClass, delay, baseTransform = '' }) => (
      <div // This outer div will handle the static flip and offset
        className={`absolute pointer-events-none opacity-100 z-20 ${positionClass} ${sizeClass}`}
        style={{
          transform: baseTransform, // APPLY STATIC TRANSFORM (FLIP/MOVE) HERE
        }}
      >
        <img 
          src={src} 
          alt="Decorative Flower"
          loading="eager"
          className="w-full h-full object-contain"
          style={{
            // The inner image only handles the SWAY animation
            animation: `sway ${5 + Math.random() * 3}s ease-in-out ${delay}s infinite alternate`,
          }}
        />
      </div>
    );
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
    setTimeout(() => {
    setIsOpened(true);
    setShowSlideshow(true);
    
    audio.volume = 0;
    audio.play()
      .then(() => {
        setIsMusicPlaying(true);
        fadeIn(audio, 3000); // 3 second fade-in
        console.log('Music playing successfully!');
      })
      .catch(error => {
        console.log('Audio play failed:', error);
      });
      }, 1300);
  };

  const handleSlideshowComplete = () => {
    setShowSlideshow(false);
    setShowMainContent(true);
  };

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
                  filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
                  animation: 'float 2s ease-in-out infinite'
                }}
              />
              
              <h1 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 mb-4">
                {weddingInfo.bride} & {weddingInfo.groom}
              </h1>
              
              <div className="my-8 py-6 border-y-2 border-purple-300 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent"></div>
                <p className="text-lg text-purple-700 mb-2 relative z-10">You're Invited</p>
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
                  Open Invitation
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
            <h1 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 mb-2 relative">
              {weddingInfo.bride}
            </h1>
            <p className="text-3xl md:text-4xl text-purple-400 my-4">&</p>
            <h1 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 mb-6 relative">
              {weddingInfo.groom}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-6 rounded-full"></div>
            <p className="text-lg text-purple-800">
              Together with their families
            </p>
            <p className="text-xl text-purple-900 mt-4 font-medium">
              Request the honor of your presence
            </p>
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
          <div className="flex items-center justify-center mb-4 relative">
            <Calendar className="w-8 h-8 text-purple-600 mr-3" style={{ filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))' }} />
            <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900">Save the Date</h2>
          </div>
          <div className="text-center relative">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 mb-2">{weddingInfo.date}</p>
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
            <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900">Venue</h2>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.95373631531677!3d-37.81720974201415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1560236351204!5m2!1sen!2sau"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
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
          <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900 text-center mb-6 relative">Event Schedule</h2>
          <div className="space-y-4 relative">
            {[
              { time: '4:00', title: 'Guest Arrival', desc: 'Please be seated by 4:30 PM' },
              { time: '5:00', title: 'Wedding Ceremony', desc: 'Exchange of vows' },
              { time: '6:00', title: 'Cocktail Hour', desc: 'Garden terrace' },
              { time: '7:00', title: 'Reception & Dinner', desc: 'Dinner, dancing, and celebration' }
            ].map((event, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))' }}>
                  {event.time}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-purple-900">{event.title}</h3>
                  <p className="text-purple-700">{event.desc}</p>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-2 gap-4 relative">
            {[
              'from-purple-300 to-indigo-300',
              'from-indigo-300 to-purple-400',
              'from-purple-400 to-indigo-400',
              'from-indigo-400 to-purple-500'
            ].map((gradient, idx) => (
              <div 
                key={idx}
                className={`aspect-square bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-purple-200/50`}
                style={{ filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.2))' }}
              >
                <p className="text-white/80 text-sm font-medium">Photo {idx + 1}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-purple-600 mt-6 italic text-sm">
            Replace these placeholders with your actual photos
          </p>
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
          <p className="text-xl text-purple-900 mb-4 font-medium relative">
            We can't wait to celebrate with you!
          </p>
          <p className="text-purple-700 relative">
            Your presence is the greatest gift of all
          </p>
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