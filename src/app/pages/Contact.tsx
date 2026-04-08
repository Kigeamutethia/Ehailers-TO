import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import judiciaryBuildingImage from '../../assets/images/meeting-4.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
CONTACT FORM SUBMISSION

Contact Details:
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Organization: ${formData.organization || 'N/A'}

Subject: ${formData.subject}

Message:
-------------------
${formData.message}

---
This message was submitted through the Ehailers website contact form.
    `;

    // Create subject line
    const subjectLine = `Contact Form: ${formData.subject || 'General Inquiry'} - ${formData.name}`;

    // Open email client with pre-filled data
    const mailtoLink = `mailto:info@ehailersfoundation.org?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['No. 8, Milimani Business Park', 'Jakaya Kikwete Road', 'Nairobi, Kenya'],
      color: 'var(--navy-blue)'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['0721 217 577', '0722 229 463', '0727 583 858'],
      color: 'var(--red-cta)'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@ehailersfoundation.org'],
      color: 'var(--gold-highlight)'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
      color: 'var(--navy-blue)'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={judiciaryBuildingImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 128, 0.35)' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">We're here to help and answer any questions you may have</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <div 
                    className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-center" style={{ color: 'var(--navy-blue)' }}>
                    {info.title}
                  </h3>
                  <div className="space-y-1 text-center">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm" style={{ color: 'var(--graphite-black)' }}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
                Send Us a Message
              </h2>
              <div className="w-24 h-1 mb-8" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{ 
                      borderColor: 'var(--light-mist)', 
                      backgroundColor: 'var(--light-mist)',
                      color: 'var(--graphite-black)'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                      style={{ 
                        borderColor: 'var(--light-mist)', 
                        backgroundColor: 'var(--light-mist)',
                        color: 'var(--graphite-black)'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                      style={{ 
                        borderColor: 'var(--light-mist)', 
                        backgroundColor: 'var(--light-mist)',
                        color: 'var(--graphite-black)'
                      }}
                      placeholder="0700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{ 
                      borderColor: 'var(--light-mist)', 
                      backgroundColor: 'var(--light-mist)',
                      color: 'var(--graphite-black)'
                    }}
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{ 
                      borderColor: 'var(--light-mist)', 
                      backgroundColor: 'var(--light-mist)',
                      color: 'var(--graphite-black)'
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Member Support</option>
                    <option value="media">Media Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors resize-none"
                    style={{ 
                      borderColor: 'var(--light-mist)', 
                      backgroundColor: 'var(--light-mist)',
                      color: 'var(--graphite-black)'
                    }}
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full text-white text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
                  Visit Our Office
                </h2>
                <div className="w-24 h-1 mb-8" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8157!2d36.8022524!3d-1.2888287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTkuOCJTIDM2wrA0OCcwOC4xIkU!5e0!3m2!1sen!2ske!4v1234567890123"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2" style={{ borderColor: 'var(--gold-highlight)' }}>
                  <h3 className="text-xl mb-4" style={{ color: 'var(--navy-blue)' }}>
                    Get Directions
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--graphite-black)' }}>
                    Our office is conveniently located in Milimani Business Park, easily accessible from various parts of Nairobi.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=-1.2888287,36.8022524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                  >
                    <MapPin className="w-5 h-5" />
                    Open in Maps
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg" style={{ background: 'linear-gradient(135deg, var(--light-mist), white)' }}>
                <h3 className="text-xl mb-4" style={{ color: 'var(--navy-blue)' }}>
                  Alternative Contact Methods
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--navy-blue)' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm opacity-70" style={{ color: 'var(--graphite-black)' }}>Call us directly</p>
                      <a href="tel:+254721217577" className="font-semibold" style={{ color: 'var(--navy-blue)' }}>
                        0721 217 577 | 0727 583 858
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--red-cta)' }}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm opacity-70" style={{ color: 'var(--graphite-black)' }}>Email us</p>
                      <a href="mailto:info@ehailers.org" className="font-semibold" style={{ color: 'var(--navy-blue)' }}>
                        info@ehailersfoundation.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
              Connect With Us
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--graphite-black)' }}>
              Follow us on social media for updates and community engagement
            </p>
            
            <div className="flex justify-center gap-4">
              {/* Facebook */}
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-white" />
              </button>

              {/* X (formerly Twitter) */}
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                aria-label="X"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </button>

              {/* TikTok */}
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}