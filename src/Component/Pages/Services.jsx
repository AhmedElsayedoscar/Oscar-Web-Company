import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaServer, 
  FaThLarge, 
  FaUserTie, 
  FaDesktop, 
  FaMobileAlt, 
  FaWhatsapp, 
  FaCogs,
  FaArrowLeft,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { useTheme } from '../../context/useTheme';

const Services = () => {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();
  const whatsappNumber = "201027375220";

  const serviceIcons = [
    <FaLaptopCode className="text-primary fs-2" key="1" />,
    <FaServer className="text-info fs-2" key="2" />,
    <FaThLarge className="text-warning fs-2" key="3" />,
    <FaUserTie className="text-success fs-2" key="4" />,
    <FaDesktop className="text-danger fs-2" key="5" />,
    <FaMobileAlt style={{ color: '#a855f7' }} className="fs-2" key="6" />,
  ];

  const glowColors = [
    'rgba(59, 130, 246, 0.25)',
    'rgba(14, 165, 233, 0.25)',
    'rgba(245, 158, 11, 0.25)',
    'rgba(16, 185, 129, 0.25)',
    'rgba(239, 68, 68, 0.25)',
    'rgba(168, 85, 247, 0.25)',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="theme-bg-body py-5 position-relative overflow-hidden border-top theme-border" id="services">
      
      {/* Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: isDark ? [0.15, 0.3, 0.15] : [0.08, 0.16, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="position-absolute top-25 start-0 translate-middle-y rounded-circle pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
          filter: 'blur(110px)'
        }}
      />

      <div className="container py-4 position-relative">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="oscar-badge mb-3"
          >
            <FaCogs size={14} className="text-primary" />
            <span className="small">{t.services.badge}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-5 fw-bold theme-text-main mb-3"
          >
            {t.services.titleStart}{' '}
            <span className="text-primary">{t.services.titleHighlight}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="theme-text-sub lead fs-6 mx-auto"
            style={{ maxWidth: '700px', lineHeight: '1.8' }}
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Animated Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {t.services.items.map((service, index) => {
            const glow = glowColors[index % glowColors.length];
            const inquiryMsg = encodeURIComponent(
              isRTL 
                ? `مرحباً Oscar Web Development، أود الاستفسار عن خدمة (${service.title}) والبدء في تنفيذها.`
                : `Hello Oscar Web Development, I would like to inquire about (${service.title}) and get started.`
            );
            const waLink = `https://wa.me/${whatsappNumber}?text=${inquiryMsg}`;

            return (
              <motion.div key={index} variants={cardVariants} className="col-lg-4 col-md-6">
                
                <motion.div 
                  whileHover={{ 
                    y: -10, 
                    boxShadow: `0px 18px 35px ${glow}`
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-4 oscar-card h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                >
                  
                  {/* Internal ambient glow */}
                  <div 
                    className="position-absolute top-0 end-0 rounded-circle pointer-events-none opacity-25"
                    style={{
                      width: '160px',
                      height: '160px',
                      background: glow,
                      filter: 'blur(50px)',
                      zIndex: 0
                    }}
                  />

                  <div className="position-relative" style={{ zIndex: 1 }}>
                    
                    {/* Top Meta: Icon + ID */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                        className="p-3 rounded-3 shadow-sm d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-card)' }}
                      >
                        {serviceIcons[index % serviceIcons.length]}
                      </motion.div>

                      <span className="fs-5 fw-bold font-monospace theme-text-muted opacity-50">
                        {service.id}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="mb-3">
                      <span className="badge rounded-pill px-3 py-1 mb-2 small fw-normal" style={{ backgroundColor: 'var(--bg-badge)', color: 'var(--primary)' }}>
                        {service.sub}
                      </span>
                      <h3 className="fw-bold fs-4 theme-text-main mb-2">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="theme-text-sub small lh-base mb-4">{service.desc}</p>

                    {/* Features list */}
                    {service.features && (
                      <ul className="list-unstyled mb-4">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="d-flex align-items-center gap-2 small theme-text-sub mb-2">
                            <FaCheck size={11} className="text-success flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Order Button */}
                  <div className="position-relative mt-auto pt-2" style={{ zIndex: 1 }}>
                    <motion.a 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary border-2 py-2 px-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 w-100 shadow-sm"
                    >
                      <FaWhatsapp size={18} className="text-success" />
                      <span>{t.services.orderBtn}</span>
                      {isRTL ? <FaArrowLeft size={12} /> : <FaArrowRight size={12} />}
                    </motion.a>
                  </div>

                </motion.div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
