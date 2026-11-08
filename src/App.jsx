import { useState, useEffect } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Pages/Hero';
import About from './Component/Pages/About';
import Services from './Component/Pages/Services';
import Projects from './Component/Pages/Projects';
import Reviews from './Component/Pages/Reviews';
import Contact from './Component/Pages/Contact';
import Footer from './Component/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/useLanguage';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function AppContent() {
  const { t, isRTL } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const whatsappNumber = "201027375220";
  const whatsappMsg = encodeURIComponent(
    isRTL 
      ? "مرحباً Oscar Web Development، أود الاستفسار عن خدماتكم التقنية."
      : "Hello Oscar Web Development, I would like to inquire about your software services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="theme-bg-body min-vh-100 position-relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title={t.floating.chatWhatsapp}
        aria-label="Direct WhatsApp Chat"
      >
        <FaWhatsapp size={32} />
      </motion.a>

      {/* Floating Back-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="floating-back-top"
            title={t.footer.backToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
