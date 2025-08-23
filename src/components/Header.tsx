import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-cmk-gray border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm text-cmk-text">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cmk-blue" />
                <span>Rajkot, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-cmk-blue" />
                <span>Mon - Sat: 9:00 - 18:00</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cmk-blue" />
                <span>+919712977598 / 95127 00227</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cmk-blue" />
                <span>sales@cmkindia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-cmk-blue shadow-cmk-lg relative z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-lg p-2 shadow-cmk-card">
                <div className="text-2xl font-bold text-cmk-blue">CMK</div>
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">CMK Electro Power</div>
                <div className="text-sm opacity-90">Industrial Solutions</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-cmk-orange transition-colors font-medium">
                Home
              </a>
              <a href="/about" className="text-white hover:text-cmk-orange transition-colors font-medium">
                About Us
              </a>
              <div className="relative group">
                <a href="#" className="text-white hover:text-cmk-orange transition-colors font-medium flex items-center">
                  Our Products
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="/life-at-cmk" className="text-white hover:text-cmk-orange transition-colors font-medium">
                Life at CMK
              </a>
              <a href="#" className="text-white hover:text-cmk-orange transition-colors font-medium">
                Careers
              </a>
            </nav>

            {/* Contact Button */}
            <Button 
              className="bg-cmk-orange hover:bg-cmk-orange/90 text-white font-semibold px-6 py-2 rounded-full shadow-cmk-card transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;