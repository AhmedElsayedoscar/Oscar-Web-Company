import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCheckCircle, 
  FaBullseye, 
  FaUsers, 
  FaProjectDiagram, 
  FaAward,
  FaHeart
} from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { useTheme } from '../../context/useTheme';

// Animated Counter component
const Counter = ({ target, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1800;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();

  const stats = [
    { icon: <FaProjectDiagram className="text-primary fs-3" />, target: 50, label: t.about.stat1Label, suffix: "+" },
    { icon: <FaUsers className="text-info fs-3" />, target: 35, label: t.about.stat2Label, suffix: "+" },
    { icon: <FaAward className="text-warning fs-3" />, target: 5, label: t.about.stat3Label, suffix: "+" },
    { icon: <FaHeart className="text-danger fs-3" />, target: 99, label: t.about.stat4Label, suffix: "%" },
  ];

  const strengths = [
    t.about.strength1,
    t.about.strength2,
    t.about.strength3,
    t.about.strength4,
  ];

  return (
    <section className="theme-bg-body py-5 position-relative overflow-hidden border-top theme-border" id="about">
      
      {/* Glow decorative effect */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: isDark ? 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />

      <div className="container py-4 position-relative">
        <div className="row align-items-center justify-content-center gy-5">
          
          <div className="col-lg-10 text-center">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="oscar-badge mb-4"
            >
              <FaBullseye size={14} className="text-primary" />
              <span className="small">{t.about.badge}</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-5 fw-bold mb-4 theme-text-main"
            >
              {t.about.titleStart}{' '}
              <span className="text-primary">{t.about.titleHighlight}</span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="theme-text-sub lead fs-6 mb-5 mx-auto text-center"
              style={{ maxWidth: '850px', lineHeight: '1.9' }}
            >
              <p className="mb-3">{t.about.desc1}</p>
              <p className="mb-0">{t.about.desc2}</p>
            </motion.div>

            {/* Key Strengths Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="row g-3 mb-5 justify-content-center text-start"
            >
              {strengths.map((strength, index) => (
                <div key={index} className="col-md-6">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: isRTL ? -4 : 4 }}
                    className="p-3 rounded-4 oscar-card d-flex align-items-center gap-3 h-100"
                  >
                    <div className="text-primary fs-4 flex-shrink-0">
                      <FaCheckCircle />
                    </div>
                    <div className="theme-text-main small fw-medium">
                      {strength}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="row g-3 g-md-4 justify-content-center"
            >
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="p-4 rounded-4 oscar-card text-center position-relative overflow-hidden h-100"
                  >
                    <div className="mb-3 d-inline-flex p-3 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--bg-badge)' }}>
                      {stat.icon}
                    </div>
                    <div className="fw-bold display-6 theme-text-main mb-1" style={{ fontWeight: 800 }}>
                      <Counter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="theme-text-sub small fw-semibold">{stat.label}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
