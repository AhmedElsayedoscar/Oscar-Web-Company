import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';

const Testimonials = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="theme-bg-body py-5 position-relative overflow-hidden border-top theme-border" id="testimonials">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="oscar-badge mb-3"
          >
            <FaStar size={12} className="text-warning" />
            <span className="small">{t.reviews.badge}</span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-5 fw-bold theme-text-main mb-3"
          >
            {t.reviews.titleStart} <span className="text-warning">{t.reviews.titleHighlight}</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="theme-text-sub lead fs-6 mx-auto"
            style={{ maxWidth: '650px', lineHeight: '1.8' }}
          >
            {t.reviews.subtitle}
          </motion.p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="row g-4 justify-content-center">
          {t.reviews.items.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="col-md-6 col-lg-3"
            >
              <div 
                className="p-4 rounded-4 oscar-card h-100 d-flex flex-column justify-content-between position-relative"
              >
                {/* Quote Icon Background */}
                <div 
                  className={`position-absolute top-0 ${isRTL ? 'start-0' : 'end-0'} m-3 theme-text-muted opacity-25`}
                  style={{ pointerEvents: 'none' }}
                >
                  <FaQuoteLeft size={24} />
                </div>

                <div>
                  {/* Stars */}
                  <div className="d-flex gap-1 text-warning mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="theme-text-sub small mb-4 lh-base" style={{ fontStyle: 'italic' }}>
                    "{review.comment}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="d-flex align-items-center gap-3 pt-3 border-top theme-border mt-auto">
                  <div 
                    className="bg-primary bg-opacity-25 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0 shadow-sm" 
                    style={{ width: '42px', height: '42px', fontSize: '15px' }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-1">
                      <h6 className="fw-bold theme-text-main mb-0 fs-6">{review.name}</h6>
                      <FaCheckCircle className="text-primary" size={12} title={t.reviews.verifiedClient} />
                    </div>
                    <small className="theme-text-muted" style={{ fontSize: '0.75rem' }}>{review.role}</small>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
