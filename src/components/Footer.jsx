import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (id) => {
    const validIds = ['about', 'services', 'gallery', 'contact'];
    if (validIds.includes(id)) {
      scrollToSection(id);
    } else {
      toast({
        title: `🚧 This page isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
      });
    }
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `📱 ${platform} integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    { name: "Bridal Mehandi", id: "services" },
    { name: "Aari Work", id: "services" },
    { name: "Bridal Tailoring", id: "services" },
    { name: "Bridal Makeup", id: "services" },
    { name: "Bridal Packages", id: "services" }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TB</span>
              </div>
              <div>
                <span className="font-playfair text-2xl font-bold gradient-text">Tamil Bridal</span>
                <p className="text-sm text-gray-300">Beauty & Elegance</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Preserving the timeless beauty of Tamil bridal traditions while embracing contemporary elegance. 
              Your dream bridal look awaits.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, name: "Instagram", color: "from-pink-500 to-purple-500" },
                { icon: <Facebook className="w-5 h-5" />, name: "Facebook", color: "from-blue-500 to-blue-600" },
                { icon: <Youtube className="w-5 h-5" />, name: "YouTube", color: "from-red-500 to-red-600" }
              ].map((social) => (
                <motion.button
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSocialClick(social.name)}
                  className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow`}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="font-playfair text-xl font-bold text-white mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-playfair text-xl font-bold text-white mb-6 block">Our Services</span>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleLinkClick(service.id)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-playfair text-xl font-bold text-white mb-6 block">Contact Info</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">123 Anna Salai, T. Nagar</p>
                  <p className="text-gray-300 text-sm">Chennai, Tamil Nadu 600017</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                  <p className="text-gray-300 text-sm">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">info@tamilbridal.com</p>
                  <p className="text-gray-300 text-sm">bookings@tamilbridal.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2025 Tamil Bridal Beauty. All rights reserved. Made with <Heart className="w-4 h-4 inline text-pink-400" /> in Tamil Nadu.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => handleLinkClick("privacy")}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick("terms")}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;