import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cmk-text text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white rounded-lg p-2">
                <div className="text-2xl font-bold text-cmk-blue">CMK</div>
              </div>
              <div>
                <div className="font-bold text-xl">CMK Electro Power Pvt. Ltd.</div>
                <div className="text-gray-300">Industrial Crane Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 15 years of experience in the heavy engineering industry, CMK Electro Power delivers 
              world-class crane equipment solutions including DSL busbar systems, limit switches, radio remotes, 
              and current collectors.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-cmk-blue hover:border-cmk-blue">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-cmk-blue hover:border-cmk-blue">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-cmk-blue hover:border-cmk-blue">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-cmk-blue hover:border-cmk-blue">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-cmk-orange transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cmk-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cmk-orange transition-colors">Our Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cmk-orange transition-colors">Life at CMK</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cmk-orange transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cmk-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cmk-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rajkot, Gujarat, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cmk-orange flex-shrink-0" />
                <div className="text-gray-300">
                  <div>+919712977598</div>
                  <div>95127 00227</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cmk-orange flex-shrink-0" />
                <span className="text-gray-300">sales@cmkindia.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cmk-orange flex-shrink-0" />
                <span className="text-gray-300">Mon - Sat: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CMK Electro Power Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cmk-orange transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cmk-orange transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cmk-orange transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;