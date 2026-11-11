import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import {
  Eye,
  Target,
  CheckCircle2,
  Compass,
  Award,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  Users,
  Globe2,
  Building2,
  MapPin,
  ArrowRight,
  Sparkles,
  Landmark,
} from 'lucide-react';

export const metadata = {
  title: 'About Us | SME Growth Circle Foundation',
  description:
    'Learn about SME Growth Circle Foundation, our story, vision, mission, objectives, core values, commitment to MSMEs, and our transformative impact on Andhra Pradesh MSMEs.',
};

const objectives = [
  {
    title: 'Enhance Business Visibility',
    description:
      'Give every registered micro, small, and medium enterprise a structured city-wise digital footprint so buyers can find them easily.',
    icon: Eye,
    color: 'navy',
  },
  {
    title: 'Expand Market Access',
    description:
      'Connect local producers, agro-processors, and traders with inter-district, inter-state, and institutional procurement channels.',
    icon: Globe2,
    color: 'green',
  },
  {
    title: 'Strengthen Peer Collaboration',
    description:
      'Foster city-level business chapters where MSME owners exchange referrals, joint-venture opportunities, and supply chain intelligence.',
    icon: Users,
    color: 'orange',
  },
  {
    title: 'Bridge Policy & Enterprise',
    description:
      'Facilitate awareness and access to central and state MSME schemes, industrial subsidies, credit linkages, and Udyam benefits.',
    icon: Landmark,
    color: 'blue',
  },
  {
    title: 'Promote Skill & Capacity Building',
    description:
      'Organize practical training programs on digital adoption, quality certification, financial management, and modern packaging.',
    icon: Award,
    color: 'green',
  },
  {
    title: 'Champion Inclusive Entrepreneurship',
    description:
      'Create dedicated growth pathways for women entrepreneurs, first-generation founders, rural artisans, and emerging startups.',
    icon: Sparkles,
    color: 'orange',
  },
];

const coreValues = [
  {
    title: 'Integrity & Trust',
    description:
      'Maintaining verified, transparent, and ethical business interactions across our entire member directory and marketplace.',
  },
  {
    title: 'Collaborative Growth',
    description:
      'Believing that when MSMEs share knowledge, circles, and opportunities, the entire regional economy rises together.',
  },
  {
    title: 'Inclusivity',
    description:
      'Supporting enterprises of every size—from small workshops and women-led units to established industrial manufacturers.',
  },
  {
    title: 'Innovation & Digital Readiness',
    description:
      'Equipping traditional businesses with accessible modern tools to compete effectively in a rapidly evolving digital economy.',
  },
];

const apImpactZones = [
  {
    region: 'Coastal & Port Industrial Corridor',
    cities: 'Visakhapatnam, Kakinada, Rajamahendravaram, Vijayawada, Guntur, Nellore',
    focus:
      'Marine & agro-processing, engineering fabrication, textiles, pharmaceutical ancillaries, wholesale trade, and logistics.',
  },
  {
    region: 'Rayalaseema Industrial & Agro Belt',
    cities: 'Tirupati, Kurnool, Anantapur, Kadapa, Chittoor, Nandyal',
    focus:
      'Electronics manufacturing, automobile components, food & fruit processing, mineral enterprises, and handloom clusters.',
  },
  {
    region: 'North Andhra & Emerging Towns',
    cities: 'Vizianagaram, Srikakulam, Eluru, Ongole, Machilipatnam, Bhimavaram',
    focus:
      'Cashew & jute industries, aquaculture supplies, handicraft exports, retail distribution, and women-led MSME units.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="About Us"
        title="Empowering India's MSME Backbone Through Visibility, Circle & Market Access"
        description="Discover how SME Growth Circle Foundation is transforming local businesses into thriving regional and national enterprises."
      />

      {/* 1. ABOUT SME GROWTH CIRCLE */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-grid">
            <div className="image-frame about-image-frame">
              <img
                src="/about-meeting.jpg"
                alt="SME Growth Circle Foundation Leadership and Members"
              />
              <div className="image-caption-ribbon">
                <Building2 size={20} color="#F4B51B" />
                <span>SME Growth Circle Foundation — Uniting Enterprises for Shared Prosperity</span>
              </div>
            </div>

            <div>
              <span className="section-badge">About SME Growth Circle</span>
              <h2 className="section-title">
                A Dedicated Growth Ecosystem by{' '}
                <span className="text-green">SME Growth Circle Foundation</span>
              </h2>
              <p style={{ marginBottom: '16px', fontSize: '1.02rem' }}>
                <strong>SME Growth Circle</strong> is a comprehensive MSME Business Growth Platform
                established under the <strong>SME Growth Circle Foundation</strong>. Our platform is
                purpose-built to help Indian Micro, Small, and Medium Enterprises overcome their biggest
                growth hurdle: limited visibility and market reach beyond their immediate locality.
              </p>
              <p style={{ marginBottom: '20px', fontSize: '0.98rem' }}>
                By integrating a structured city-wise business directory, a B2B/B2C digital marketplace,
                buyer-seller matchmaking, industry conclaves, and institutional support guidance, we
                empower Manufacturers, Traders, Distributors, Retail Businesses, Service Providers,
                Startups, Professionals, and Women Entrepreneurs to grow sustainably.
              </p>
              <div className="feature-checklist">
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Foundation-Backed Credibility</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>City-by-City Chapter Circle</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Direct Buyer-Supplier Linkages</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Multi-Industry Representation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="split-grid">
            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                alt="Indian Manufacturing and Small Industry Story"
              />
              <div className="image-caption-ribbon">
                <TrendingUp size={20} color="#F4B51B" />
                <span>From Local Shops &amp; Workshops to State-Wide &amp; National Markets</span>
              </div>
            </div>

            <div>
              <span className="section-badge orange">Our Story</span>
              <h2 className="section-title">
                Born From the Real Challenges of{' '}
                <span className="text-blue">Grassroot Entrepreneurs</span>
              </h2>
              <p style={{ marginBottom: '16px', fontSize: '1rem' }}>
                Across India&apos;s vibrant commercial towns and industrial estates, thousands of
                hardworking MSME owners produce world-class goods and deliver dependable services. Yet,
                most remain confined to serving customers within a few kilometers of their shop, office,
                or factory.
              </p>
              <p style={{ marginBottom: '16px', fontSize: '1rem' }}>
                <strong>SME Growth Circle Foundation</strong> recognized that while large corporations
                have dedicated marketing engines and national distribution circles, MSMEs lacked an
                affordable, unified, city-wise platform where they could showcase their strengths, find
                verified trade partners, and access institutional support.
              </p>
              <p style={{ fontSize: '1rem' }}>
                What began as a mission to connect local business owners through structured circle connect
                and buyer-seller dialogues has evolved into <strong>SME Growth Circle</strong>—a
                holistic phygital (physical + digital) platform helping enterprises grow beyond their
                shop, office, and city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. OUR VISION & OUR MISSION */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">Guiding Principles</span>
            <h2 className="section-title">
              Our <span className="text-blue">Vision</span> &amp;{' '}
              <span className="text-green">Mission</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
          </div>

          <div className="grid-2">
            <div className="vm-card vision">
              <div className="card-icon blue">
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Our Vision</h3>
              <p style={{ fontSize: '1.02rem', marginBottom: '16px' }}>
                To establish India&apos;s premier city-wise MSME business visibility and growth
                ecosystem—where every micro, small, and medium enterprise, regardless of location, can
                effortlessly connect with national buyers, trusted suppliers, and growth opportunities.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>100% Digital Discoverability for Local Enterprises</span>
                </li>
                <li className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Seamless Inter-City &amp; Inter-State Trade Corridor</span>
                </li>
              </ul>
            </div>

            <div className="vm-card mission">
              <div className="card-icon green">
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Our Mission</h3>
              <p style={{ fontSize: '1.02rem', marginBottom: '16px' }}>
                To empower MSMEs through our 5 Pillars of Growth—Visibility, Market Access, Business
                Growth, Business Circle, and Digital Platform—supported by continuous learning,
                government scheme awareness, and high-impact industry conclaves.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Structured Buyer-Seller Connect &amp; B2B Matchmaking</span>
                </li>
                <li className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Capacity Building for Women, Startups &amp; Small Industries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR OBJECTIVES */}
      <section className="section bg-light-green">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">Strategic Goals</span>
            <h2 className="section-title">
              Our Core <span className="text-green">Objectives</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Focused, measurable objectives designed to create tangible commercial value for our member
              enterprises.
            </p>
          </div>

          <div className="grid-3">
            {objectives.map((obj) => {
              const IconComponent = obj.icon;
              return (
                <div key={obj.title} className="card">
                  <div className={`card-icon ${obj.color}`}>
                    <IconComponent size={26} />
                  </div>
                  <h3>{obj.title}</h3>
                  <p>{obj.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR CORE VALUES */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Foundation Ethos</span>
            <h2 className="section-title">
              Our <span className="text-orange">Core Values</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              The principles that guide every partnership, directory listing, and industry initiative at
              SME Growth Circle Foundation.
            </p>
          </div>

          <div className="grid-4">
            {coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="card"
                style={{ borderTop: `4px solid ${idx % 2 === 0 ? '#0B2D55' : '#168A45'}` }}
              >
                <div className="card-icon navy">
                  <ShieldCheck size={24} />
                </div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR COMMITMENT TO MSMES */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-badge">Our Pledge</span>
              <h2 className="section-title">
                Our Unwavering <span className="text-green">Commitment to MSMEs</span>
              </h2>
              <p style={{ marginBottom: '16px', fontSize: '1rem' }}>
                At SME Growth Circle Foundation, we view MSMEs not merely as businesses, but as the
                primary engine of employment, innovation, and regional prosperity. We are committed to
                walking alongside entrepreneurs at every stage of their journey.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>
                <div className="checklist-item">
                  <HeartHandshake size={20} className="checklist-icon" />
                  <span>
                    <strong>Continuous Handholding:</strong> Helping traditional enterprises adopt
                    digital cataloging and modern B2B outreach.
                  </span>
                </div>
                <div className="checklist-item">
                  <Compass size={20} className="checklist-icon" />
                  <span>
                    <strong>Fair Market Discovery:</strong> Giving micro and small units equal spotlight
                    alongside larger enterprises.
                  </span>
                </div>
                <div className="checklist-item">
                  <Award size={20} className="checklist-icon" />
                  <span>
                    <strong>Institutional Representation:</strong> Voicing MSME priorities in industry
                    dialogues, banking forums, and policy workshops.
                  </span>
                </div>
              </div>
              <Link href="/membership" className="btn btn-green">
                Join Our MSME Community
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                alt="Commitment to Indian MSMEs"
              />
              <div className="image-caption-ribbon">
                <HeartHandshake size={20} color="#F4B51B" />
                <span>Dedicated Support for Every Manufacturer, Trader &amp; Entrepreneur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR IMPACT ON ANDHRA PRADESH MSMES */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge orange">Regional Transformation</span>
            <h2 className="section-title">
              Our Impact on <span className="text-green">Andhra Pradesh MSMEs</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Strengthening industrial corridors, district trade hubs, agro-processing clusters, and
              emerging entrepreneurs across all districts of Andhra Pradesh.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '36px' }}>
            {apImpactZones.map((zone) => (
              <div
                key={zone.region}
                className="card"
                style={{ borderTop: '4px solid #F47721', backgroundColor: '#F7FAFC' }}
              >
                <div className="card-icon orange">
                  <MapPin size={26} />
                </div>
                <h3>{zone.region}</h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#075A96',
                    marginBottom: '10px',
                    flexGrow: 0,
                  }}
                >
                  Key Hubs: {zone.cities}
                </p>
                <p>{zone.focus}</p>
              </div>
            ))}
          </div>

          <div className="cta-banner">
            <div>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#F47721',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                MADE IN ANDHRASME.IN &bull; CONNECT &bull; EMPOWER &bull; GROW
              </span>
              <h2>Let&apos;s Take Andhra to the World Together</h2>
              <p>
                Join Made in AndhraSME.in by SME Growth Circle Foundation—connect with district
                chapters, showcase your products &amp; services globally, and grow from local to global.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/made-in-andhra-sme" className="btn btn-orange">
                Explore Made in AndhraSME.in
                <ArrowRight size={18} />
              </Link>
              <Link href="/membership" className="btn btn-outline-white">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

