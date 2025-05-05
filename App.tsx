import { useEffect } from 'react';
import { useTranslation } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();
  
  useEffect(() => {
    // Update the document title when language changes
    document.title = t('site.title');
  }, [t]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <LanguageSelector />
      <Footer />
    </div>
  );
}

export default App;