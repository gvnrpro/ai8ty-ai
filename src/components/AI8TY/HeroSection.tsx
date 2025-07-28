import React, { useEffect, useRef, useState } from “react”;

interface HeroSectionProps {
onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
const heroRef = useRef<HTMLElement>(null);
const titleRef = useRef<HTMLHeadingElement>(null);
const subtitleRef = useRef<HTMLParagraphElement>(null);
const buttonsRef = useRef<HTMLDivElement>(null);
const particlesRef = useRef<(HTMLDivElement | null)[]>([]);
const gridRef = useRef<HTMLDivElement>(null);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
// Orchestrated entrance animation sequence
const animateEntrance = () => {
// Initial state - everything hidden
if (titleRef.current) {
const words = titleRef.current.querySelectorAll(”.word”);
words.forEach(word => {
(word as HTMLElement).style.transform = “translateY(100px) rotateX(-90deg)”;
(word as HTMLElement).style.opacity = “0”;
});
}

```
  if (subtitleRef.current) {
    subtitleRef.current.style.transform = "translateY(50px)";
    subtitleRef.current.style.opacity = "0";
  }

  if (buttonsRef.current) {
    const buttons = buttonsRef.current.querySelectorAll("button");
    buttons.forEach(button => {
      (button as HTMLElement).style.transform = "translateY(30px) scale(0.8)";
      (button as HTMLElement).style.opacity = "0";
    });
  }

  // Grid lines animation
  if (gridRef.current) {
    const lines = gridRef.current.querySelectorAll(".grid-line");
    lines.forEach(line => {
      (line as HTMLElement).style.transform = "scaleX(0)";
    });
  }

  // Particles initial state
  particlesRef.current.forEach(particle => {
    if (particle) {
      particle.style.transform = "scale(0) rotate(0deg)";
      particle.style.opacity = "0";
    }
  });

  // Animation sequence with perfect timing
  setTimeout(() => {
    // Grid lines appear first
    if (gridRef.current) {
      const lines = gridRef.current.querySelectorAll(".grid-line");
      lines.forEach((line, index) => {
        setTimeout(() => {
          (line as HTMLElement).style.transition = "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          (line as HTMLElement).style.transform = "scaleX(1)";
        }, index * 100);
      });
    }

    // Title words stagger in
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      words.forEach((word, index) => {
        setTimeout(() => {
          (word as HTMLElement).style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          (word as HTMLElement).style.transform = "translateY(0) rotateX(0deg)";
          (word as HTMLElement).style.opacity = "1";
        }, 400 + index * 100);
      });
    }

    // Subtitle follows
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        subtitleRef.current.style.transform = "translateY(0)";
        subtitleRef.current.style.opacity = "1";
      }
    }, 1000);

    // Buttons appear
    setTimeout(() => {
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        buttons.forEach((button, index) => {
          setTimeout(() => {
            (button as HTMLElement).style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            (button as HTMLElement).style.transform = "translateY(0) scale(1)";
            (button as HTMLElement).style.opacity = "1";
          }, index * 150);
        });
      }
    }, 1400);

    // Particles dance in
    setTimeout(() => {
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          setTimeout(() => {
            particle.style.transition = "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            particle.style.transform = "scale(1) rotate(360deg)";
            particle.style.opacity = "0.6";
          }, index * 50);
        }
      });
    }, 1800);

    setIsLoaded(true);
  }, 200);
};

animateEntrance();
```

}, []);

// Enhanced button hover effects
const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEntering: boolean) => {
const button = e.currentTarget;
const ripple = button.querySelector(”.ripple-effect”) as HTMLElement;

```
if (isEntering) {
  button.style.transform = "translateY(-2px) scale(1.05)";
  if (ripple) {
    ripple.style.transform = "scale(1)";
    ripple.style.opacity = "0.2";
  }
} else {
  button.style.transform = "translateY(0) scale(1)";
  if (ripple) {
    ripple.style.transform = "scale(0)";
    ripple.style.opacity = "0";
  }
}
```

};

// Split text into words for stagger animation
const splitTextIntoWords = (text: string) => {
return text.split(” “).map((word, index) => (
<span key={index} className=“word inline-block mr-2” style={{ transformStyle: “preserve-3d” }}>
{word}
</span>
));
};

return (
<section
ref={heroRef}
className="relative px-6 py-32 text-center bg-black text-white overflow-hidden min-h-screen flex items-center"
>
{/* Animated Grid Background */}
<div ref={gridRef} className="absolute inset-0 z-0">
{[…Array(20)].map((*, i) => (
<div
key={`h-${i}`}
className=“grid-line absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent”
style={{
top: `${(i + 1) * 5}%`,
left: 0,
right: 0,
transformOrigin: “left center”
}}
/>
))}
{[…Array(20)].map((*, i) => (
<div
key={`v-${i}`}
className=“grid-line absolute w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent”
style={{
left: `${(i + 1) * 5}%`,
top: 0,
bottom: 0,
transformOrigin: “center top”
}}
/>
))}
</div>

```
  {/* Floating Particles */}
  <div className="absolute inset-0 z-1">
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        ref={el => particlesRef.current[i] = el}
        className="absolute w-1 h-1 bg-purple-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: isLoaded ? `float ${3 + Math.random() * 4}s ease-in-out infinite` : "none",
          animationDelay: `${Math.random() * 2}s`
        }}
      />
    ))}
  </div>

  {/* Holographic Background Effect */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
    <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/5 via-transparent to-pink-900/5" />
  </div>

  <div className="relative z-10 mx-auto max-w-4xl">
    <h1 
      ref={titleRef}
      className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl"
      style={{ perspective: "1000px" }}
    >
      <div className="mb-2">
        {splitTextIntoWords("Building systems for a more")}
      </div>
      <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        {splitTextIntoWords("intelligent, accessible future.")}
      </div>
    </h1>

    <p 
      ref={subtitleRef}
      className="mx-auto mb-10 max-w-2xl text-xl text-white/80 leading-relaxed"
    >
      AI8TY makes advanced digital capabilities—AI, automation, infrastructure—accessible to ambitious businesses, creators, and communities.
    </p>

    <div 
      ref={buttonsRef}
      className="flex flex-col gap-6 sm:flex-row sm:justify-center items-center"
    >
      <button
        onClick={() => onNavigate("about")}
        onMouseEnter={(e) => handleButtonHover(e, true)}
        onMouseLeave={(e) => handleButtonHover(e, false)}
        className="relative group h-14 px-8 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 rounded-xl overflow-hidden"
      >
        <div className="ripple-effect absolute inset-0 bg-white/20 rounded-xl transform scale-0 transition-all duration-300" />
        <span className="relative z-10 flex items-center">
          Learn more
          <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </button>
      
      <button
        onClick={() => onNavigate("try-ai8ty")}
        onMouseEnter={(e) => handleButtonHover(e, true)}
        onMouseLeave={(e) => handleButtonHover(e, false)}
        className="relative group h-14 px-8 text-lg font-medium border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl backdrop-blur-sm overflow-hidden"
      >
        <div className="ripple-effect absolute inset-0 bg-white/10 rounded-xl transform scale-0 transition-all duration-300" />
        <span className="relative z-10 flex items-center">
          Try AI8TY
          <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
      </button>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center text-white/60">
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full relative">
          <div className="w-1 h-3 bg-white/60 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce" />
        </div>
      </div>
    </div>
  </div>

  <style dangerouslySetInnerHTML={{
    __html: `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
        }
      }
    `
  }} />
</section>
```

);
};

export default HeroSection;