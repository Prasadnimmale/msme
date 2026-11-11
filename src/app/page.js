import React from 'react';
import Link from 'next/link';
import MadeInAndhraShowcase from '@/components/MadeInAndhraShowcase';
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Globe2,
  TrendingUp,
  Users,
  Laptop,
  BookOpen,
  ShoppingBag,
  Handshake,
  Network,
  GraduationCap,
  Landmark,
  CalendarCheck,
  UserPlus,
  Link2,
  Award,
  Compass,
  Factory,
  Truck,
  Store,
  Briefcase,
  Rocket,
  UserCheck,
  Sparkles,
  Wrench,
  Target,
  ShieldCheck,
  Building2,
  MapPin,
} from 'lucide-react';

const fivePillars = [
  {
    number: '01',
    title: 'Visibility',
    description:
      'Establish a verified digital presence that puts your MSME products, capabilities, and brand in front of regional and national buyers.',
    icon: Eye,
  },
  {
    number: '02',
    title: 'Market Access',
    description:
      'Break geographical barriers and expand your customer base beyond your local shop, office, district, and city into thriving new markets.',
    icon: Globe2,
  },
  {
    number: '03',
    title: 'Business Growth',
    description:
      'Unlock consistent B2B and B2C enquiries, distributor partnerships, and bulk procurement opportunities tailored to your industry.',
    icon: TrendingUp,
  },
  {
    number: '04',
    title: 'Business Network',
    description:
      'Build trusted relationships with fellow manufacturers, wholesale traders, industry associations, mentors, and supply chain partners.',
    icon: Users,
  },
  {
    number: '05',
    title: 'Digital Platform',
    description:
      'Leverage an integrated, easy-to-use digital ecosystem uniting city-wise business directories, product showcases, and trade connect tools.',
    icon: Laptop,
  },
];

const whyChooseReasons = [
  {
    title: 'City-Wise Structured Ecosystem',
    description:
      'Organized district-by-district and city-by-city so buyers can effortlessly discover reliable local and regional MSME suppliers.',
    icon: MapPin,
    color: 'navy',
  },
  {
    title: 'Direct Buyer-Seller Connect',
    description:
      'Transparent, direct trade linkages connecting manufacturers, distributors, retailers, and institutional buyers without friction.',
    icon: Handshake,
    color: 'green',
  },
  {
    title: 'Multi-Sector Industry Coverage',
    description:
      'Spanning manufacturing, agriculture, food processing, textiles, engineering machinery, chemicals, retail, and professional services.',
    icon: Factory,
    color: 'orange',
  },
  {
    title: 'Credible Foundation Backing',
    description:
      'Driven by SME Growth Circle Foundation with a mission-first focus on empowering grassroot entrepreneurs and small industries.',
    icon: ShieldCheck,
    color: 'blue',
  },
  {
    title: 'Actionable Knowledge & Schemes',
    description:
      'Stay informed on MSME government schemes, Udyam initiatives, credit support, export readiness, and digital transformation.',
    icon: Landmark,
    color: 'green',
  },
  {
    title: 'High-Impact Offline & Online Events',
    description:
      'Regular business conclaves, vendor development programmes, exhibitions, and city networking meets to accelerate real business deals.',
    icon: CalendarCheck,
    color: 'orange',
  },
];

const homeSolutions = [
  {
    title: 'Made in AndhraSME.in Portal',
    description:
      'Our flagship digital platform for MSMEs to showcase Andhra products to the world, discover buyers & suppliers, and post trade requirements from any device.',
    icon: Globe2,
    color: 'green',
    href: '/made-in-andhra-sme',
  },
  {
    title: 'Business Directory',
    description:
      'Comprehensive city-wise and category-wise verified directory giving every MSME a structured digital profile and searchable catalog.',
    icon: BookOpen,
    color: 'navy',
    href: '/solutions',
  },
  {
    title: 'Digital Marketplace',
    description:
      'Showcase your manufactured goods, wholesale supplies, and specialized services to buyers actively sourcing across India.',
    icon: ShoppingBag,
    color: 'green',
    href: '/marketplace',
  },
  {
    title: 'Buyer-Seller Connect',
    description:
      'Targeted B2B matchmaking connecting raw material suppliers, OEMs, wholesale distributors, and institutional procurement teams.',
    icon: Handshake,
    color: 'orange',
    href: '/solutions',
  },
  {
    title: 'Business Networking',
    description:
      'Collaborate with city chapters, industry peers, channel partners, and business leaders to build lasting commercial alliances.',
    icon: Network,
    color: 'blue',
    href: '/membership',
  },
  {
    title: 'Learning & Business Support',
    description:
      'Practical workshops, mentorship programs, financial literacy, branding guidance, and operational excellence resources for SMEs.',
    icon: GraduationCap,
    color: 'green',
    href: '/solutions',
  },
  {
    title: 'Government & Institutional Support',
    description:
      'Awareness and facilitation support for central and state MSME policies, industrial incentives, subsidies, and banking linkages.',
    icon: Landmark,
    color: 'navy',
    href: '/solutions',
  },
  {
    title: 'Events & Industry Connect',
    description:
      'Participate in MSME trade expos, buyer-seller meets, industrial delegations, and sector-specific conclaves across key cities.',
    icon: CalendarCheck,
    color: 'orange',
    href: '/events',
  },
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Register',
    description:
      'Enroll your enterprise with SME Growth Circle and create your comprehensive business profile with products and services.',
    icon: UserPlus,
  },
  {
    step: '02',
    title: 'Connect',
    description:
      'Get matched with verified buyers, suppliers, distributors, and strategic partners across your city and state.',
    icon: Link2,
  },
  {
    step: '03',
    title: 'Participate',
    description:
      'Engage in buyer-seller meets, industry conclaves, trade exhibitions, and skill-building workshops.',
    icon: Award,
  },
  {
    step: '04',
    title: 'Discover',
    description:
      'Explore new geographic markets, government support schemes, institutional tenders, and supply chain opportunities.',
    icon: Compass,
  },
  {
    step: '05',
    title: 'Grow',
    description:
      'Scale your revenue, strengthen your brand visibility, and expand your enterprise sustainably across India.',
    icon: TrendingUp,
  },
];

const whoCanJoinList = [
  {
    title: 'Manufacturers',
    description:
      'Industrial producers, OEMs, agro-processors, and fabrication units looking for wider distribution and bulk buyers.',
    icon: Factory,
    image: '/manufacture.avif',
  },
  {
    title: 'Traders & Distributors',
    description:
      'Wholesale merchants, stockists, C&F agents, and supply chain aggregators expanding their product lines and territories.',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Retail Businesses',
    description:
      'Modern retail outlets, specialty stores, and commercial showrooms seeking direct manufacturer sourcing and visibility.',
    icon: Store,
    image: '/retail.webp',
  },
  {
    title: 'Service Providers',
    description:
      'IT agencies, logistics providers, packaging firms, legal/financial consultants, and B2B maintenance enterprises.',
    icon: Briefcase,
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Startups',
    description:
      'Emerging innovators and D2C/B2B ventures seeking early market traction, vendor networks, and industry mentorship.',
    icon: Rocket,
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Professionals',
    description:
      'Chartered accountants, industrial engineers, quality auditors, export advisors, and business growth consultants.',
    icon: UserCheck,
    image: '/professionals.jpg',
  },
  {
    title: 'Women Entrepreneurs',
    description:
      'Women-led enterprises, self-help manufacturing groups, boutique brands, and commercial ventures scaling nationwide.',
    icon: Sparkles,
    image: '/women-entrepreneurs.jpg',
  },
  {
    title: 'Small Industries',
    description:
      'Micro and small-scale workshops, ancillary units, handloom clusters, and cottage industries ready for digital growth.',
    icon: Wrench,
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-decor-circle-1" />
        <div className="hero-decor-circle-2" />
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span className="dot" />
                SME Growth Circle Foundation Initiative
              </div>
              <h1 className="hero-title">
                Grow Your Business Beyond Your{' '}
                <span className="highlight-green">Shop, Office</span> &amp;{' '}
                <span className="highlight-orange">City.</span>
              </h1>
              <p className="hero-subtitle">
                India&apos;s City-Wise MSME Business Visibility &amp; Growth Platform.
              </p>
              <p className="hero-description">
                Connect with verified buyers, reliable suppliers, and strategic business partners across
                India. SME Growth Circle empowers Manufacturers, Traders, Distributors, Retailers, and
                Service Providers to discover new markets and scale with confidence.
              </p>

              <div className="hero-cta-group">
                <Link href="/membership" className="btn btn-green">
                  Join Now
                  <ArrowRight size={18} />
                </Link>
                <Link href="/solutions" className="btn btn-outline-navy">
                  Explore More
                </Link>
              </div>

              <div className="hero-metrics">
                <div className="hero-metric-item">
                  <div className="hero-metric-icon">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <div className="hero-metric-value">5 Pillars</div>
                    <div className="hero-metric-label">Structured Growth Model</div>
                  </div>
                </div>
                <div className="hero-metric-item">
                  <div className="hero-metric-icon">
                    <Users size={22} />
                  </div>
                  <div>
                    <div className="hero-metric-value">8+ Sectors</div>
                    <div className="hero-metric-label">MSME Categories</div>
                  </div>
                </div>
                <div className="hero-metric-item">
                  <div className="hero-metric-icon">
                    <Globe2 size={22} />
                  </div>
                  <div>
                    <div className="hero-metric-value">City-Wise</div>
                    <div className="hero-metric-label">Pan-India Trade Network</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-logo-stage">
                <div className="hero-logo-glow" />
                <div className="hero-orbit-ring-outer">
                  <span className="orbit-dot dot-green" />
                  <span className="orbit-dot dot-orange" />
                  <span className="orbit-dot dot-navy" />
                </div>
                <div className="hero-orbit-ring-inner" />
                <div className="hero-logo-pulse" />

                <div className="hero-logo-medallion">
                  <img
                    src="/logo.jpg"
                    alt="SME Growth Circle Foundation Official Logo"
                    className="hero-animated-logo"
                  />
                </div>

                <div className="hero-float-badge hero-float-top">
                  <div className="float-icon green">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <strong
                      style={{
                        display: 'block',
                        color: '#0B2D55',
                        fontSize: '0.78rem',
                        lineHeight: 1.2,
                      }}
                    >
                      360&deg; Business Visibility
                    </strong>
                    <span style={{ fontSize: '0.68rem', color: '#4A5E78', lineHeight: 1.2 }}>
                      Verified Digital MSME Profiles
                    </span>
                  </div>
                </div>

                <div className="hero-float-badge hero-float-bottom">
                  <div className="float-icon orange">
                    <Handshake size={16} />
                  </div>
                  <div>
                    <strong
                      style={{
                        display: 'block',
                        color: '#0B2D55',
                        fontSize: '0.78rem',
                        lineHeight: 1.2,
                      }}
                    >
                      Buyer-Seller Connect
                    </strong>
                    <span style={{ fontSize: '0.68rem', color: '#4A5E78', lineHeight: 1.2 }}>
                      Direct B2B &amp; Wholesale Trade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 FLAGSHIP DIGITAL PLATFORM: MADE IN ANDHRASME.IN */}
      <MadeInAndhraShowcase />

      {/* 2. ABOUT SME GROWTH CIRCLE INTRODUCTION */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-grid">
            <div className="image-frame about-image-frame">
              <img
                src="/about-meeting.jpg"
                alt="About SME Growth Circle Foundation"
              />
              <div className="image-caption-ribbon">
                <ShieldCheck size={20} color="#F4B51B" />
                <span>Empowering Micro, Small &amp; Medium Enterprises Across Every City</span>
              </div>
            </div>

            <div>
              <span className="section-badge">About SME Growth Circle</span>
              <h2 className="section-title">
                Building a Stronger, Connected &amp; Self-Reliant{' '}
                <span className="text-green">MSME Ecosystem</span>
              </h2>
              <p style={{ marginBottom: '16px', fontSize: '1.02rem' }}>
                <strong>SME Growth Circle</strong>, an initiative of the{' '}
                <strong>SME Growth Circle Foundation</strong>, is a dedicated business growth and
                visibility platform designed specifically for Indian Micro, Small, and Medium
                Enterprises.
              </p>
              <p style={{ marginBottom: '20px', fontSize: '0.98rem' }}>
                Millions of capable manufacturers, traders, retailers, and service providers remain
                restricted to their immediate neighborhood due to limited digital visibility and
                fragmented trade networks. SME Growth Circle bridges this gap by uniting city-level
                business chambers, verified digital directories, B2B marketplaces, and on-ground trade
                events under one roof.
              </p>

              <div className="feature-checklist">
                <div className="checklist-item">
                  <CheckCircle2 size={19} className="checklist-icon" />
                  <span>City-Wise Verified Business Directory</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={19} className="checklist-icon" />
                  <span>Direct Buyer &amp; Supplier Discovery</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={19} className="checklist-icon" />
                  <span>Multi-District Trade Networking</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={19} className="checklist-icon" />
                  <span>Government Scheme Guidance</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={19} className="checklist-icon" />
                  <span>Women &amp; Startup Entrepreneurship</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={19} className="checklist-icon" />
                  <span>Conclaves, Expos &amp; B2B Meets</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-navy">
                  Read Our Full Story
                  <ArrowRight size={17} />
                </Link>
                <Link href="/membership" className="btn btn-green">
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SME GROWTH CIRCLE? */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="section-header">
            <span className="section-badge orange">Why Choose Us</span>
            <h2 className="section-title">
              Why Choose <span className="text-green">SME Growth Circle?</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              We combine digital discovery with high-trust business networking to deliver measurable
              commercial growth for small and medium businesses.
            </p>
          </div>

          <div className="grid-3">
            {whyChooseReasons.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="card">
                  <div className={`card-icon ${item.color}`}>
                    <IconComponent size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR 5 PILLARS OF GROWTH */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">Foundation Framework</span>
            <h2 className="section-title">
              Our <span className="text-orange">5 Pillars</span> of Growth
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Every initiative at SME Growth Circle is anchored on five strategic pillars designed to
              transform local businesses into competitive regional and national enterprises.
            </p>
          </div>

          <div className="grid-5">
            {fivePillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.title} className="pillar-card">
                  <span className="pillar-number">{pillar.number}</span>
                  <div className="pillar-icon-wrap">
                    <IconComponent size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{pillar.title}</h3>
                  <p style={{ fontSize: '0.9rem' }}>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR SOLUTIONS */}
      <section className="section bg-light-green">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">Comprehensive Platform</span>
            <h2 className="section-title">
              Our <span className="text-green">Solutions</span> for MSMEs
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Explore our end-to-end suite of digital and on-ground solutions tailored to help your
              business connect, promote, and scale.
            </p>
          </div>

          <div className="grid-3">
            {homeSolutions.map((sol) => {
              const IconComponent = sol.icon;
              return (
                <div key={sol.title} className="card">
                  <div className={`card-icon ${sol.color}`}>
                    <IconComponent size={26} />
                  </div>
                  <h3>{sol.title}</h3>
                  <p style={{ marginBottom: '18px' }}>{sol.description}</p>
                  <Link
                    href={sol.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontWeight: 600,
                      color: '#168A45',
                      fontSize: '0.92rem',
                      marginTop: 'auto',
                    }}
                  >
                    Explore Solution <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/solutions" className="btn btn-navy">
              View All Solutions in Detail
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Simple 5-Step Journey</span>
            <h2 className="section-title">
              How <span className="text-blue">SME Growth Circle</span> Works
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              A streamlined onboarding and engagement pathway from registration to sustainable business
              expansion.
            </p>
          </div>

          <div className="steps-container">
            {howItWorksSteps.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="step-card">
                  <div className="step-badge">{item.step}</div>
                  <div className="step-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem' }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHO CAN JOIN? */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="section-header">
            <span className="section-badge orange">Inclusive MSME Network</span>
            <h2 className="section-title">
              Who Can <span className="text-green">Join?</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              SME Growth Circle welcomes businesses of every scale across production, distribution,
              retail, and professional services.
            </p>
          </div>

          <div className="grid-4">
            {whoCanJoinList.map((member) => {
              const IconComponent = member.icon;
              return (
                <div key={member.title} className="member-type-card">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="member-type-img"
                    loading="lazy"
                  />
                  <div className="member-type-body">
                    <div className="member-type-header">
                      <div className="member-type-icon">
                        <IconComponent size={20} />
                      </div>
                      <h3 style={{ fontSize: '1.08rem' }}>{member.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}>{member.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. OUR VISION AND MISSION */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">Purpose &amp; Direction</span>
            <h2 className="section-title">
              Our <span className="text-blue">Vision</span> &amp;{' '}
              <span className="text-green">Mission</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Guided by the SME Growth Circle Foundation to create lasting economic impact for Indian
              entrepreneurs.
            </p>
          </div>

          <div className="grid-2">
            <div className="vm-card vision">
              <div className="card-icon blue">
                <Eye size={28} />
              </div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#075A96',
                }}
              >
                Our Vision
              </span>
              <h3 style={{ fontSize: '1.45rem', margin: '8px 0 14px' }}>
                Empowering Every Indian MSME to Thrive Without Boundaries
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '18px' }}>
                To build India&apos;s most trusted, inclusive, and vibrant city-wise MSME business
                ecosystem where every manufacturer, trader, service provider, and entrepreneur enjoys
                equal digital visibility, seamless market access, and sustainable commercial growth.
              </p>
              <div className="checklist-item">
                <CheckCircle2 size={18} className="checklist-icon" />
                <span>Pan-India Digital Visibility for Grassroot Enterprises</span>
              </div>
            </div>

            <div className="vm-card mission">
              <div className="card-icon green">
                <Target size={28} />
              </div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#168A45',
                }}
              >
                Our Mission
              </span>
              <h3 style={{ fontSize: '1.45rem', margin: '8px 0 14px' }}>
                Connecting Buyers, Suppliers &amp; Institutions for Accelerated Growth
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '18px' }}>
                To enable MSMEs across cities and industrial towns with structured directories, digital
                marketplaces, direct buyer-seller connect, capacity-building workshops, and institutional
                policy support that translate into real orders and long-term prosperity.
              </p>
              <div className="checklist-item">
                <CheckCircle2 size={18} className="checklist-icon" />
                <span>Actionable Networking, Trade Expos &amp; Skill Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. STRONG CTA SECTION */}
      <section className="section bg-light-green">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#F47721',
                  color: '#FFFFFF',
                  padding: '5px 14px',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '14px',
                  letterSpacing: '0.05em',
                }}
              >
                READY TO SCALE YOUR ENTERPRISE?
              </span>
              <h2>Join SME Growth Circle Today</h2>
              <p>
                Take your business beyond your shop, office, and city. Connect with thousands of
                verified MSME buyers, suppliers, and trade partners across India.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/membership" className="btn btn-orange">
                Register Your Business
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline-white">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
