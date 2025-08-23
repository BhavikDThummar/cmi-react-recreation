import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBusbar from "@/assets/hero-busbar.jpg";
import limitSwitches from "@/assets/limit-switches.jpg";
import radioRemote from "@/assets/radio-remote.jpg";

const slides = [
  {
    id: 1,
    title: "World-Class DSL Busbar Systems for EOT Cranes",
    description: "CMK Electro Power Pvt. Ltd., based in Rajkot, Gujarat (India), delivers top-quality DSL busbar systems for EOT cranes. Trust our expertise with over 15 years of experience in the heavy engineering industry.",
    image: heroBusbar,
    ctaText: "Inquire Now"
  },
  {
    id: 2,
    title: "Advanced Limit Switches for EOT Cranes",
    description: "Ensure precision and safety with CMK Electro Power's limit switches for EOT cranes. Designed with expertise, they meet global industrial standards.",
    image: limitSwitches,
    ctaText: "Inquire Now"
  },
  {
    id: 3,
    title: "State-of-the-Art Crane Radio Remotes",
    description: "CMK Electro Power Pvt. Ltd. delivers advanced crane radio remotes for precise and wireless crane operations. Trusted partner in Rajkot, Gujarat.",
    image: radioRemote,
    ctaText: "Inquire Now"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-2 h-full">
            {/* Content */}
            <div className="bg-gradient-to-br from-cmk-gray to-white flex items-center">
              <div className="container mx-auto px-8 lg:px-12">
                <div className="max-w-lg animate-fade-in">
                  <h1 className="text-4xl lg:text-5xl font-bold text-cmk-text mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button 
                    size="lg"
                    className="bg-cmk-orange hover:bg-cmk-orange/90 text-white font-semibold px-8 py-4 rounded-full shadow-cmk-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {slide.ctaText}
                  </Button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative bg-white flex items-center justify-center p-8">
              <div className="relative max-w-lg animate-bounce-in">
                <div className="absolute inset-0 bg-gradient-to-r from-cmk-blue/20 to-cmk-orange/20 rounded-full blur-3xl"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-cmk-card"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-cmk-blue p-3 rounded-full shadow-cmk-card transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-cmk-blue p-3 rounded-full shadow-cmk-card transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-cmk-orange scale-125"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Quick Inquiry Button */}
      <div className="absolute bottom-6 right-6 z-20">
        <Button className="bg-cmk-blue hover:bg-cmk-blue/90 text-white font-semibold px-4 py-2 rounded-lg shadow-cmk-card">
          Quick Inquiry
        </Button>
      </div>
    </section>
  );
};

export default HeroCarousel;