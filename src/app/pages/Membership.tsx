import { motion } from 'motion/react';
import { CheckCircle, UserPlus, FileText, Users, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import memberMeetingImage from '../../assets/images/member-meeting.png';

export function Membership() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    registrationNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: '',
    memberCount: '',
    operationRegions: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
EHAILERS MEMBERSHIP APPLICATION

Organization Details:
-------------------
Organization Name: ${formData.organizationName}
Registration Number: ${formData.registrationNumber}
Organization Type: ${formData.organizationType}
Number of Members: ${formData.memberCount}
Operation Regions: ${formData.operationRegions}

Contact Information:
-------------------
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}

Additional Information:
-------------------
${formData.message}

---
This application was submitted through the Ehailers website membership form.
    `;

    // Open email client with pre-filled data
    const mailtoLink = `mailto:info@ehailers.org?subject=Membership Application - ${formData.organizationName}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Close the modal
    setShowApplicationForm(false);
    
    // Reset form
    setFormData({
      organizationName: '',
      registrationNumber: '',
      contactPerson: '',
      email: '',
      phone: '',
      organizationType: '',
      memberCount: '',
      operationRegions: '',
      message: ''
    });
  };

  const benefits = [
    {
      icon: UserPlus,
      title: 'Legal Protection',
      description: 'Access to legal representation and advocacy in disputes with platforms, authorities, and other parties'
    },
    {
      icon: FileText,
      title: 'Enhanced Earnings',
      description: 'Collective bargaining for better rates, reduced commissions, and improved working conditions'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with fellow operators, share best practices, and build valuable industry relationships'
    }
  ];

  const memberOrganizations = [
    'Organisation of Online Drivers (OOD)',
    'Ridehail Transport Association (RTA)',
    'Digital Taxi Association of Kenya (DTAK)',
    'Nairobi Boda Boda Operators Cooperative',
    'Coast Region Transport Welfare Group',
    'Rift Valley Digital Drivers Association',
    'Western Kenya Transport Cooperative',
    'Nyanza Region Ride-Hailing Network',
    'Mt. Kenya Transport Operators Union',
    'Mombasa Digital Taxi Drivers',
    'Nakuru Transport Operators Forum',
    'Kisumu Mobility Solutions Group'
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Verify Eligibility',
      description: 'Ensure your organization is registered and operates in the digital transport sector'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Complete the membership application form with all required documentation'
    },
    {
      step: 3,
      title: 'Review Process',
      description: 'Our team reviews your application and verifies credentials (typically 5-7 business days)'
    },
    {
      step: 4,
      title: 'Approval & Onboarding',
      description: 'Upon approval, receive welcome package and access to member benefits'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={memberMeetingImage}
            alt="Community"
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
            <h1 className="text-4xl md:text-6xl mb-4">Membership</h1>
            <p className="text-xl opacity-90">Join Kenya's Largest Digital Transport Association</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Benefits of Joining Ehailers
            </h2>
            <div className="w-24 h-1 mx-auto mb-12" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    style={{ backgroundColor: 'var(--light-mist)' }}
                  >
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-3 text-center" style={{ color: 'var(--navy-blue)' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-center" style={{ color: 'var(--graphite-black)' }}>
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Application Process
            </h2>
            <div className="w-24 h-1 mx-auto mb-12" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}>
                      {item.step}
                    </div>
                    <h3 className="text-xl mb-3 mt-4" style={{ color: 'var(--navy-blue)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--graphite-black)' }}>{item.description}</p>
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5" style={{ backgroundColor: 'var(--gold-highlight)' }}></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Membership Criteria
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2" style={{ borderColor: 'var(--gold-highlight)' }}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--red-cta)' }} />
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>Registered Organizations Only</h3>
                    <p style={{ color: 'var(--graphite-black)' }}>
                      All applicants must be officially registered with relevant Kenyan authorities (e.g., Registrar of Societies, Registrar of Cooperatives, or relevant business registration body)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--red-cta)' }} />
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>Transport Sector Focus</h3>
                    <p style={{ color: 'var(--graphite-black)' }}>
                      Organizations must be actively involved in digital transport, ride-hailing, boda boda operations, vehicle leasing, or related mobility services
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--red-cta)' }} />
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>Good Standing</h3>
                    <p style={{ color: 'var(--graphite-black)' }}>
                      Applicants must demonstrate good standing with regulatory bodies and have no ongoing serious legal disputes that could affect the association's reputation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--red-cta)' }} />
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>Commitment to Values</h3>
                    <p style={{ color: 'var(--graphite-black)' }}>
                      All members must adhere to Ehailers' guiding principles including transparency, accountability, unity, and commitment to fair labour practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Member Organizations */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Our Member Organizations
            </h2>
            <div className="w-24 h-1 mx-auto mb-12" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memberOrganizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}>
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-semibold" style={{ color: 'var(--graphite-black)' }}>{org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={memberMeetingImage}
            alt="Nairobi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 51, 102, 0.95), rgba(220, 20, 60, 0.85))' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Become part of a powerful collective advocating for your rights and interests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
                style={{ background: 'linear-gradient(135deg, var(--gold-highlight), #C19A2E)', color: 'var(--navy-blue)' }}
              >
                <Mail className="w-5 h-5" />
                Apply Now
              </button>
              <a
                href="tel:+254721217577"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white border-2 transition-all hover:scale-105 text-lg"
                style={{ borderColor: 'var(--gold-highlight)', backgroundColor: 'transparent' }}
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={() => setShowApplicationForm(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 px-8 pt-8 pb-4 border-b">
              <button
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 bg-gray-100 rounded-full p-2"
                onClick={() => setShowApplicationForm(false)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-3xl mb-2" style={{ color: 'var(--navy-blue)' }}>
                Membership Application
              </h2>
              <p style={{ color: 'var(--graphite-black)' }}>
                Fill out the form below and submit via email
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="p-8">
              <div className="space-y-6">
                {/* Organization Details Section */}
                <div>
                  <h3 className="text-xl mb-4" style={{ color: 'var(--navy-blue)' }}>
                    Organization Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                        style={{ borderColor: 'var(--navy-blue)' }}
                      />
                    </div>

                    <div>
                      <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                        Registration Number *
                      </label>
                      <input
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                        style={{ borderColor: 'var(--navy-blue)' }}
                      />
                    </div>

                    <div>
                      <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                        Organization Type *
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                        style={{ borderColor: 'var(--navy-blue)' }}
                      >
                        <option value="">Select type...</option>
                        <option value="cooperative">Cooperative</option>
                        <option value="society">Registered Society</option>
                        <option value="association">Association</option>
                        <option value="union">Transport Union</option>
                        <option value="company">Limited Company</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                        Number of Members *
                      </label>
                      <input
                        type="text"
                        name="memberCount"
                        value={formData.memberCount}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., 50-100"
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                        style={{ borderColor: 'var(--navy-blue)' }}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                      Operation Regions *
                    </label>
                    <input
                      type="text"
                      name="operationRegions"
                      value={formData.operationRegions}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Nairobi, Kiambu, Machakos"
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                      style={{ borderColor: 'var(--navy-blue)' }}
                    />
                  </div>
                </div>

                {/* Contact Information Section */}
                <div>
                  <h3 className="text-xl mb-4" style={{ color: 'var(--navy-blue)' }}>
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                        style={{ borderColor: 'var(--navy-blue)' }}
                      />
                    </div>

                    <div>
                      <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="0712 345 678"
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                        style={{ borderColor: 'var(--navy-blue)' }}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                      style={{ borderColor: 'var(--navy-blue)' }}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block mb-2" style={{ color: 'var(--graphite-black)' }}>
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us more about your organization and why you want to join Ehailers..."
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none resize-none"
                    style={{ borderColor: 'var(--navy-blue)' }}
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-4 rounded-full text-white text-lg transition-all hover:scale-105 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
                  >
                    Submit via Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
                    style={{ backgroundColor: 'var(--light-mist)', color: 'var(--graphite-black)' }}
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-sm text-center" style={{ color: 'var(--graphite-black)' }}>
                  * Required fields. Clicking "Submit via Email" will open your email client with a pre-filled message.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}