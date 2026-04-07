import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Users, Target, Shield, TrendingUp, FileCheck, Briefcase, BarChart3, ChevronRight, Phone, Mail, MapPin, UserCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ImpactCounter } from '../components/ImpactCounter';
import { KenyaMap } from '../components/KenyaMap';
import { useEffect, useState } from 'react';
import heroImage from '@/assets/images/meeting-4.png';
import meetingImage1 from '@/assets/images/meeting-2.png';
import meetingImage2 from '@/assets/images/meeting-3.png';
import meetingImage3 from '@/assets/images/meeting-4.png';
import meetingImage4 from '@/assets/images/member-meeting.png';
import bodaBodaImage from '@/assets/images/boda-boda.png';
import memberMeetingImage from '@/assets/images/member-meeting.png';
import bodaBodaOperatorImage from '@/assets/images/boda-boda-operator.png';
import ehailerImage from '@/assets/images/ehailer.png';
import transportOperatorsImage from '@/assets/images/transport-operators.png';
import jamesMwangiImage from '@/assets/images/james-mwangi.png';
import graceAkinyiImage from '@/assets/images/grace-akinyi.png';
import electricVehicleImage from '@/assets/images/electric-vehicle.png';
import electricBusChargingImage from '@/assets/images/electric-bus-charging.png';

export function Home() {
  const regions = [
    'Mombasa', 'Kilifi', 'Kwale', 'Nairobi', 
    'Nakuru', 'Kericho', 'Kisumu', 'Eldoret'
  ];

  const features = [
    {
      icon: Users,
      title: 'United Community',
      description: 'Representing drivers, vehicle owners, boda boda operators, and digital transport organizations across Kenya',
    },
    {
      icon: Shield,
      title: 'Fair Labour Practices',
      description: 'Championing rights, safeguarding investments, and ensuring fair compensation for all members',
    },
    {
      icon: TrendingUp,
      title: 'Return on Investment',
      description: 'Strategic partnerships and advocacy to maximize returns for transport operators and investors',
    },
    {
      icon: FileCheck,
      title: 'Industry Leadership',
      description: 'Leading policy engagement and regulatory compliance in Kenya\'s digital mobility sector',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ehailers Association Meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 128, 0.35)' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(212, 175, 55, 0.2)', border: '1px solid var(--gold-highlight)' }}>
              <span style={{ color: 'var(--gold-highlight)' }}>The Voice of Digital Transport in Kenya</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl mb-4" style={{ lineHeight: '1.2' }}>
              Ehailers Transport Operators Umbrella Association
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              The Amalgamation of Digital Transport Organisations – Kenya
            </p>
            
            <p className="text-lg md:text-xl mb-8 opacity-80">
              To champion fair labour practices, safeguard investments, and strengthen Kenya's digital mobility ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="px-8 py-4 rounded-full text-white transition-all hover:scale-105 shadow-lg text-lg"
                style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
              >
                Join Us
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full text-white border-2 transition-all hover:scale-105"
                style={{ borderColor: 'var(--gold-highlight)', backgroundColor: 'transparent' }}
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-full transition-all hover:scale-105"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6" style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl text-white">
            Enhanced Labour and Return on Investment
          </h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--navy-blue)' }}>
              Why Join Ehailers?
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
          </motion.div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={meetingImage1}
                alt="Professional Meeting"
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={meetingImage2}
                alt="Association Group Photo"
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={meetingImage3}
                alt="Digital Taxi Rates Presentation"
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow"
                  style={{ backgroundColor: 'var(--light-mist)' }}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--red-cta))' }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3" style={{ color: 'var(--navy-blue)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--graphite-black)' }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={bodaBodaOperatorImage}
                alt="Boda Boda Operators"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl">Boda Boda Operators</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={ehailerImage}
                alt="Ride Hailing Driver"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl">Digital Ride-Hailing</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={transportOperatorsImage}
                alt="Transport Operators"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl">Transport Operators</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--navy-blue)' }}>
              Our Impact in Numbers
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
          </motion.div>

          <ImpactCounter variant="home" />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl" style={{ color: 'var(--navy-blue)' }}>
                What We Do For Our Members
              </h2>
              <div className="w-24 h-1" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
              
              <div className="space-y-4">
                {[
                  { icon: FileCheck, title: 'Policy Advocacy', desc: 'Engaging with government bodies to shape favorable transport policies' },
                  { icon: Shield, title: 'Legal Protection', desc: 'Safeguarding member rights and providing legal support' },
                  { icon: Briefcase, title: 'Business Development', desc: 'Creating opportunities for growth and sustainability' },
                  { icon: BarChart3, title: 'Industry Insights', desc: 'Regular updates on market trends and opportunities' }
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-md"
                    >
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1" style={{ color: 'var(--navy-blue)' }}>{service.title}</h3>
                        <p className="text-sm" style={{ color: 'var(--graphite-black)' }}>{service.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                to="/services"
                className="inline-block mt-6 px-8 py-3 rounded-full text-white transition-all hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
              >
                View All Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={meetingImage1}
                    alt="Professional Meeting"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={meetingImage2}
                    alt="Team Collaboration"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={meetingImage3}
                    alt="Association Members"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={meetingImage4}
                    alt="Conference Room"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--navy-blue)' }}>
              What Our Members Say
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--graphite-black)' }}>
              Hear from transport operators across Kenya about their experience with Ehailers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'James Mwangi',
                role: 'Ride-Hailing Driver, Nairobi',
                image: jamesMwangiImage,
                text: 'Joining Ehailers was the best decision for my business. The policy advocacy has really helped improve our working conditions and earnings.'
              },
              {
                name: 'Grace Akinyi',
                role: 'Vehicle Owner, Kisumu',
                image: graceAkinyiImage,
                text: 'The association provides excellent support for vehicle owners. Their regulatory compliance assistance has saved me time and money.'
              },
              {
                name: 'Fred Morara',
                role: 'Boda Boda Operator, Nakuru',
                image: bodaBodaImage,
                text: 'Ehailers has been instrumental in negotiating better terms with platforms. I feel represented and supported in this industry.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-4 italic" style={{ color: 'var(--graphite-black)' }}>
                    "{testimonial.text}"
                  </p>
                  <h4 className="mb-1" style={{ color: 'var(--navy-blue)' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--red-cta)' }}>
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--navy-blue)' }}>
              Who We Represent
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'Ride-Hailing Drivers',
              'Boda Boda Operators',
              'Vehicle Owners',
              'Leasing Agencies',
              'Transport Cooperatives',
              'Digital Transport Platforms'
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                  >
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg" style={{ color: 'var(--navy-blue)' }}>{category}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={memberMeetingImage}
                alt="Ehailers Community Meeting"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl" style={{ color: 'var(--navy-blue)' }}>
                A United Voice for Digital Transport
              </h3>
              <p className="text-lg" style={{ color: 'var(--graphite-black)' }}>
                We bring together diverse stakeholders in Kenya's digital transport ecosystem to create a stronger, more sustainable industry for everyone.
              </p>
              <p className="text-lg" style={{ color: 'var(--graphite-black)' }}>
                From individual operators to large organizations, every member plays a vital role in shaping the future of transport in Kenya.
              </p>
              <Link
                to="/about"
                className="inline-block mt-4 px-8 py-3 rounded-full text-white transition-all hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--red-cta))' }}
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Large Image Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={electricVehicleImage}
                alt="Electric Vehicle at AutoPax Event"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={electricBusChargingImage}
                alt="Electric Bus Charging Station"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action with Large Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735837836890-96e40da9c255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGNpdHklMjBzdHJlZXQlMjBidXN5JTIwdHJhZmZpY3xlbnwxfHx8fDE3NzQzNDg5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Kenya City Street"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.9), rgba(0, 51, 102, 0.9))' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Join Thousands of Transport Operators
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Be part of the movement transforming Kenya's digital transport landscape. Together, we're creating a better future for all operators.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/membership"
                  className="px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl"
                  style={{ background: 'linear-gradient(135deg, var(--gold-highlight), #C19A2E)', color: 'var(--navy-blue)' }}
                >
                  Join Now
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full border-2 border-white text-white transition-all hover:scale-105 hover:bg-white/10"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: Target, text: 'Unified advocacy for better policies' },
                { icon: Shield, text: 'Legal protection and support' },
                { icon: TrendingUp, text: 'Improved earnings and conditions' },
                { icon: Users, text: 'Network with fellow operators' }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white text-lg">{benefit.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regions Served */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--navy-blue)' }}>
              Key Regions We Serve
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--graphite-black)' }}>
              Click on any marker to explore our service areas across Kenya
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <KenyaMap />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Be part of Kenya's largest digital transport operators association
            </p>
            <Link
              to="/membership"
              className="inline-block px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
              style={{ background: 'linear-gradient(135deg, var(--gold-highlight), #C19A2E)', color: 'var(--navy-blue)' }}
            >
              Become a Member Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}