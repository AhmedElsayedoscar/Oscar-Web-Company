import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaWhatsapp, 
  FaProjectDiagram,
  FaShoppingBag,
  FaDumbbell,
  FaBuilding,
  FaUserTie
} from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { useTheme } from '../../context/useTheme';

const Projects = () => {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();
  const whatsappNumber = "201027375220";

  const [activeFilter, setActiveFilter] = useState('all');

  const projectIcons = {
    ecommerce: <FaShoppingBag className="text-primary fs-3" />,
    portfolio: <FaUserTie className="text-info fs-3" />,
    systems: <FaDumbbell className="text-warning fs-3" />,
    corporate: <FaBuilding className="text-success fs-3" />,
  };

  const projectGlows = {
    ecommerce: 'rgba(59, 130, 246, 0.25)',
    portfolio: 'rgba(14, 165, 233, 0.25)',
    systems: 'rgba(245, 158, 11, 0.25)',
    corporate: 'rgba(16, 185, 129, 0.25)',
  };

  const filterOptions = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'ecommerce', label: t.projects.filterEcommerce },
    { key: 'systems', label: t.projects.filterSystems },
    { key: 'corporate', label: t.projects.filterCorporate },
    { key: 'portfolio', label: t.projects.filterPortfolio },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? t.projects.items 
    : t.projects.items.filter(p => p.categoryType === activeFilter);

  return (
    <section className="theme-bg-body py-5 position-relative overflow-hidden border-top theme-border" id="projects">
      
      {/* Decorative Background Glow */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: isDark ? 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="container py-4 position-relative">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="oscar-badge mb-3"
          >
            <FaProjectDiagram size={14} className="text-primary" />
            <span className="small">{t.projects.badge}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-5 fw-bold theme-text-main mb-3"
          >
            {t.projects.titleStart}{' '}
            <span className="text-primary">{t.projects.titleHighlight}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="theme-text-sub lead fs-6 mx-auto mb-4"
            style={{ maxWidth: '700px', lineHeight: '1.8' }}
          >
            {t.projects.subtitle}
          </motion.p>

          {/* Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="d-flex flex-wrap justify-content-center gap-2 mb-4"
          >
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="row g-4">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const waMsg = encodeURIComponent(
                isRTL 
                  ? `مرحباً Oscar Web Development، أعجبني مشروع (${project.title}) وأرغب في تنفيذ مشروع مشابه له بمواصفات خاصة.`
                  : `Hello Oscar Web Development, I liked your project (${project.title}) and would like to build a similar one.`
              );
              const waLink = `https://wa.me/${whatsappNumber}?text=${waMsg}`;
              const icon = projectIcons[project.categoryType] || <FaProjectDiagram className="text-primary fs-3" />;
              const glow = projectGlows[project.categoryType] || 'rgba(59,130,246,0.25)';

              return (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="col-lg-6"
                >
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 rounded-4 oscar-card h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  >
                    
                    {/* Subtle internal glow */}
                    <div 
                      className="position-absolute top-0 end-0 rounded-circle pointer-events-none opacity-20"
                      style={{
                        width: '180px',
                        height: '180px',
                        background: glow,
                        filter: 'blur(55px)',
                      }}
                    />

                    <div className="position-relative" style={{ zIndex: 1 }}>
                      {/* Top Meta info */}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div 
                          className="p-3 rounded-3 shadow-sm d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: 'var(--bg-badge)', border: '1px solid var(--border-card)' }}
                        >
                          {icon}
                        </div>
                        <span className="badge rounded-pill px-3 py-2 small font-monospace" style={{ backgroundColor: 'var(--bg-badge)', color: 'var(--primary)' }}>
                          {project.tag}
                        </span>
                      </div>

                      {/* Category & Title */}
                      <div className="small text-primary fw-semibold mb-1">{project.category}</div>
                      <h3 className="fw-bold fs-4 theme-text-main mb-3">{project.title}</h3>

                      {/* Description */}
                      <p className="theme-text-sub small lh-base mb-4">{project.desc}</p>

                      {/* Tech stack badges */}
                      {project.tech && (
                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2 py-1 rounded-2 small theme-text-muted"
                              style={{ 
                                fontSize: '0.75rem', 
                                backgroundColor: 'var(--bg-pill)', 
                                border: '1px solid var(--border-subtle)' 
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Actions Buttons */}
                    <div className="d-flex flex-column flex-sm-row gap-2 mt-auto position-relative" style={{ zIndex: 1 }}>
                      
                      {/* Live Demo */}
                      <motion.a 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary py-2 px-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 flex-grow-1 small shadow-sm"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span>{t.projects.livePreview}</span>
                      </motion.a>

                      {/* Request Similar on WhatsApp */}
                      <motion.a 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success bg-gradient border-0 py-2 px-3 rounded-pill fw-semibold text-white d-flex align-items-center justify-content-center gap-2 flex-grow-1 small shadow-sm"
                      >
                        <FaWhatsapp size={16} />
                        <span>{t.projects.orderSimilar}</span>
                      </motion.a>

                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
