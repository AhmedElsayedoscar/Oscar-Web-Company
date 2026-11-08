import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaThLarge, 
  FaUserTie, 
  FaDesktop, 
  FaMobileAlt, 
  FaChevronDown, 
  FaBars, 
  FaTimes, 
  FaWhatsapp,
  FaSun,
  FaMoon,
  FaGlobe
} from 'react-icons/fa';
import { useTheme } from '../../context/useTheme';
import { useLanguage } from '../../context/useLanguage';

const Navbar = () => {
  const { toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const closeMenu = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "201027375220";
  const whatsappMsg = encodeURIComponent(
    isRTL 
      ? "مرحباً Oscar Web Development، أرغب في الاستفسار عن خدماتكم وبدء مشروع جديد." 
      : "Hello Oscar Web Development, I would like to inquire about your services and start a new project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  const serviceIcons = [
    <FaLaptopCode className="text-primary fs-5" key="1" />,
    <FaServer className="text-info fs-5" key="2" />,
    <FaThLarge className="text-warning fs-5" key="3" />,
    <FaUserTie className="text-success fs-5" key="4" />,
    <FaDesktop className="text-danger fs-5" key="5" />,
    <FaMobileAlt style={{ color: '#a855f7' }} className="fs-5" key="6" />,
  ];

  return (
    <nav className="navbar navbar-expand-lg oscar-navbar py-3 sticky-top" style={{ zIndex: 1080 }}>
      <div className="container">
        
        {/* Brand Logo */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <button 
            onClick={() => scrollToSection('hero')} 
            className="navbar-brand d-flex align-items-center gap-2 bg-transparent border-0 text-decoration-none cursor-pointer"
          >
            <div className="bg-primary bg-gradient p-2 rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm">
              <FaCode size={20} />
            </div>
            <div className="d-flex flex-column text-start">
              <span className="fw-bold fs-4 lh-1 text-primary tracking-wide">
                {t.brandName}
              </span>
              <span className="small text-muted" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                {t.brandTagline}
              </span>
            </div>
          </button>
        </motion.div>

        {/* Mobile controls & toggle button */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          {/* Quick theme toggle for mobile */}
          <button
            onClick={toggleTheme}
            className="btn btn-sm control-btn p-2"
            title={isDark ? t.nav.themeToggleDark : t.nav.themeToggleLight}
            aria-label="Theme toggle"
          >
            {isDark ? <FaSun className="text-warning" size={16} /> : <FaMoon className="text-primary" size={16} />}
          </button>

          {/* Quick language toggle for mobile */}
          <button
            onClick={toggleLanguage}
            className="btn btn-sm control-btn p-2"
            title="Switch Language"
            aria-label="Language toggle"
          >
            <FaGlobe size={15} />
            <span style={{ fontSize: '0.75rem' }}>{language === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          <button
            className="navbar-toggler border-0 text-main shadow-none p-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes size={22} className="theme-text-main" /> : <FaBars size={22} className="theme-text-main" />}
          </button>
        </div>

        {/* Navbar Links & Desktop Controls */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
            
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('hero')} 
                className={`nav-link btn border-0 py-2 px-3 fw-medium bg-transparent oscar-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              >
                {t.nav.home}
              </button>
            </li>

            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('about')} 
                className={`nav-link btn border-0 py-2 px-3 fw-medium bg-transparent oscar-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                {t.nav.about}
              </button>
            </li>

            {/* Services Dropdown */}
            <li 
              className="nav-item dropdown position-relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button 
                className={`nav-link btn border-0 d-flex align-items-center gap-1 py-2 px-3 fw-medium bg-transparent oscar-nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => scrollToSection('services')}
              >
                {t.nav.services}
                <motion.div animate={{ rotate: showDropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <FaChevronDown size={11} className={isRTL ? 'me-1' : 'ms-1'} />
                </motion.div>
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="dropdown-menu show position-absolute border-0 oscar-dropdown-menu p-2 rounded-4"
                    style={{ 
                      minWidth: '280px', 
                      top: '100%', 
                      [isRTL ? 'right' : 'left']: 0, 
                      zIndex: 1050 
                    }}
                  >
                    {t.services.items.map((service, index) => (
                      <li key={index}>
                        <button 
                          className="dropdown-item oscar-dropdown-item d-flex align-items-center gap-3 p-2 rounded-3 bg-transparent border-0 w-100 text-start cursor-pointer" 
                          onClick={() => scrollToSection('services')}
                        >
                          <div className="p-2 rounded-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--bg-badge)' }}>
                            {serviceIcons[index % serviceIcons.length]}
                          </div>
                          <div>
                            <div className="fw-semibold theme-text-main fs-6">{service.title}</div>
                            <div className="theme-text-muted small" style={{ fontSize: '0.78rem' }}>{service.sub}</div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`nav-link btn border-0 py-2 px-3 fw-medium bg-transparent oscar-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                {t.nav.projects}
              </button>
            </li>

            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className={`nav-link btn border-0 py-2 px-3 fw-medium bg-transparent oscar-nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              >
                {t.nav.reviews}
              </button>
            </li>

            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`nav-link btn border-0 py-2 px-3 fw-medium bg-transparent oscar-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                {t.nav.contact}
              </button>
            </li>

          </ul>

          {/* Desktop Right Controls (Theme, Language, CTA) */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 justify-content-center">
            
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="control-btn d-none d-lg-inline-flex"
              title="Change Language"
            >
              <FaGlobe size={14} className="text-primary" />
              <span>{t.nav.switchLang}</span>
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="control-btn d-none d-lg-inline-flex"
              title={isDark ? t.nav.themeToggleDark : t.nav.themeToggleLight}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <>
                  <FaSun className="text-warning" size={15} />
                  <span className="small">Light</span>
                </>
              ) : (
                <>
                  <FaMoon className="text-primary" size={15} />
                  <span className="small">Dark</span>
                </>
              )}
            </motion.button>

            {/* WhatsApp CTA Button */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success bg-gradient border-0 px-4 py-2 rounded-pill fw-semibold shadow-sm text-white d-inline-flex align-items-center justify-content-center gap-2 w-100"
                onClick={closeMenu}
              >
                <FaWhatsapp size={18} />
                <span>{t.nav.contactCta}</span>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
