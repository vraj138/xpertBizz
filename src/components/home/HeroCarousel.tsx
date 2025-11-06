// HeroCarousel.tsx

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Slide {
  title: string;
  description: string;
  cta: string;
  link: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Expert HR Recruitment",
    description: "We specialize in temporary, permanent, and contract staffing across industries such as healthcare, IT, engineering, and administrative support. Our goal is to take the stress out of recruiting by connecting you with skilled professionals who fit your company's culture and business needs.",
    cta: "Learn More",
    link: "/services/hr-recruitment",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Result-Driven Services",
    description: "We provide expert, result-driven support in project management, helpdesk, accounting, IT, and managed services, helping small and medium-sized businesses operate smoothly, stay efficient, and grow with confidence.",
    cta: "Learn More",
    link: "/services/result-driven",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Empowering Your Digital Transformation",
    description: "We help businesses embrace digital transformation with expert guidance and end-to-end support, migrating legacy systems and ERP platforms to modern cloud environments to boost speed, efficiency, and long-term scalability.",
    cta: "Learn More",
    link: "/services/digital-transformation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLearnMoreClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Button clicked! Navigating to:", link);
    navigate(link);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-primary">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

          {/* Content */}
          <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center z-20">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                {slide.description}
              </p>
              <Button
                onClick={(e) => handleLearnMoreClick(e, slide.link)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 relative z-30 cursor-pointer"
                type="button"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Play/Pause */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
          aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          type="button"
        >
          {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;