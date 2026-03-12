import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Brides" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Awards Won" },
    { icon: <Heart className="w-8 h-8" />, number: "4.9", label: "Client Rating" }
  ];

  const team = [
    {
      name: "Priya Lakshmi",
      role: "Master Mehandi Artist",
      experience: "8 years",
      specialty: "Traditional Tamil patterns",
      image: "Professional portrait of a skilled mehandi artist with beautiful traditional Indian attire"
    },
    {
      name: "Kavitha Devi",
      role: "Aari Work Specialist",
      experience: "12 years",
      specialty: "Gold thread embroidery",
      image: "Expert Aari work artisan working on intricate embroidery with traditional tools"
    },
    {
      name: "Meera Shankar",
      role: "Senior Tailor",
      experience: "15 years",
      specialty: "Bridal outfit design",
      image: "Professional tailor measuring and fitting a beautiful bridal outfit"
    },
    {
      name: "Divya Raman",
      role: "Bridal Makeup Artist",
      experience: "10 years",
      specialty: "South Indian bridal looks",
      image: "Professional makeup artist applying traditional Tamil bridal makeup"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Our</span>
            <br />
            <span className="text-white">Legacy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preserving the timeless beauty of Tamil bridal traditions while embracing contemporary elegance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-3xl font-bold mb-6 gradient-text">Our Story</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded with a passion for preserving the rich cultural heritage of Tamil Nadu, 
                Tamil Bridal Beauty has been the trusted choice for brides across the region for over 5 years.
              </p>
              <p>
                Our journey began with a simple vision: to celebrate the timeless beauty of South Indian 
                bridal traditions while incorporating contemporary techniques and styles. Each service we 
                offer is a testament to our commitment to excellence and cultural authenticity.
              </p>
              <p>
                From the intricate patterns of traditional mehandi to the delicate artistry of Aari work, 
                from perfectly tailored bridal outfits to stunning makeup that enhances natural beauty - 
                we bring together the finest artisans and techniques to create unforgettable bridal experiences.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-6">
              <img  
                className="w-full h-96 object-cover rounded-2xl"
                alt="Traditional Tamil bridal preparation ceremony with artisans working"
               src="https://images.unsplash.com/photo-1695972774139-263e826f1eff" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-effect rounded-2xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-300">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass-effect rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="font-playfair text-3xl font-bold mb-4 gradient-text">Meet Our Expert Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our talented artisans bring years of experience and passion to create your perfect bridal look.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="glass-effect rounded-2xl p-4 group-hover:scale-105 transition-transform">
                  <img  
                    className="w-full h-64 object-cover rounded-xl"
                    alt={`${member.name} - ${member.role}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {member.experience}
                </div>
              </div>
              <h4 className="font-playfair text-xl font-bold text-white mb-2">{member.name}</h4>
              <p className="text-gray-300 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-400">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;