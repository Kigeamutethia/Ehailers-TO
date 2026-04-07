import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import judiciaryBuildingImage from '../../assets/images/judiciary-building.png';
import bodaBodaImage from '../../assets/images/boda-boda.png';
import memberMeetingImage from '../../assets/images/member-meeting.png';
import parliamentChamberImage from '../../assets/images/parliament-chamber.png';
import meetingImage from '../../assets/images/meeting-1.png';
import electricVehicleImage from '../../assets/images/electric-vehicle.png';

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const newsItems = [
    {
      id: 1,
      title: 'Ehailers Launches Major Policy Initiative with State Department of Transport',
      category: 'Policy',
      date: 'March 15, 2026',
      excerpt: 'New collaborative framework aims to improve working conditions and earning potential for digital transport operators across Kenya.',
      image: judiciaryBuildingImage,
      content: `In a groundbreaking development that marks a turning point for digital transport operators across Kenya, Ehailers has successfully entered into a comprehensive policy engagement framework with the State Department of Transport. This historic initiative represents months of intensive negotiations and stakeholder consultations, positioning our association as a key partner in shaping the future of Kenya's transport sector.

The framework establishes regular quarterly meetings between Ehailers leadership and senior officials from the State Department, creating a formal channel for addressing policy concerns and proposing regulatory reforms. This unprecedented access ensures that the voices of our 50,000+ members—drivers, vehicle owners, boda boda operators, and digital platform workers—are heard at the highest levels of government decision-making.

Key focus areas of this collaboration include:

**Fair Compensation Standards**: Development of guidelines for platform commission rates and surge pricing transparency, ensuring operators receive fair compensation for their services while maintaining platform sustainability.

**Worker Classification and Rights**: Ongoing dialogue about the employment status of digital transport workers, exploring frameworks that provide social protection without stifling the flexibility that makes gig economy work attractive.

**Safety and Security Protocols**: Joint development of comprehensive safety standards for both drivers and passengers, including enhanced vetting procedures, emergency response systems, and insurance requirements.

**Licensing and Compliance Streamlining**: Simplification of the PSV badge application process and coordination between NTSA, county governments, and transport platforms to reduce bureaucratic hurdles for operators.

**Data Privacy and Platform Accountability**: Establishment of guidelines protecting operator data while ensuring platforms maintain transparency in their algorithms, deactivation policies, and performance metrics.

Speaking at the framework signing ceremony held at the Ministry of Transport headquarters in Nairobi, our Chairman Daniel Manga emphasized the significance of this achievement: "For too long, digital transport operators have been making decisions that affect their livelihoods without a seat at the table. This framework changes that reality. We now have a formal, structured mechanism to advocate for our members and contribute to policy development."

The State Department's Principal Secretary acknowledged the crucial role that digital transport plays in Kenya's mobility ecosystem, noting that the partnership with Ehailers will help ensure that regulations support innovation while protecting workers' rights and passenger safety.

This policy engagement framework builds on our successful track record of advocacy, including our recent submissions on the Digital Economy Blueprint and our participation in the National Assembly Transport Committee hearings. It represents a new chapter in our mission to champion fair labor practices and strengthen Kenya's digital mobility ecosystem.

As we move forward with this collaboration, we remain committed to keeping our members informed and engaged in the policy development process. Regular updates will be shared through our communication channels, and we encourage all members to participate in upcoming consultation forums where your input will directly shape our policy positions.`
    },
    {
      id: 2,
      title: 'Successful Membership Drive Across Coastal Region',
      category: 'Events',
      date: 'March 10, 2026',
      excerpt: 'Over 500 new members from Mombasa, Kilifi, and Kwale join the association, strengthening our coastal presence.',
      image: bodaBodaImage,
      content: `The coastal winds of change are blowing strong for Ehailers! Our recent membership drive across Kenya's coastal region has exceeded all projections, with over 500 transport operators from Mombasa, Kilifi, and Kwale counties joining our growing movement in just two weeks. This remarkable response demonstrates the urgent need for unified representation among digital transport workers and the strong appetite for collective action in the region.

The membership drive, which ran from February 25 to March 9, 2026, involved a series of well-attended town hall meetings, roadside registration booths, and one-on-one consultations with operators across the three counties. Our team, led by Coast Regional Coordinator Sophia Ibrahim Gedo, worked tirelessly to engage with boda boda riders, ride-hailing drivers, tuk-tuk operators, and vehicle owners who have long felt excluded from industry discussions.

**Mombasa County: A Hub of Activity**

In Mombasa, we registered 280 new members during events held at various strategic locations including the Mombasa Bus Park, Nyali Beach area, and Likoni Ferry terminals. The turnout at our Mombasa town hall meeting was particularly impressive, with over 150 operators attending to learn about membership benefits and share their challenges with platform algorithms, commission rates, and regulatory compliance issues.

Many Mombasa operators expressed frustration with inconsistent enforcement of county parking regulations and the lack of designated pick-up/drop-off zones for ride-hailing services. These concerns have been documented and will form part of our engagement agenda with Mombasa County Government.

**Kilifi County: Tourism Sector Operators Join the Movement**

Kilifi County presented unique opportunities, with 140 new members joining from the vibrant tourism corridor stretching from Kilifi town to Watamu and Malindi. Many of these operators serve the tourism industry, transporting visitors to hotels, beaches, and marine parks. They highlighted specific challenges related to seasonal fluctuations in demand and the need for specialized insurance products that account for tourist passenger transport.

The registration drive in Kilifi also attracted significant interest from motorcycle taxi operators who provide essential connectivity in rural areas where conventional ride-hailing platforms have limited reach. Their inclusion strengthens our representation of diverse transport modalities.

**Kwale County: Expanding Beyond Urban Centers**

In Kwale County, 85 new members registered, with particular interest from operators serving the Diani Beach area and those providing rural-urban connectivity. Kwale operators emphasized the need for advocacy around fuel pricing, access to affordable vehicle financing, and improved road infrastructure.

**What This Means for Our Coastal Members**

With this expansion, Ehailers now has a substantial presence across the coastal region, enabling us to:
- Establish a dedicated Coast Regional Office to provide localized support
- Negotiate region-specific partnerships with insurance providers, fuel suppliers, and financial institutions
- Advocate for coastal transport infrastructure improvements
- Organize regular training workshops on business management and regulatory compliance
- Create forums for knowledge sharing among coastal operators

Our new coastal members will benefit from all national-level advocacy efforts while also receiving focused attention on regional issues. The establishment of county-level chapters in Mombasa, Kilifi, and Kwale will ensure that local voices contribute to our policy positions and that regional concerns receive appropriate attention.

As we welcome our new coastal family, we're reminded that strength lies in numbers. Each new member strengthens our negotiating position with platforms, government agencies, and service providers. Together, we're building a movement that truly represents Kenya's digital transport ecosystem from coast to hinterland.`
    },
    {
      id: 3,
      title: 'New Partnership with Leading Insurance Provider Announced',
      category: 'Partnerships',
      date: 'March 5, 2026',
      excerpt: 'Members to benefit from exclusive insurance packages with up to 30% discount on comprehensive cover.',
      image: memberMeetingImage,
      content: `We are thrilled to announce a landmark partnership with Heritage Insurance Company, one of Kenya's most trusted insurance providers, bringing unprecedented value and protection to Ehailers members. This exclusive arrangement offers comprehensive motor insurance packages at rates up to 30% lower than standard market prices, alongside enhanced coverage options specifically designed for digital transport operators.

**The Partnership Details**

After months of negotiations, we've secured terms that recognize the unique needs and risk profiles of our members. Unlike standard insurance products that often penalize high-mileage operators with prohibitive premiums, our partnership package acknowledges that professional transport operators maintain their vehicles better and have different risk characteristics than casual drivers.

**Comprehensive Coverage at 30% Discount**

All Ehailers members now have access to comprehensive motor insurance with premiums reduced by up to 30% compared to Heritage's standard rates. This substantial saving can translate to thousands of shillings annually, money that stays in operators' pockets instead of going to insurance premiums.

The comprehensive cover includes:
- Damage to your vehicle from accidents, fire, or theft
- Third-party liability covering injury or property damage to others
- Windscreen damage and replacement
- Medical expenses for driver and passengers
- Towing and recovery services
- Courtesy car provision during repairs

**Third-Party and Passenger Liability**

Recognizing that many operators prefer third-party coverage to minimize costs, we've also negotiated competitive rates for third-party insurance with enhanced passenger liability limits. This is particularly important for ride-hailing drivers who regularly carry passengers and need robust liability protection.

The partnership package increases standard passenger liability from KES 2 million to KES 5 million at no additional cost, providing crucial peace of mind when transporting members of the public.

**Special Add-Ons for Transport Operators**

Heritage has developed specialized add-on covers specifically for our members:

**Personal Accident Cover for Drivers**: Affordable personal accident insurance providing compensation for injuries sustained while working, filling a critical gap for operators who lack traditional employment benefits.

**Loss of Income Protection**: A groundbreaking product that provides temporary income support if your vehicle is off the road due to accident damage or theft, helping operators meet their financial obligations during repair periods.

**Tool and Accessories Cover**: Protection for items like phone mounts, dash cams, first aid kits, and other equipment essential for professional transport operations.

**How to Access These Benefits**

Enrollment is straightforward. Members can:
1. Visit Heritage Insurance offices and present their Ehailers membership card
2. Call Heritage's dedicated Ehailers hotline: 0800 100 100
3. Access online quotes through a special portal on our website (launching soon)
4. Attend one of our scheduled roadshows where Heritage representatives will be available

All new policies will include a 10% first-year discount on top of the partnership rates, making it even more attractive for members to switch to Heritage during this initial rollout period.

**Beyond Cost Savings: Simplified Claims Process**

One of the most frustrating aspects of insurance for many operators is the claims process. Our partnership includes commitments from Heritage to:
- Fast-track claims from Ehailers members
- Provide a dedicated claims hotline
- Assign relationship managers for complex cases
- Conduct mobile vehicle assessments to minimize downtime

**Looking Ahead**

This partnership with Heritage Insurance is the first of several strategic alliances we're developing to deliver tangible value to members. Upcoming announcements will cover partnerships in fuel supply, vehicle maintenance, financial services, and more.

Insurance costs represent one of the significant operating expenses for transport operators. By leveraging our collective bargaining power, we're demonstrating that membership in Ehailers delivers real, measurable financial benefits alongside our advocacy and representation efforts.

We encourage all members to explore these insurance options and make informed decisions about protecting themselves, their vehicles, and their livelihoods. Your Ehailers membership is already paying dividends!`
    },
    {
      id: 4,
      title: 'Ehailers Represents Members in National Assembly Transport Committee Hearing',
      category: 'Advocacy',
      date: 'February 28, 2026',
      excerpt: 'Association presents key recommendations on digital transport regulation and worker protection legislation.',
      image: parliamentChamberImage,
      content: `In a significant milestone for digital transport operator advocacy, Ehailers leadership appeared before the National Assembly's Transport and Infrastructure Committee on February 28, 2026, to present comprehensive recommendations on pending legislation affecting our sector. This opportunity to address Kenya's lawmakers directly represents the growing recognition of our association as the legitimate voice of digital transport workers and the importance of our contributions to national transport policy.

**The Legislative Context**

The committee hearing focused on two critical pieces of legislation currently under consideration:

1. **The Digital Workers Protection Bill, 2026**: Proposed legislation aimed at establishing basic rights and protections for workers in the gig economy, including ride-hailing drivers, delivery riders, and other platform-based workers.

2. **The Transport Network Companies (Regulation) Bill, 2026**: A bill seeking to create a regulatory framework specifically for digital transport platforms, covering licensing, operational standards, data protection, and dispute resolution mechanisms.

Our delegation, led by Chairman Daniel Manga and accompanied by legal advisors and member representatives, spent three hours presenting detailed submissions and responding to questions from committee members.

**Our Key Recommendations**

**On Worker Classification and Rights:**

We urged legislators to adopt a hybrid classification model that preserves the flexibility that makes platform work attractive while ensuring basic protections. Our proposal includes:

- Minimum earnings guarantees that ensure operators earn at least minimum wage after platform commissions
- Mandatory contribution to social security schemes (NSSF and SHA) with platforms contributing as employers
- Right to organize and collectively bargain without fear of deactivation
- Protection against arbitrary account deactivations with mandatory due process
- Accident and injury compensation through the Work Injury Benefits Act (WIBA)

**On Platform Transparency and Accountability:**

We presented evidence from member surveys highlighting frustrations with opaque algorithms and inconsistent enforcement of platform policies. Our recommendations included:

- Mandatory disclosure of commission rate structures and any changes with 30-day notice
- Transparency in surge pricing algorithms and earnings calculations
- Right to access personal data collected by platforms
- Independent appeals process for account deactivations
- Regular audits of platform algorithms to ensure fairness and non-discrimination

**On Licensing and Regulatory Compliance:**

Recognizing the need for public safety standards while avoiding unnecessary bureaucracy, we proposed:

- Streamlined PSV badge application process with standardized requirements across counties
- Recognition of platform-conducted background checks to avoid duplicate vetting
- Unified digital licensing system reducing paperwork and wait times
- Clear distinction between commercial transport licensing requirements and private vehicle use
- Affordable licensing fees that don't create barriers to entry

**On Safety and Insurance:**

We emphasized the importance of comprehensive safety measures that protect both operators and passengers:

- Mandatory minimum insurance coverage standards for all platform vehicles
- In-app safety features including emergency buttons and trip tracking
- Regular vehicle inspection requirements with platform oversight
- Training programs on defensive driving and customer service
- Passenger verification measures to prevent fraudulent bookings

**Committee Response and Next Steps**

The committee members engaged extensively with our presentations, asking detailed questions about implementation challenges, cost implications, and enforcement mechanisms. Several MPs expressed strong support for worker protections, with the committee chairman committing to incorporate many of our recommendations into the final bill drafts.

Particularly encouraging was the committee's recognition that digital transport operators cannot continue to operate in a regulatory gray area. There was consensus that clear rules benefit everyone—operators gain protections and certainty, platforms gain legitimacy and stability, and passengers gain safety assurances.

**Member Impact**

This hearing represents the culmination of extensive member consultations conducted over the past six months. The recommendations we presented were shaped by surveys, focus groups, and regional meetings involving thousands of operators from across Kenya. Your voices were heard in Parliament!

The legislative process continues with committee deliberations, potential amendments, and eventual presentation to the full National Assembly. We will continue tracking these bills closely and updating members on progress.

**Strengthening Our Advocacy**

This successful engagement with Parliament demonstrates the power of organized advocacy. As individual operators, we have limited influence. As Ehailers—representing tens of thousands of workers—we command attention and respect from policymakers.

We encourage all members to stay engaged with our advocacy efforts by:
- Participating in surveys and consultations
- Attending regional forums and town halls
- Sharing your experiences with platform policies and regulatory challenges
- Supporting our campaigns through social media and word-of-mouth

Your membership fees fund this critical advocacy work. Every shilling invested in Ehailers membership translates to stronger representation and better outcomes for all transport operators.

As Chairman Manga stated in closing our presentation to the committee: "We're not just asking for handouts or special treatment. We're asking for fair rules, transparent processes, and the basic dignity of workers who are powering Kenya's transport revolution. Our members deserve nothing less."`
    },
    {
      id: 5,
      title: 'Capacity Building Workshop Held in Nakuru',
      category: 'Training',
      date: 'February 20, 2026',
      excerpt: 'Over 200 members participated in a two-day workshop on financial literacy and business management for transport operators.',
      image: meetingImage,
      content: `Over 200 transport operators from Nakuru and surrounding counties participated in a transformative two-day capacity building workshop on February 19-20, 2026, marking our most successful training program to date. Held at the Nakuru Agricultural Training Centre, the workshop provided practical tools and knowledge to help members build sustainable transport businesses and achieve long-term financial security.

**Why Financial Literacy Matters for Transport Operators**

Many transport operators earn decent daily revenues but struggle with financial management, savings, and long-term planning. The informal nature of platform work, with daily earnings and fluctuating income, creates unique financial management challenges that traditional employment doesn't present.

Our pre-workshop survey revealed that:
- 67% of operators don't maintain detailed business expense records
- 54% struggle to separate business income from personal spending
- 71% have no emergency savings fund
- 43% have taken high-interest loans to cover business or personal expenses
- Only 18% have any form of retirement savings

These statistics demonstrate the urgent need for financial literacy education tailored to the realities of transport operator life.

**Workshop Content and Structure**

The two-day program covered essential topics through a mix of presentations, interactive exercises, and real-world case studies:

**Day One: Financial Management Fundamentals**

*Session 1: Understanding Your Business Finances*
- Differentiating between revenue, profit, and personal income
- Tracking daily, weekly, and monthly earnings
- Identifying and categorizing business expenses (fuel, maintenance, insurance, platform commissions)
- Calculating true hourly earnings after all costs
- Using simple mobile apps for expense tracking

*Session 2: Building Emergency Funds and Savings*
- The importance of emergency funds for vehicle repairs and income disruptions
- Practical strategies for saving irregular income
- Introduction to Savings and Credit Cooperative Organizations (SACCOs) and group savings models
- Understanding interest rates and choosing savings products
- Setting realistic savings goals

*Session 3: Managing Debt Wisely*
- Understanding the true cost of high-interest loans
- Alternatives to predatory lending (SACCOs, table banking, cooperative credit)
- Using debt strategically for business growth (vehicle purchases, upgrades)
- Creating debt repayment plans
- Negotiating with creditors

**Day Two: Business Growth and Planning**

*Session 4: Tax Compliance for Transport Operators*
- Understanding KRA tax obligations for transport operators
- PIN registration and iTax system basics
- Claiming allowable business expense deductions
- Quarterly tax filing for those earning above threshold
- Avoiding tax penalties and interest charges

*Session 5: Vehicle Asset Management*
- Preventive maintenance to minimize repair costs and downtime
- Understanding vehicle depreciation and planning for replacement
- Leasing vs. ownership considerations
- Insurance options and claims management
- Extending vehicle lifespan through proper care

*Session 6: Growing Your Transport Business*
- Strategies for maximizing earnings within platform constraints
- Multi-apping and diversifying income sources
- Understanding surge patterns and strategic positioning
- Building a positive rating and customer relationships
- Transition planning from driver to vehicle owner/fleet operator

**Expert Facilitators**

The workshop featured presentations from:
- Financial literacy experts from Kenya Institute of Bankers
- Successful transport operators who've built sustainable businesses
- Tax professionals from KRA who provided practical guidance
- Representatives from family-focused SACCOs discussing savings products
- Insurance advisors explaining coverage options

**Practical Tools Provided**

Each participant received:
- A comprehensive Financial Management Workbook with templates for expense tracking, budgeting, and goal setting
- Access to a free mobile app for tracking income and expenses
- List of reputable SACCOs and financial service providers with contact information
- Tax filing guide specifically for transport operators
- Vehicle maintenance checklist and schedule

**Participant Feedback**

The response was overwhelmingly positive, with participants expressing appreciation for practical, actionable content:

*"I've been driving for three years but never knew my actual profit. This workshop opened my eyes to where my money goes and how to keep more of it."* - James, Uber driver

*"The session on emergency funds was eye-opening. I'm starting a weekly savings plan so I'm not forced to take expensive loans when my car breaks down."* - Faith, Bolt driver

*"Learning about tax compliance removed a lot of fear and confusion. I now understand my obligations and how to fulfill them properly."* - Samuel, vehicle owner

**Next Steps: Expanding the Training Program**

Building on the success of the Nakuru workshop, we're planning a series of capacity building sessions across Kenya:

- Mombasa: April 12-13, 2026
- Kisumu: May 10-11, 2026
- Eldoret: June 7-8, 2026
- Nairobi: Multiple sessions throughout Q2 and Q3 2026

We're also developing online training modules for members who cannot attend in-person workshops, covering the same content through video lessons, downloadable resources, and virtual Q&A sessions.

**Investment in Member Success**

These training programs represent a significant investment in member success. Workshop costs, including venue, facilitators, materials, and refreshments, are heavily subsidized by the association, with members paying only a nominal registration fee that covers lunch and certificates.

We believe that empowered, financially literate members build stronger businesses, achieve better economic outcomes, and contribute to a more professional, sustainable transport sector. When our members thrive, our entire industry benefits.

Registration for upcoming workshops will be announced through our SMS alerts, WhatsApp groups, and website. We encourage all members to take advantage of these valuable capacity building opportunities—your future self will thank you!`
    },
    {
      id: 6,
      title: 'Electric Vehicle Pilot Program Launched in Nairobi',
      category: 'Innovation',
      date: 'February 15, 2026',
      excerpt: 'Ehailers partners with leading EV provider to offer members access to electric vehicles with favorable financing terms.',
      image: electricVehicleImage,
      content: `In an exciting development that positions Ehailers at the forefront of sustainable transport innovation, we've launched a groundbreaking Electric Vehicle (EV) Pilot Program in partnership with BasiGo and Roam Electric, two of Kenya's leading electric mobility companies. This initiative offers 100 selected members the opportunity to transition to electric vehicles with attractive financing packages, comprehensive charging infrastructure access, and ongoing technical support.

**Why Electric Vehicles Matter for Transport Operators**

The economics of transport operations are heavily influenced by fuel costs, which can consume 35-45% of gross earnings for most drivers. With fossil fuel prices subject to monthly fluctuations and long-term upward trends, fuel expenses create significant financial uncertainty and reduce take-home income.

Electric vehicles offer a compelling alternative:

- **Dramatic Operating Cost Reduction**: Electricity costs approximately KES 20 per kilometer compared to KES 12-15 per kilometer for petrol or diesel vehicles. For operators covering 200-300 kilometers daily, this translates to savings of KES 800-1,200 per day, or KES 24,000-36,000 monthly.

- **Lower Maintenance Requirements**: EVs have fewer moving parts, no oil changes, simpler brake systems, and reduced wear components, cutting maintenance costs by 40-60% compared to internal combustion vehicles.

- **Environmental Benefits**: Zero tailpipe emissions contribute to cleaner air in Nairobi and other cities, supporting Kenya's climate commitments and potentially qualifying operators for carbon credit programs.

- **Quieter, Smoother Operation**: Electric motors provide smooth acceleration and quiet operation, improving passenger comfort and driver experience.

**The Pilot Program Structure**

**Phase One: 100 Vehicles in Nairobi**

The initial rollout focuses on Nairobi, where charging infrastructure is most developed and daily route patterns are well-established. We're offering two vehicle options:

1. **Roam Rapid**: A compact sedan ideal for ride-hailing, with 360km range on a full charge, perfect for urban operations.

2. **BasiGo Electric Bus**: For operators interested in transitioning to passenger bus services on established routes, these 25-seat buses offer exceptional operating economics on fixed routes.

**Favorable Financing Terms**

Through negotiations with our partners and financial institutions, we've secured financing terms that make EV adoption financially viable:

- **Low Down Payment**: Only 10% down payment required (compared to 20-30% for conventional vehicle loans)
- **Extended Repayment Period**: Up to 5 years to spread costs and keep monthly payments manageable
- **Competitive Interest Rates**: Rates 2-3% below market averages for conventional vehicle financing
- **Deferred First Payment**: First payment due 60 days after vehicle handover, allowing operators to build up earnings before loan payments begin
- **Buy-back Guarantee**: Partners guarantee to buy back vehicles after 3 years at predetermined residual values, providing exit flexibility

**Charging Infrastructure and Support**

A major concern for potential EV adopters is charging infrastructure. Our pilot program addresses this through:

- **Dedicated Charging Stations**: Access to a network of 25 fast-charging stations across Nairobi (CBD, Westlands, Eastlands, along Mombasa Road, Thika Road, and Ngong Road)
- **Overnight Charging Options**: Partnerships with residential estates and parking facilities providing overnight slow-charging at discounted rates
- **Mobile Charging Support**: Emergency mobile charging units for rare situations where vehicles run low on charge away from stations
- **Charging Cost Pass**: Subsidized charging rates through bulk purchasing agreements with electricity providers

**Comprehensive Training and Technical Support**

All pilot program participants will receive:

- Two-day intensive training on EV operation, charging procedures, battery care, and range optimization
- 24/7 technical support hotline for troubleshooting
- Regular vehicle health check-ups and software updates
- Access to Exclusive EV operator community for knowledge sharing and peer support
- Insurance packages specifically designed for electric vehicles

**Selection Process and Criteria**

Given the limited initial allocation of 100 vehicles, we've established a fair selection process:

**Priority given to:**
- Active Ehailers members in good standing for at least 6 months
- Operators with established track records (minimum 1 year operating experience)
- Applicants demonstrating financial capacity to meet loan obligations
- Commitment to operating primarily within Nairobi where charging infrastructure exists
- Willingness to participate in program monitoring and provide feedback

Applications opened on February 15, 2026, and will remain open for 30 days. Selected participants will be notified by March 30, with vehicle deliveries beginning in April 2026.

**Data Collection and Learning**

This pilot program is designed to generate valuable data and insights:

- Real-world operating costs and savings compared to conventional vehicles
- Charging patterns and infrastructure utilization
- Range adequacy for typical ride-hailing operations
- Maintenance requirements and reliability metrics
- Driver and passenger satisfaction levels
- Financial viability and loan repayment performance

This data will inform future expansion of the program and help make the case for broader EV adoption across Kenya's transport sector.

**Long-term Vision: Greening Kenya's Transport Fleet**

This pilot program is just the beginning. Our vision is to position Ehailers members at the forefront of Kenya's electric mobility transition. As charging infrastructure expands and vehicle costs decrease, we aim to:

- Expand the program to other major cities (Mombasa, Kisumu, Nakuru, Eldoret)
- Negotiate even better financing terms as volumes increase
- Advocate for government incentives (tax breaks, grants) for electric transport operators
- Develop expertise in EV fleet management
- Create opportunities for members to participate in carbon credit programs

**Environmental and Economic Impact**

If all 100 pilot program vehicles successfully transition to electric operation, the collective impact would be:

- Annual CO2 emissions reduction: Approximately 1,200 tonnes
- Cumulative annual fuel cost savings for participants: Over KES 36 million
- Job creation in EV maintenance and charging infrastructure operation
- Demonstration effect encouraging broader EV adoption

**How to Apply**

Interested members can apply through:
1. Our website's dedicated EV Pilot Program portal
2. Visiting our Nairobi office for in-person application assistance
3. Calling our hotline: 0721 217 577 for application forms and guidance

The application requires:
- Proof of Ehailers membership
- Operating history documentation (platform earnings statements, tax compliance certificates)
- Financial information for credit assessment
- Personal identification documents

**A New Chapter in Transport Innovation**

This EV pilot program represents our commitment to not just advocating for better conditions today, but actively shaping a more sustainable, economically viable future for transport operators. By embracing innovation and positioning our members to benefit from technological transitions, we're ensuring that Ehailers remains at the cutting edge of Kenya's mobility revolution.

We're excited to support our pioneering members who will be among the first commercial transport operators in Kenya to go electric. Their experiences will pave the way for thousands more to follow, creating a cleaner, more profitable future for all.`
    }
  ];

  const categories = ['All', 'Policy', 'Events', 'Partnerships', 'Advocacy', 'Training', 'Innovation'];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={memberMeetingImage}
            alt="News"
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
            <h1 className="text-4xl md:text-6xl mb-4">News & Updates</h1>
            <p className="text-xl opacity-90">Stay informed about our latest activities and achievements</p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 rounded-full transition-all hover:scale-105"
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--navy-blue)' : 'var(--light-mist)',
                  color: selectedCategory === category ? 'white' : 'var(--graphite-black)'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-8" style={{ color: 'var(--navy-blue)' }}>
              Featured Story
            </h2>

            {newsItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden lg:flex">
                <div className="lg:w-1/2 h-96 lg:h-auto">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span 
                      className="px-4 py-1 rounded-full text-sm text-white"
                      style={{ backgroundColor: 'var(--red-cta)' }}
                    >
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2" style={{ color: 'var(--graphite-black)' }}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl mb-4" style={{ color: 'var(--navy-blue)' }}>
                    {item.title}
                  </h3>
                  
                  <p className="text-lg mb-6" style={{ color: 'var(--graphite-black)' }}>
                    {item.excerpt}
                  </p>
                  
                  <button 
                    className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full transition-all hover:scale-105 w-fit"
                    style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
                    onClick={() => setSelectedStory(item.id)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-8" style={{ color: 'var(--navy-blue)' }}>
              Recent Updates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => !item.featured && (selectedCategory === 'All' || item.category === selectedCategory)).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="px-3 py-1 rounded-full text-xs text-white"
                        style={{ backgroundColor: 'var(--gold-highlight)' }}
                      >
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--graphite-black)' }}>
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl mb-3" style={{ color: 'var(--navy-blue)' }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-sm mb-4" style={{ color: 'var(--graphite-black)' }}>
                      {item.excerpt}
                    </p>
                    
                    <button 
                      className="inline-flex items-center gap-2 transition-all group-hover:gap-3"
                      style={{ color: 'var(--red-cta)' }}
                      onClick={() => setSelectedStory(item.id)}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-mist)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--navy-blue)' }}>
              Stay Updated
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--graphite-black)' }}>
              Subscribe to our newsletter for the latest news, events, and updates
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full border-2 focus:outline-none"
                style={{ borderColor: 'var(--navy-blue)', color: 'var(--graphite-black)' }}
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full text-white transition-all hover:scale-105 whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ color: 'var(--navy-blue)' }}>
              Upcoming Events
            </h2>
            <div className="w-24 h-1 mx-auto mb-12" style={{ background: 'linear-gradient(90deg, var(--gold-highlight), var(--red-cta))' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Annual General Meeting', date: 'April 15, 2026', location: 'Nairobi' },
                { title: 'Regional Workshop - Mombasa', date: 'April 22, 2026', location: 'Mombasa' },
                { title: 'Policy Dialogue Session', date: 'May 5, 2026', location: 'Virtual' }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                  style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
                >
                  <div className="text-white">
                    <h3 className="text-xl mb-3">{event.title}</h3>
                    <div className="flex items-center gap-2 mb-2 opacity-90">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-90">
                      <Tag className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={() => setSelectedStory(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sticky top-4 right-4 float-right text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg z-10"
              onClick={() => setSelectedStory(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 md:p-12">
              {(() => {
                const story = newsItems.find(item => item.id === selectedStory);
                if (!story) return null;
                
                return (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <span 
                        className="px-4 py-1 rounded-full text-sm text-white"
                        style={{ backgroundColor: 'var(--gold-highlight)' }}
                      >
                        {story.category}
                      </span>
                      <div className="flex items-center gap-2" style={{ color: 'var(--graphite-black)' }}>
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{story.date}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--navy-blue)' }}>
                      {story.title}
                    </h2>

                    <div className="mb-8 rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <div 
                      className="prose prose-lg max-w-none"
                      style={{ color: 'var(--graphite-black)' }}
                    >
                      {story.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed whitespace-pre-wrap">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <button
                        className="px-8 py-3 rounded-full text-white transition-all hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
                        onClick={() => setSelectedStory(null)}
                      >
                        Close
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}