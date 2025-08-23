import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const LifeAtCMK = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    customers: 0,
    experts: 0,
    awards: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      projects: 1500,
      customers: 3000,
      experts: 1500,
      awards: 20
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        customers: Math.floor(targets.customers * progress),
        experts: Math.floor(targets.experts * progress),
        awards: Math.floor(targets.awards * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const galleryItems = [
    {
      title: "Republic Day",
      description: "Annual celebration of India's Republic Day with team spirit",
      image: "/src/assets/republic-day.jpg",
      color: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      title: "Women's Day Celebration",
      description: "Honoring and celebrating our female colleagues",
      image: "/src/assets/womens-day.jpg",
      color: "bg-gradient-to-br from-pink-400 to-purple-500"
    },
    {
      title: "Exhibition",
      description: "Showcasing our products at industry exhibitions",
      image: "/src/assets/exhibition.jpg",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500"
    },
    {
      title: "Festival Celebration",
      description: "Traditional festivals celebrated with joy and enthusiasm",
      image: "/src/assets/festival.jpg",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      title: "National Celebration",
      description: "Celebrating national holidays and achievements",
      image: "/src/assets/national.jpg",
      color: "bg-gradient-to-br from-green-400 to-teal-500"
    },
    {
      title: "Strategy Meeting",
      description: "Regular strategic planning sessions for business growth",
      image: "/src/assets/strategy.jpg",
      color: "bg-gradient-to-br from-gray-400 to-slate-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Life at CMK</h1>
            <p className="text-xl opacity-90">
              Discover the vibrant culture, celebrations, and experiences that make CMK a great place to work
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-cmk-blue text-center mb-12 animate-fade-in">
              Our Celebrations & Events
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-cmk-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-48 ${item.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-white/30">📸</div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-cmk-text leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-cmk-blue text-center mb-12 animate-fade-in">
              Our Success Story
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center bg-white shadow-cmk-card animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-cmk-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white">🚀</div>
                </div>
                <div className="text-3xl font-bold text-cmk-blue mb-2">{counters.projects}+</div>
                <div className="text-lg text-cmk-text font-semibold">Projects</div>
                <div className="text-sm text-cmk-text opacity-75 mt-1">Successfully Completed</div>
              </Card>

              <Card className="p-8 text-center bg-white shadow-cmk-card animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-cmk-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white">🌍</div>
                </div>
                <div className="text-3xl font-bold text-cmk-blue mb-2">{counters.customers}+</div>
                <div className="text-lg text-cmk-text font-semibold">Customers</div>
                <div className="text-sm text-cmk-text opacity-75 mt-1">Worldwide</div>
              </Card>

              <Card className="p-8 text-center bg-white shadow-cmk-card animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-cmk-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white">👥</div>
                </div>
                <div className="text-3xl font-bold text-cmk-blue mb-2">{counters.experts}+</div>
                <div className="text-lg text-cmk-text font-semibold">Team Members</div>
                <div className="text-sm text-cmk-text opacity-75 mt-1">Expert Professionals</div>
              </Card>

              <Card className="p-8 text-center bg-white shadow-cmk-card animate-bounce-in" style={{ animationDelay: '0.8s' }}>
                <div className="w-16 h-16 bg-cmk-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white">🏆</div>
                </div>
                <div className="text-3xl font-bold text-cmk-blue mb-2">{counters.awards}+</div>
                <div className="text-lg text-cmk-text font-semibold">Awards</div>
                <div className="text-sm text-cmk-text opacity-75 mt-1">Recognition & Honours</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cmk-blue mb-8 animate-fade-in">Why Work With Us?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">🎯</div>
                </div>
                <h3 className="text-xl font-bold text-cmk-blue mb-2">Growth Opportunities</h3>
                <p className="text-cmk-text">Continuous learning and career advancement in a dynamic environment</p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">🤝</div>
                </div>
                <h3 className="text-xl font-bold text-cmk-blue mb-2">Team Spirit</h3>
                <p className="text-cmk-text">Collaborative culture where every team member's contribution matters</p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">⚖️</div>
                </div>
                <h3 className="text-xl font-bold text-cmk-blue mb-2">Work-Life Balance</h3>
                <p className="text-cmk-text">Flexible working environment that values both professional and personal life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifeAtCMK;