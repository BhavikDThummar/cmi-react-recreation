import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CMK Electro Power</h1>
            <p className="text-xl opacity-90">
              Your trusted partner for precision EOT Crane Components since 2012
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Company Overview */}
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold text-cmk-blue mb-6">Welcome to CMK Electro Power Pvt. Ltd.</h2>
              <p className="text-lg text-cmk-text leading-relaxed mb-6">
                Greetings and welcome to CMK ELECTRO POWER PVT LTD, a leading provider in the precision manufacturing 
                of Electric Overhead Travel (EOT) Crane Parts. With a commitment to excellence and a legacy of 12 years 
                in the industry, we take pride in being your trusted partner for all your EOT crane components needs.
              </p>
              <p className="text-lg text-cmk-text leading-relaxed">
                Initially established as a small manufacturing unit in 2012, CMK ELECTRO POWER PVT LTD has enhanced 
                its business capability to integrate cutting-edge technology and exceptional craftsmanship, making us 
                a preferred choice for industries requiring reliable crane solutions.
              </p>
            </Card>

            {/* Our Journey */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-cmk-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2012</span>
                  </div>
                  <h3 className="text-xl font-bold text-cmk-blue">Our Beginning</h3>
                </div>
                <p className="text-cmk-text">
                  Founded by professionals with more than 15 years of experience in the heavy engineering industry, 
                  starting as a small manufacturing unit with big dreams.
                </p>
              </Card>

              <Card className="p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-cmk-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">Now</span>
                  </div>
                  <h3 className="text-xl font-bold text-cmk-blue">Our Present</h3>
                </div>
                <p className="text-cmk-text">
                  Today, we are a leading manufacturer of world-class EOT crane components, trusted by industries 
                  across the globe for our precision and reliability.
                </p>
              </Card>
            </div>

            {/* Our Expertise */}
            <Card className="p-8 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-3xl font-bold text-cmk-blue mb-6 text-center">Our Expertise</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl text-cmk-blue">⚡</div>
                  </div>
                  <h3 className="text-xl font-bold text-cmk-blue mb-2">DSL Busbar Systems</h3>
                  <p className="text-cmk-text">
                    Manufacturing world-class DSL Busbar Systems for efficient crane electrification
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl text-cmk-blue">🎛️</div>
                  </div>
                  <h3 className="text-xl font-bold text-cmk-blue mb-2">Pendant Stations</h3>
                  <p className="text-cmk-text">
                    Precision-engineered pendant stations for seamless crane control operations
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl text-cmk-blue">⚙️</div>
                  </div>
                  <h3 className="text-xl font-bold text-cmk-blue mb-2">Crane Components</h3>
                  <p className="text-cmk-text">
                    Complete range of EOT crane parts manufactured with exceptional quality standards
                  </p>
                </div>
              </div>
            </Card>

            {/* Our Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 bg-gradient-card animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-2xl font-bold text-cmk-blue mb-4">Our Mission</h3>
                <p className="text-cmk-text leading-relaxed">
                  To provide world-class EOT crane components through precision manufacturing, innovative solutions, 
                  and exceptional customer service, ensuring the highest standards of quality and reliability.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card animate-slide-up" style={{ animationDelay: '1s' }}>
                <h3 className="text-2xl font-bold text-cmk-blue mb-4">Our Vision</h3>
                <p className="text-cmk-text leading-relaxed">
                  To be the global leader in crane component manufacturing, setting industry benchmarks through 
                  continuous innovation, technological advancement, and commitment to excellence.
                </p>
              </Card>
            </div>

            {/* Why Choose Us */}
            <Card className="p-8 animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <h2 className="text-3xl font-bold text-cmk-blue mb-6 text-center">Why Choose CMK?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="font-bold text-cmk-blue mb-2">15+ Years Experience</h4>
                  <p className="text-sm text-cmk-text">Deep industry expertise and proven track record</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-bold text-cmk-blue mb-2">Quality Assurance</h4>
                  <p className="text-sm text-cmk-text">Rigorous testing and quality control processes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h4 className="font-bold text-cmk-blue mb-2">Precision Manufacturing</h4>
                  <p className="text-sm text-cmk-text">State-of-the-art technology and skilled craftsmanship</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-bold text-cmk-blue mb-2">Customer Focus</h4>
                  <p className="text-sm text-cmk-text">Dedicated support and customized solutions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;