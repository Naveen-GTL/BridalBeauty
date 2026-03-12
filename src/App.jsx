import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen pattern-bg">
      <Helmet>
        <title>Tamil Bridal Beauty - Premium Mehandi, Aari Work, Tailoring & Makeup Services</title>
        <meta name="description" content="Exquisite South Indian bridal services in Tamil Nadu. Specializing in traditional Mehandi designs, intricate Aari work, custom tailoring, and authentic Tamil bridal makeup." />
        <meta property="og:title" content="Tamil Bridal Beauty - Premium Bridal Services in Tamil Nadu" />
        <meta property="og:description" content="Transform your special day with our traditional South Indian bridal services. Expert Mehandi artists, Aari work specialists, custom tailoring, and professional makeup artists." />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;