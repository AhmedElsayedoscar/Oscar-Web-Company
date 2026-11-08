import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowLeft, FaArrowRight, FaCode, FaCheckCircle, FaStar } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { useTheme } from '../../context/useTheme';

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();

  const whatsappNumber = "201027375220";
  const whatsappMsg = encodeURIComponent(
    isRTL 
      ? "مرحباً Oscar Web Development، أرغب في بدء مشروع جديد وتطوير موقعي."
      : "Hello Oscar Web Development, I'd like to start a new project and build my website."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-section py-5 position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}Oscar.jpeg)`
      }}
    >
      {/* High-quality Theme Overlay */}
      <div className="hero-overlay" />

      {/* Decorative floating ambient light */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: isDark ? [0.15, 0.3, 0.15] : [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="position-absolute top-25 start-50 translate-middle rounded-circle pointer-events-none"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 1
        }}
      />

      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center text-center gy-4">
          
          <div className="col-lg-10 col-xl-9 mx-auto">
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="oscar-badge mb-4"
            >
              <FaCode size={15} className="text-primary" />
              <span className="small">{t.hero.badge}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-4 fw-bold mb-4 lh-sm theme-text-main"
              style={{ fontWeight: 800 }}
            >
              {t.hero.titleStart}{' '}
              <span className="text-primary bg-gradient position-relative d-inline-block">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="theme-text-sub lead fs-5 mb-5 mx-auto"
              style={{ maxWidth: '780px', lineHeight: '1.8' }}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="d-flex flex-wrap justify-content-center gap-3 mb-5"
            >
              <div className="d-flex align-items-center gap-2 small px-3 py-2 rounded-pill oscar-card shadow-sm">
                <FaCheckCircle className="text-success" />
                <span className="theme-text-main fw-medium">{t.hero.pill1}</span>
              </div>
              <div className="d-flex align-items-center gap-2 small px-3 py-2 rounded-pill oscar-card shadow-sm">
                <FaCheckCircle className="text-success" />
                <span className="theme-text-main fw-medium">{t.hero.pill2}</span>
              </div>
              <div className="d-flex align-items-center gap-2 small px-3 py-2 rounded-pill oscar-card shadow-sm">
                <FaCheckCircle className="text-success" />
                <span className="theme-text-main fw-medium">{t.hero.pill3}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="d-flex flex-wrap align-items-center justify-content-center gap-3"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success bg-gradient px-4 py-3 rounded-pill fw-semibold text-white d-flex align-items-center gap-2 shadow fs-6"
              >
                <FaWhatsapp size={20} />
                <span>{t.hero.ctaWhatsapp}</span>
              </motion.a>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="btn btn-outline-primary px-4 py-3 rounded-pill fw-semibold d-flex align-items-center gap-2 fs-6"
              >
                <span>{t.hero.ctaProjects}</span>
                {isRTL ? <FaArrowLeft size={14} /> : <FaArrowRight size={14} />}
              </motion.button>
            </motion.div>

            {/* Trust Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-5 pt-3 d-flex align-items-center justify-content-center gap-4 text-muted small"
            >
              <div className="d-flex align-items-center gap-1">
                <div className="d-flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                </div>
                <span className="ms-1 fw-bold theme-text-main">5.0</span>
                <span className="theme-text-muted">({t.hero.statsSatisfaction})</span>
              </div>
              <div className="vr theme-border opacity-25" style={{ height: '18px' }}></div>
              <div className="theme-text-sub fw-semibold">
                {t.hero.statsProjects}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
