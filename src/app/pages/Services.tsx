import { motion } from 'motion/react';
import { 
  FileText, 
  Shield, 
  Building2, 
  Scale, 
  MapPin, 
  Car, 
  Handshake,
  ChevronRight 
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ImpactCounter } from '../components/ImpactCounter';
import judiciaryBuildingImage from '../../assets/images/judiciary-building.png';
import countyGovBuildingImage from '../../assets/images/county-gov-building.png';
import parliamentChamberImage from '../../assets/images/parliament-chamber.png';
import meetingImage from '../../assets/images/meeting-1.png';
import memberMeetingImage from '../../assets/images/member-meeting.png';
import policyEngagementImage from '../../assets/images/policy-engagement.png';
import regulatoryComplianceImage from '../../assets/images/transport-operators.png';
import transportNetworkImage from '../../assets/images/taxi-drivers.png';
import stakeholderPartnershipsImage from '../../assets/images/stakeholder-partnerships.png';
import meetingPresentationImage from '../../assets/images/meeting-3.png';

export function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Policy Engagement',
      description: 'Active collaboration with the State Department of Transport to shape policies that benefit digital transport operators',
      details: [
        'Participation in national transport policy formulation',
        'Representation in regulatory governance structures',
        'Submission of position papers on industry issues',
        'Stakeholder consultations and roundtables'
      ],
      color: 'var(--navy-blue)',
      image: policyEngagementImage
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Direct engagement with NTSA and other regulatory bodies to ensure smooth operations and compliance',
      details: [
        'Guidance on licensing and permit requirements',
        'Support for PSV badge applications',
        'Vehicle inspection compliance assistance',
        'Regulatory updates and briefings'
      ],
      color: 'var(--red-cta)',
      image: regulatoryComplianceImage
    },
    {
      icon: Building2,
      title: 'Government & Institutional Liaison',
      description: 'Facilitating relationships with KRA, SHA, NSSF, WIBA, and other statutory bodies',
      details: [
        'Tax compliance support and advocacy',
        'Social health and pension registration assistance',
        'Workers compensation guidance',
        'Institutional partnerships for member benefits'
      ],
      color: 'var(--gold-highlight)',
      image: judiciaryBuildingImage
    },
    {
      icon: Scale,
      title: 'Legislative Advocacy',
      description: 'Representing members before the National Assembly and lobbying for labor rights and industry reforms',
      details: [
        'Submissions to parliamentary committees',
        'Advocacy for favorable legislation',
        'Lobbying for worker protections',
        'Monitoring of transport-related bills'
      ],
      color: 'var(--navy-blue)',
      image: parliamentChamberImage
    },
    {
      icon: MapPin,
      title: 'County Government Collaboration',
      description: 'Engaging with county governments across Kenya for local sector support and development',
      details: [
        'County-level policy advocacy',
        'Support for county transport plans',
        'Engagement with county revenue departments',
        'Local partnership development'
      ],
      color: 'var(--red-cta)',
      image: countyGovBuildingImage
    },
    {
      icon: Car,
      title: 'Transport Network Company Relations',
      description: 'Dialogue with drivers, vehicle owners, platforms; advocacy for fair compensation and transparency',
      details: [
        'Negotiation of platform commission rates',
        'Advocacy for transparent pricing algorithms',
        'Dispute resolution mechanisms',
        'Fair deactivation policies'
      ],
      color: 'var(--gold-highlight)',
      image: transportNetworkImage
    },
    {
      icon: Handshake,
      title: 'Stakeholder Partnerships',
      description: 'Strategic partnerships for financial services, insurance, vehicle leasing, EVs, LPG retrofitting, and mobility solutions',
      details: [
        'Preferential financing and loan products',
        'Discounted insurance packages',
        'Vehicle leasing and hire purchase options',
        'Electric vehicle and green technology access',
        'LPG conversion partnerships',
        'Fuel card and maintenance programs'
      ],
      color: 'var(--navy-blue)',
      image: stakeholderPartnershipsImage
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={policyEngagementImage}
            alt="Modern Office"
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
            <h1 className="text-4xl md:text-6xl mb-4">Our Services</h1>
            <p className="text-xl opacity-90">Comprehensive Support for Digital Transport Operators</p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
              What We Do for Our Members
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--graphite-black)' }}>
              From policy engagement to stakeholder partnerships, we provide end-to-end support to ensure your success in Kenya's digital transport sector
            </p>
            <div className="w-24 h-1 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-xl relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${service.color}99, ${service.color}dd)` }}
                      >
                        <Icon className="w-24 h-24 text-white opacity-90" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'var(--light-mist)' }}>
                      <span style={{ color: service.color }}>Service {index + 1}</span>
                    </div>
                    
                    <h3 className="text-3xl mb-4" style={{ color: 'var(--navy-blue)' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-lg mb-6" style={{ color: 'var(--graphite-black)' }}>
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: service.color }} />
                          <span style={{ color: 'var(--graphite-black)' }}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
              Service Highlights
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-center" style={{ color: 'var(--navy-blue)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-center" style={{ color: 'var(--graphite-black)' }}>
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
              Our Services in Action
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-6" style={{ color: 'var(--graphite-black)' }}>
              We work across multiple fronts to ensure our members receive comprehensive support and representation
            </p>
            <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={policyEngagementImage}
                alt="Policy Engagement Meeting"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl mb-3" style={{ color: 'var(--navy-blue)' }}>Policy Engagement</h3>
                <p style={{ color: 'var(--graphite-black)' }}>
                  Regular engagement with government officials and policymakers to shape favorable regulations for our members
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={meetingPresentationImage}
                  alt="Taxi Rates Presentation"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-2" style={{ color: 'var(--navy-blue)' }}>100+</div>
                  <p className="text-sm" style={{ color: 'var(--graphite-black)' }}>Policy Submissions</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-2" style={{ color: 'var(--red-cta)' }}>50+</div>
                  <p className="text-sm" style={{ color: 'var(--graphite-black)' }}>Partnership Agreements</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={meetingImage}
                alt="Member Engagement Meeting"
                className="w-full h-64 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={policyEngagementImage}
                alt="Transport Operator Member"
                className="w-full h-64 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={memberMeetingImage}
                alt="Government Engagement Meeting"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Our Services Matter Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
                Why Our Services Matter
              </h2>
              <div className="w-24 h-1 mb-6" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl mb-3" style={{ color: 'var(--red-cta)' }}>Enhanced Earning Potential</h3>
                  <p style={{ color: 'var(--graphite-black)' }}>
                    Through collective bargaining and platform negotiations, we help members secure better rates, reduced commissions, and improved working conditions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl mb-3" style={{ color: 'var(--red-cta)' }}>Legal Protection & Advocacy</h3>
                  <p style={{ color: 'var(--graphite-black)' }}>
                    Our legal team provides support in disputes with platforms, authorities, and other parties, ensuring your rights are protected.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl mb-3" style={{ color: 'var(--red-cta)' }}>Industry Leadership</h3>
                  <p style={{ color: 'var(--graphite-black)' }}>
                    We represent your interests at the highest levels of government and industry, shaping policies that benefit all transport operators.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={meetingPresentationImage}
                  alt="Taxi Rates Advocacy Presentation"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-2" style={{ color: 'var(--navy-blue)' }}>100+</div>
                  <p className="text-sm" style={{ color: 'var(--graphite-black)' }}>Policy Submissions</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-2" style={{ color: 'var(--red-cta)' }}>50+</div>
                  <p className="text-sm" style={{ color: 'var(--graphite-black)' }}>Partnership Agreements</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactCounter variant="services" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={memberMeetingImage}
            alt="Nairobi Skyline"
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
              Need Assistance with Any of Our Services?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Our team is ready to support you with policy engagement, compliance, and partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@ehailers.org"
                className="inline-block px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
                style={{ background: 'linear-gradient(135deg, var(--gold-highlight), #C19A2E)', color: 'var(--navy-blue)' }}
              >
                Contact Us
              </a>
              <a
                href="tel:+254721217577"
                className="inline-block px-10 py-4 rounded-full text-white border-2 transition-all hover:scale-105 text-lg"
                style={{ borderColor: 'var(--gold-highlight)', backgroundColor: 'transparent' }}
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}