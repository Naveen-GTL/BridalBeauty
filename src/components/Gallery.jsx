import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { toast } = useToast();

  const handleImageClick = () => {
    toast({
      title: "🖼️ Image viewer isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', name: 'All Work', icon: <Star className="w-4 h-4" /> },
    { id: 'mehandi', name: 'Mehandi', icon: <Heart className="w-4 h-4" /> },
    { id: 'aari', name: 'Aari Work', icon: <Eye className="w-4 h-4" /> },
    { id: 'makeup', name: 'Makeup', icon: <Star className="w-4 h-4" /> },
    { id: 'tailoring', name: 'Tailoring', icon: <Heart className="w-4 h-4" /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'mehandi',
      title: 'Intricate Bridal Mehandi',
      description: 'Traditional Tamil patterns with modern touch',
      image: 'Detailed bridal mehandi design with intricate Tamil patterns, paisleys, and floral motifs on hands'
    },
    {
      id: 2,
      category: 'aari',
      title: 'Gold Thread Aari Work',
      description: 'Handcrafted embroidery on silk blouse',
      image: 'Exquisite Aari work embroidery with gold threads and beads on a red silk blouse'
    },
    {
      id: 3,
      category: 'makeup',
      title: 'Traditional Tamil Bridal Look',
      description: 'Classic South Indian bridal makeup',
      image: 'Beautiful Tamil bride with traditional makeup, gold jewelry, and elaborate hair styling'
    },
    {
      id: 4,
      category: 'tailoring',
      title: 'Designer Lehenga Set',
      description: 'Custom fitted bridal lehenga',
      image: 'Stunning bridal lehenga with perfect tailoring, intricate work, and beautiful draping'
    },
    {
      id: 5,
      category: 'mehandi',
      title: 'Feet Mehandi Design',
      description: 'Elegant patterns for feet',
      image: 'Beautiful mehandi design on feet with traditional motifs and intricate patterns'
    },
    {
      id: 6,
      category: 'aari',
      title: 'Peacock Motif Embroidery',
      description: 'Traditional peacock design in Aari work',
      image: 'Stunning peacock motif Aari embroidery with colorful threads and detailed craftsmanship'
    },
    {
      id: 7,
      category: 'makeup',
      title: 'Contemporary Bridal Style',
      description: 'Modern twist on traditional makeup',
      image: 'Contemporary South Indian bridal makeup with modern techniques and traditional elements'
    },
    {
      id: 8,
      category: 'tailoring',
      title: 'Silk Saree Blouse',
      description: 'Perfectly fitted designer blouse',
      image: 'Elegant silk saree blouse with perfect fit and beautiful neckline design'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Beautiful</span>
            <br />
            <span className="text-white">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our stunning collection of bridal transformations and artistic creations that showcase the beauty of Tamil traditions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={handleImageClick}
            >
              <div className="aspect-square relative">
                <img  
                  className="w-full h-full object-cover"
                  alt={item.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold mb-4 gradient-text">Love What You See?</h3>
            <p className="text-gray-300 mb-6">
              Ready to create your own beautiful bridal story? Let's discuss your vision and make it a reality.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full pulse-glow"
            >
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;