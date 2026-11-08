import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaFacebookF, 
  FaWhatsapp, 
  FaArrowUp,
  FaHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const whatsappNumber1 = "201027375220";
  const whatsappNumber2 = "201018761843";
  const facebookUrl = "https://www.facebook.com/share/1CNQqPFeZA/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const ChevronIcon = isRTL ? FaChevronLeft : FaChevronRight;

  return (
    <footer className="theme-bg-body pt-5 pb-4 border-top theme-border position-relative">
      <div className="container py-4">
        
        {/* Main 4-Column Grid */}
        <div className="row g-4 mb-5">
          
          {/* Column 1: Brand Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="bg-primary bg-gradient p-2 rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm">
                <FaCode size={20} />
              </div>
              <div className="d-flex flex-column text-start">
                <span className="fw-bold fs-4 text-primary tracking-wide lh-1">
                  {t.brandName}
                </span>
                <span className="small theme-text-muted" style={{ fontSize: '0.65rem' }}>
                  {t.brandTagline} — {t.footer.companyName}
                </span>
              </div>
            </div>

            <p className="theme-text-sub small mb-4 lh-base" style={{ maxWidth: '340px' }}>
              {t.footer.bio}
            </p>

            {/* Social Media Buttons */}
            <div className="d-flex align-items-center gap-2">
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="control-btn p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: '40px', height: '40px' }}
                title="Facebook"
              >
                <FaFacebookF size={15} />
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${whatsappNumber1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="control-btn p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm text-success"
                style={{ width: '40px', height: '40px' }}
                title="WhatsApp 1"
              >
                <FaWhatsapp size={17} />
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${whatsappNumber2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="control-btn p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm text-success"
                style={{ width: '40px', height: '40px' }}
                title="WhatsApp 2"
              >
                <FaWhatsapp size={17} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-bold theme-text-main mb-3 fs-6">
              {t.footer.quickLinksTitle}
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => scrollToSection(e, 'hero')} 
                  className="text-decoration-none theme-text-sub oscar-nav-link d-inline-flex align-items-center gap-1"
                >
                  <ChevronIcon size={10} className="text-primary opacity-75" />
                  <span>{t.nav.home}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')} 
                  className="text-decoration-none theme-text-sub oscar-nav-link d-inline-flex align-items-center gap-1"
                >
                  <ChevronIcon size={10} className="text-primary opacity-75" />
                  <span>{t.nav.about}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, 'services')} 
                  className="text-decoration-none theme-text-sub oscar-nav-link d-inline-flex align-items-center gap-1"
                >
                  <ChevronIcon size={10} className="text-primary opacity-75" />
                  <span>{t.nav.services}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')} 
                  className="text-decoration-none theme-text-sub oscar-nav-link d-inline-flex align-items-center gap-1"
                >
                  <ChevronIcon size={10} className="text-primary opacity-75" />
                  <span>{t.nav.projects}</span>
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => scrollToSection(e, 'testimonials')} 
                  className="text-decoration-none theme-text-sub oscar-nav-link d-inline-flex align-items-center gap-1"
                >
                  <ChevronIcon size={10} className="text-primary opacity-75" />
                  <span>{t.nav.reviews}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="fw-bold theme-text-main mb-3 fs-6">
              {t.footer.servicesTitle}
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
              {t.services.items.slice(0, 5).map((service, idx) => (
                <li key={idx}>
                  <a 
                    href="#services" 
                    onClick={(e) => scrollToSection(e, 'services')} 
                    className="text-decoration-none theme-text-sub oscar-nav-link d-inline-flex align-items-center gap-1"
                  >
                    <ChevronIcon size={10} className="text-primary opacity-75" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Phone Numbers */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold theme-text-main mb-3 fs-6">
              {t.footer.contactTitle}
            </h6>
            <div className="d-flex flex-column gap-3 small">
              
              {/* Phones */}
              <div className="d-flex align-items-start gap-2">
                <div className="p-2 rounded-2 bg-success bg-opacity-25 text-success mt-1">
                  <FaPhoneAlt size={12} />
                </div>
                <div className="d-flex flex-column gap-1">
                  <a 
                    href={`https://wa.me/${whatsappNumber1}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-decoration-none fw-semibold text-success font-monospace d-inline-block"
                    dir="ltr"
                  >
                    {t.contact.phone}
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber2}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-decoration-none fw-semibold text-success font-monospace d-inline-block"
                    dir="ltr"
                  >
                    {t.contact.phone2}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center gap-2">
                <div className="p-2 rounded-2 bg-primary bg-opacity-25 text-primary">
                  <FaEnvelope size={12} />
                </div>
                <a 
                  href={`mailto:${t.contact.email}`} 
                  className="text-decoration-none fw-semibold text-primary font-monospace small"
                >
                  {t.contact.email}
                </a>
              </div>

              {/* Scroll to Top Button */}
              <div className="pt-2">
                <motion.button 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={scrollToTop}
                  className="btn btn-sm btn-outline-primary rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 small"
                >
                  <FaArrowUp size={12} />
                  <span>{t.footer.backToTop}</span>
                </motion.button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright Divider */}
        <div className="pt-4 border-top theme-border d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 text-center text-md-start">
          <p className="theme-text-muted small mb-0">
            {t.footer.allRights} {new Date().getFullYear()} <span className="text-primary fw-bold">شركة أوسكار للبرمجيات | Oscar Web Development</span>.
          </p>
          <p className="theme-text-muted small mb-0 d-flex align-items-center justify-content-center gap-1">
            <span>{t.footer.developedWith}</span>
            <FaHeart className="text-danger mx-1" size={12} />
            <span className="fw-semibold theme-text-main">Oscar Team</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
