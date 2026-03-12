import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Scissors, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const handleServiceClick = (serviceName) => {
    toast({
      title: `🚧 ${serviceName} booking isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Bridal Mehandi",
      description: "Intricate traditional and contemporary mehandi designs for hands and feet. Our expert artists create stunning patterns that tell your love story.",
      features: ["Traditional Tamil patterns", "Contemporary designs", "Bridal packages", "Quick dry formula"],
      price: "Starting from ₹2,500",
      image: "Beautiful intricate mehandi design on bride's hands with traditional Tamil patterns and floral motifs"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Aari Work",
      description: "Exquisite hand-embroidered Aari work on blouses, sarees, and lehengas. Each piece is a masterpiece of traditional South Indian craftsmanship.",
      features: ["Hand embroidery", "Custom designs", "Gold thread work", "Stone embellishments"],
      price: "Starting from ₹5,000",
      image: "Stunning Aari work embroidery on a silk blouse with gold threads and intricate patterns"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Bridal Tailoring",
      description: "Perfect-fit bridal outfits tailored to your measurements. From traditional saree blouses to modern lehengas, we create your dream outfit.",
      features: ["Custom fitting", "Designer blouses", "Lehenga sets", "Saree draping"],
      price: "Starting from ₹3,000",
      image: "Elegant bridal lehenga with perfect tailoring and intricate details being fitted on a bride"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bridal Makeup",
      description: "Authentic South Indian bridal makeup that enhances your natural beauty. Traditional looks with modern techniques for your special day.",
      features: ["Traditional Tamil style", "HD makeup", "Hair styling", "Jewelry setting"],
      price: "Starting from ₹8,000",
      image: "Beautiful South Indian bride with traditional Tamil bridal makeup, elaborate jewelry and hair styling"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Signature</span>
            <br />
            <span className="text-white">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the finest in South Indian bridal artistry with our comprehensive range of traditional and contemporary services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="service-card rounded-2xl p-8 group"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-white">{service.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold gradient-text">{service.price}</div>
                    <Button
                      onClick={() => handleServiceClick(service.title)}
                      className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <img  
                      className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                      alt={`${service.title} service showcase`}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold mb-4 gradient-text">Complete Bridal Package</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get all four services together and save! Perfect for brides who want the complete Tamil bridal experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-2xl font-bold text-white">
                <span className="line-through text-gray-500">₹18,500</span>
                <span className="ml-2 gradient-text">₹15,000</span>
              </div>
              <Button
                onClick={() => handleServiceClick("Complete Bridal Package")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full pulse-glow"
              >
                Book Complete Package
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;