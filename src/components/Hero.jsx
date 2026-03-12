import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = () => {
    scrollToSection('contact');
  };

  const handlePortfolioClick = () => {
    scrollToSection('gallery');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 floating-element"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-60" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 floating-element"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Heart className="w-6 h-6 text-pink-400 opacity-60" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 floating-element"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-7 h-7 text-purple-400 opacity-60" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Timeless</span>
            <br />
            <span className="text-white">Tamil Bridal</span>
            <br />
            <span className="gradient-text">Elegance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Transform your special day with our exquisite South Indian bridal services. 
            From intricate Mehandi designs to stunning Aari work, custom tailoring, and 
            authentic Tamil bridal makeup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              onClick={handleBookingClick}
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full pulse-glow"
            >
              Book Consultation
            </Button>
            <Button
              onClick={handlePortfolioClick}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full"
            >
              View Portfolio
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-gray-400">Happy Brides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4.9★</div>
              <div className="text-sm text-gray-400">Client Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative glass-effect rounded-3xl p-8 pulse-glow">
            <img  
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              alt="Beautiful South Indian bride with traditional Tamil bridal makeup and jewelry"
             src="https://images.unsplash.com/photo-1662712975430-f0387f71f0a2" />
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full opacity-80 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-80 blur-xl"></div>
          </div>

          {/* Floating Service Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -left-8 top-20 glass-effect rounded-xl p-4 floating-element"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <div className="text-sm font-semibold">Mehandi Art</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute -right-8 bottom-32 glass-effect rounded-xl p-4 floating-element"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">✨</div>
              <div className="text-sm font-semibold">Aari Work</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;