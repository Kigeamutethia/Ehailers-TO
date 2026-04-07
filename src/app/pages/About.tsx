import { motion } from 'motion/react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TeamCarousel } from '../components/TeamCarousel';
import meetingImage from '@/assets/images/meeting-1.png';
import knightsAppsLogo from '@/assets/images/knights-apps-logo.png';
import drivelectricLogo from '@/assets/images/drivelectric-logo.png';
import justinNyagaImage from '@/assets/images/justin-nyaga.png';
import sophiaIbrahimGedoImage from '@/assets/images/sophia-ibrahim-gedo.png';
import salmaKikowaImage from '@/assets/images/salma-kikowa.png';
import wycliffeAlutalaImage from '@/assets/images/wycliffe-alutalala.png';
import juliusNyambokImage from '@/assets/images/julius-nyambok.png';
import mathewLesanjoImage from '@/assets/images/mathew-lesanjo.png';
import wilberforceNgieImage from '@/assets/images/wilberforce-ngie.png';
import danielMangaImage from '@/assets/images/daniel-manga.png';

export function About() {
  const teamMembers = [
    { name: 'Daniel Manga', role: 'Chairperson', image: danielMangaImage },
    { name: 'Justin Nyaga', role: 'Secretary General', image: justinNyagaImage },
    { name: 'Sophia Ibrahim Gedo', role: 'Treasurer', image: sophiaIbrahimGedoImage },
    { name: 'Dennis Nyariki', role: 'Organising Secretary', image: wilberforceNgieImage },
    { name: 'Salma Kikowa', role: 'Woman Representative', image: salmaKikowaImage },
    { name: 'David Muigai', role: 'Administrator', image: mathewLesanjoImage },
    { name: 'David Muteru', role: 'Trustee & Board Secretary', image: juliusNyambokImage },
    { name: 'Wycliffe Alutalala', role: 'Legal Research', image: wycliffeAlutalaImage },
    { name: 'Calvince Okumu', role: 'Board Member', image: wilberforceNgieImage },
    { name: 'Julius Nyambok', role: 'Board Member', image: juliusNyambokImage },
    { name: 'Mathew Lesanjo', role: 'Board Member', image: mathewLesanjoImage },
    { name: 'Wilberforce Ngie', role: 'Board Member', image: wilberforceNgieImage },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={meetingImage}
            alt="Ehailers Association Meeting"
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
            <h1 className="text-4xl md:text-6xl mb-4">About Us</h1>
            <p className="text-xl opacity-90">Uniting Kenya's Digital Transport Sector</p>
          </motion.div>
        </div>
      </section>

      {/* History & Formation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Our History & Formation
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
            
            <div className="space-y-6" style={{ color: 'var(--graphite-black)' }}>
              <p className="text-lg leading-relaxed">
                Established in <span style={{ color: 'var(--gold-highlight)' }}>2026</span>, the Ehailers Transport Operators Umbrella Association was born from the vision of uniting Kenya's fragmented digital transport sector into a powerful collective voice.
              </p>
              <p className="text-lg leading-relaxed">
                The association was founded through the amalgamation of three pioneering organizations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                {[
                  'Organisation of Online Drivers',
                  'Ridehail Transport Association',
                  'Digital Taxi Association of Kenya'
                ].map((org, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg text-center shadow-md"
                    style={{ backgroundColor: 'var(--light-mist)' }}
                  >
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold">{org}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg leading-relaxed">
                Today, we represent a diverse ecosystem including registered ride-hailing associations, cooperatives, welfare groups, self-help groups, community-based organizations, boda boda operators, vehicle owners, and leasing agencies across Kenya.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={meetingImage}
                  alt="Kenya Transport Bus"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl mb-4" style={{ color: 'var(--navy-blue)' }}>Our Mission</h2>
                  <p className="text-lg" style={{ color: 'var(--graphite-black)' }}>
                    To champion fair labour practices, safeguard investments, and strengthen Kenya's digital mobility ecosystem through advocacy, policy engagement, and strategic partnerships.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl mb-4" style={{ color: 'var(--navy-blue)' }}>Our Vision</h2>
                  <p className="text-lg" style={{ color: 'var(--graphite-black)' }}>
                    A thriving, sustainable, and equitable digital transport sector where all operators—drivers, vehicle owners, leasing agencies, and platforms—work together for shared prosperity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Represent */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Who We Represent
            </h2>
            <div className="w-24 h-1 mx-auto mb-12" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Registered Ride-Hailing Associations',
                'Transport Cooperatives',
                'Welfare Groups',
                'Self-Help Groups',
                'Community-Based Organizations',
                'Boda Boda Operators',
                'Vehicle Owners',
                'Leasing Agencies',
                'Digital Transport Organizations'
              ].map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                  style={{ backgroundColor: 'var(--light-mist)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}>
                      <span className="text-white">✓</span>
                    </div>
                    <p className="font-semibold" style={{ color: 'var(--graphite-black)' }}>{group}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Criteria */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Membership Criteria
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg mb-6" style={{ color: 'var(--graphite-black)' }}>
                To maintain the integrity and effectiveness of our association, membership is exclusively open to:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--gold-highlight)' }}>
                    <span className="text-white text-sm">1</span>
                  </div>
                  <p style={{ color: 'var(--graphite-black)' }}>
                    <strong>Registered Organizations:</strong> All member entities must be officially registered with relevant Kenyan authorities
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--gold-highlight)' }}>
                    <span className="text-white text-sm">2</span>
                  </div>
                  <p style={{ color: 'var(--graphite-black)' }}>
                    <strong>Transport Sector Focus:</strong> Organizations must operate within the digital transport and mobility sector
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--gold-highlight)' }}>
                    <span className="text-white text-sm">3</span>
                  </div>
                  <p style={{ color: 'var(--graphite-black)' }}>
                    <strong>Commitment to Values:</strong> Adherence to our guiding principles and code of conduct
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capacity Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
              Capacity Support Partners
            </h2>
            <p className="text-lg mb-12" style={{ color: 'var(--graphite-black)' }}>
              We acknowledge the invaluable support provided by:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white border-2"
                style={{ borderColor: 'var(--light-mist)' }}
              >
                <div className="mb-6 flex items-center justify-center" style={{ minHeight: '120px' }}>
                  <img 
                    src={drivelectricLogo}
                    alt="Drivelectric" 
                    className="max-w-full h-auto"
                    style={{ maxHeight: '100px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl mb-2" style={{ color: 'var(--navy-blue)', fontWeight: '600' }}>Drivelectric</h3>
                <p style={{ color: 'var(--red-cta)', fontWeight: '500' }}>Capacity Building Partner</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white border-2"
                style={{ borderColor: 'var(--light-mist)' }}
              >
                <div className="mb-6 flex items-center justify-center" style={{ minHeight: '120px' }}>
                  <img 
                    src={knightsAppsLogo} 
                    alt="Knights and Apps" 
                    className="max-w-full h-auto"
                    style={{ maxHeight: '100px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl mb-2" style={{ color: 'var(--navy-blue)', fontWeight: '600' }}>Knights and Apps</h3>
                <p style={{ color: 'var(--red-cta)', fontWeight: '500' }}>Technology Partner</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ color: 'var(--navy-blue)' }}>
              Our Management Team
            </h2>
            <div className="w-24 h-1 mx-auto mb-12" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

            <TeamCarousel teamMembers={teamMembers} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}