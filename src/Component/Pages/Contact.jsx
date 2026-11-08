import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaComments,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { useTheme } from '../../context/useTheme';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();

  const whatsappNumber = "201027375220";
  
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    service: t.contact.serviceOptions[0],
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct cleanly formatted WhatsApp message
    const msg = isRTL
      ? `*طلب مشروع جديد — Oscar Web Development*%0A%0A` +
        `👤 *الاسم:* ${formData.name}%0A` +
        `📞 *وسيلة التواصل:* ${formData.contactInfo}%0A` +
        `💼 *الخدمة المطلوبة:* ${formData.service}%0A` +
        (formData.budget ? `💰 *الميزانية المتوقعة:* ${formData.budget}%0A` : '') +
        `📝 *تفاصيل الفكرة:*%0A${formData.message}`
      : `*New Project Inquiry — Oscar Web Development*%0A%0A` +
        `👤 *Name:* ${formData.name}%0A` +
        `📞 *Contact Info:* ${formData.contactInfo}%0A` +
        `💼 *Required Service:* ${formData.service}%0A` +
        (formData.budget ? `💰 *Budget:* ${formData.budget}%0A` : '') +
        `📝 *Project Details:*%0A${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');

    setSubmitted(true);
    setFormData({ 
      name: '', 
      contactInfo: '', 
      service: t.contact.serviceOptions[0], 
      budget: '', 
      message: '' 
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section className="theme-bg-body py-5 position-relative overflow-hidden border-top theme-border" id="contact">
      
      {/* Background Decorative Glow */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: isDark ? 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="container py-4 position-relative">
        
        {/* Header */}
        <div className="text-center mb-5">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="oscar-badge mb-3"
          >
            <FaComments size={14} className="text-success" />
            <span className="small">{t.contact.badge}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-5 fw-bold theme-text-main mb-3"
          >
            {t.contact.titleStart}{' '}
            <span className="text-success">{t.contact.titleHighlight}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="theme-text-sub lead fs-6 mx-auto"
            style={{ maxWidth: '650px', lineHeight: '1.8' }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* Main Contact Form */}
          <div className="col-lg-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 p-md-5 rounded-4 oscar-card position-relative"
            >
              
              {/* Success Notification Banner */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="alert alert-success bg-success bg-opacity-25 border border-success text-success d-flex align-items-center gap-3 p-3 rounded-3 mb-4"
                  >
                    <FaCheckCircle className="text-success fs-3 flex-shrink-0" />
                    <div>
                      <div className="fw-bold">{t.contact.successTitle}</div>
                      <div className="small theme-text-sub">{t.contact.successDesc}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  
                  {/* Name input */}
                  <div className="col-md-6">
                    <label className="form-label theme-text-sub small fw-semibold">
                      {t.contact.nameLabel} <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder} 
                      className="form-control oscar-form-control shadow-none"
                    />
                  </div>

                  {/* Contact info input */}
                  <div className="col-md-6">
                    <label className="form-label theme-text-sub small fw-semibold">
                      {t.contact.contactInfoLabel} <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="contactInfo" 
                      required
                      value={formData.contactInfo}
                      onChange={handleChange}
                      placeholder={t.contact.contactInfoPlaceholder} 
                      className="form-control oscar-form-control shadow-none"
                    />
                  </div>

                  {/* Service selection */}
                  <div className="col-md-7">
                    <label className="form-label theme-text-sub small fw-semibold">
                      {t.contact.serviceLabel} <span className="text-danger">*</span>
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select oscar-form-control shadow-none cursor-pointer"
                    >
                      {t.contact.serviceOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget input */}
                  <div className="col-md-5">
                    <label className="form-label theme-text-sub small fw-semibold">
                      {t.contact.budgetLabel}
                    </label>
                    <input 
                      type="text" 
                      name="budget" 
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder={t.contact.budgetPlaceholder} 
                      className="form-control oscar-form-control shadow-none"
                    />
                  </div>

                  {/* Message / Details */}
                  <div className="col-12">
                    <label className="form-label theme-text-sub small fw-semibold">
                      {t.contact.messageLabel} <span className="text-danger">*</span>
                    </label>
                    <textarea 
                      name="message" 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder} 
                      className="form-control oscar-form-control shadow-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="btn btn-success bg-gradient border-0 w-100 py-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 shadow fs-6 text-white"
                    >
                      <FaWhatsapp size={22} />
                      <span>{t.contact.submitBtn}</span>
                    </motion.button>
                  </div>

                </div>
              </form>
            </motion.div>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3 h-100 justify-content-between">
              
              <div className="p-4 rounded-4 oscar-card">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="p-3 rounded-3 bg-success bg-opacity-25 text-success">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h6 className="fw-bold theme-text-main mb-2">WhatsApp / Call</h6>
                    <div className="d-flex flex-column gap-1">
                      <a 
                        href={`https://wa.me/${whatsappNumber}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-decoration-none fw-semibold text-success small font-monospace d-inline-block"
                        dir="ltr"
                      >
                        {t.contact.phone}
                      </a>
                      <a 
                        href="https://wa.me/201018761843" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-decoration-none fw-semibold text-success small font-monospace d-inline-block"
                        dir="ltr"
                      >
                        {t.contact.phone2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-4 oscar-card">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="p-3 rounded-3 bg-primary bg-opacity-25 text-primary">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h6 className="fw-bold theme-text-main mb-1">Official Email</h6>
                    <a 
                      href={`mailto:${t.contact.email}`} 
                      className="text-decoration-none fw-semibold text-primary small font-monospace"
                    >
                      {t.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-4 oscar-card">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="p-3 rounded-3 bg-warning bg-opacity-25 text-warning">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h6 className="fw-bold theme-text-main mb-1">Headquarters & Remote</h6>
                    <span className="theme-text-sub small lh-sm">
                      {t.contact.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
