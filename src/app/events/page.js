import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import {
  CalendarCheck,
  MapPin,
  Users,
  Handshake,
  Award,
  Presentation,
  Store,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Clock,
} from 'lucide-react';

export const metadata = {
  title: 'Events & Industry Connect | SME Growth Circle',
  description:
    'Explore SME Growth Circle Events: Business Conclaves, Exhibitions, Trade Shows, Buyer-Seller Meets, Circle Events, and Industry Interactions across India.',
};

const eventCategories = [
  {
    title: 'Business Conclaves',
    badge: 'Leadership & Policy',
    description:
      'High-impact regional and state-level MSME summits bringing together entrepreneurs, industrial policymakers, bankers, and ecosystem leaders to chart actionable growth roadmaps.',
    highlights: [
      'Keynote Sessions by Industry Stalwarts',
      'MSME Policy & Banking Panels',
      'Excellence Awards & Recognition',
    ],
    icon: Presentation,
    color: 'navy',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Exhibitions',
    badge: 'Product Showcase',
    description:
      'Multi-sector MSME product exhibitions featuring dedicated pavilions for manufacturing, agro-food processing, handlooms, engineering goods, and women-led enterprises.',
    highlights: [
      'Dedicated MSME Stall Pavilions',
      'Live Product & Machinery Demos',
      'High Footfall of Institutional Buyers',
    ],
    icon: Store,
    color: 'green',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Trade Shows',
    badge: 'B2B & Wholesale',
    description:
      'Sector-focused trade fairs designed to connect regional producers and OEMs with state-wide stockists, wholesale distributors, export houses, and retail chains.',
    highlights: [
      'Distributor & Franchisee Appointment',
      'New Product Launch Platforms',
      'Inter-State Trade Delegations',
    ],
    icon: Briefcase,
    color: 'orange',
    image:
      'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Buyer-Seller Meets',
    badge: 'Direct Matchmaking',
    description:
      'Structured, pre-scheduled table-top B2B meetings matching MSME suppliers directly with procurement heads from large industries, PSUs, hospitals, and retail groups.',
    highlights: [
      'Pre-Matched 1-on-1 Procurement Tables',
      'Vendor Registration Guidance',
      'Immediate RFQ & Order Discussions',
    ],
    icon: Handshake,
    color: 'blue',
    image:
      'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Circle Events',
    badge: 'City Chapters',
    description:
      'Regular city-level breakfast meets, business mixers, and chapter gatherings where local MSME founders build trust, exchange warm referrals, and form joint ventures.',
    highlights: [
      '60-Second Business Pitch Rounds',
      'Structured Referral & Lead Sharing',
      'Cross-Category Member Introductions',
    ],
    icon: Users,
    color: 'green',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Industry Interactions',
    badge: 'Institutional Connect',
    description:
      'Interactive roundtables with chambers of commerce, District Industries Centres (DIC), SIDBI/banking officials, export promotion councils, and technical institutes.',
    highlights: [
      'Direct Dialogue with Officials & Bankers',
      'Industrial Estate & Cluster Visits',
      'Technology & Quality Upgradation Clinics',
    ],
    icon: Award,
    color: 'orange',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
];

const upcomingCalendar = [
  {
    title: 'Andhra Pradesh MSME Growth Conclave & Buyer-Seller Meet',
    type: 'Business Conclave & B2B Meet',
    location: 'Vijayawada, Andhra Pradesh',
    schedule: 'Quarterly Flagship Edition',
    audience: 'Manufacturers, Distributors, Institutional Buyers & Bankers',
  },
  {
    title: 'Coastal Corridor Industrial & Agro-Food Trade Exhibition',
    type: 'Exhibition & Trade Show',
    location: 'Visakhapatnam, Andhra Pradesh',
    schedule: 'Regional Cluster Expo',
    audience: 'Engineering Units, Food Processors, Exporters & Retailers',
  },
  {
    title: 'Rayalaseema MSME Vendor Development & Circle Summit',
    type: 'Circle & Industry Interaction',
    location: 'Tirupati, Andhra Pradesh',
    schedule: 'District Chapter Series',
    audience: 'Small Industries, Women Entrepreneurs, Startups & Traders',
  },
];

export default function EventsPage() {
  return (
    <>
      <PageBanner
        badge="Events & Industry Connect"
        title="High-Impact MSME Conclaves, Exhibitions & Buyer-Seller Meets"
        description="Experience the power of face-to-face business growth through our curated calendar of Business Conclaves, Exhibitions, Trade Shows, Buyer-Seller Meets, Circle Events, and Industry Interactions."
      />

      {/* 1. ALL 6 EVENT CATEGORIES */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge orange">On-Ground &amp; Phygital Formats</span>
            <h2 className="section-title">
              Our 6 Pillars of <span className="text-green">Events &amp; Industry Connect</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              We bring our digital platform to life through structured physical events across key
              commercial cities and industrial hubs.
            </p>
          </div>

          <div className="grid-3">
            {eventCategories.map((event) => {
              const IconComponent = event.icon;
              return (
                <div key={event.title} className="product-card">
                  <div className="product-img-wrap">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <span className="product-category-tag">{event.badge}</span>
                  </div>

                  <div className="product-body" style={{ padding: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px',
                      }}
                    >
                      <div
                        className={`card-icon ${event.color}`}
                        style={{ width: '46px', height: '46px', marginBottom: 0 }}
                      >
                        <IconComponent size={22} />
                      </div>
                      <h3 style={{ fontSize: '1.22rem', margin: 0 }}>{event.title}</h3>
                    </div>

                    <p style={{ marginBottom: '16px', fontSize: '0.94rem' }}>{event.description}</p>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        marginBottom: '20px',
                        paddingTop: '14px',
                        borderTop: '1px solid #DCE7F3',
                      }}
                    >
                      {event.highlights.map((item) => (
                        <div
                          key={item}
                          className="checklist-item"
                          style={{ fontSize: '0.88rem', fontWeight: 500 }}
                        >
                          <CheckCircle2 size={16} className="checklist-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="btn btn-outline-navy"
                      style={{ width: '100%', marginTop: 'auto', padding: '11px 16px' }}
                    >
                      Register Interest
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. FEATURED REGIONAL EVENT SERIES */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Regional &amp; City Chapter Calendar</span>
            <h2 className="section-title">
              Featured <span className="text-blue">MSME Flagship Programs</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Participate as an exhibitor, B2B buyer, speaker, or member delegate in our upcoming
              regional programmes.
            </p>
          </div>

          <div className="grid-3">
            {upcomingCalendar.map((item) => (
              <div
                key={item.title}
                className="card"
                style={{ borderTop: '4px solid #168A45' }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#EFF8EF',
                    color: '#168A45',
                    padding: '5px 12px',
                    borderRadius: '99px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    alignSelf: 'flex-start',
                    marginBottom: '14px',
                  }}
                >
                  <CalendarCheck size={14} />
                  {item.type}
                </div>

                <h3 style={{ fontSize: '1.18rem', marginBottom: '14px' }}>{item.title}</h3>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '20px',
                    fontSize: '0.9rem',
                    color: '#4A5E78',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color="#F47721" />
                    <span>
                      <strong>Location:</strong> {item.location}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} color="#075A96" />
                    <span>
                      <strong>Format:</strong> {item.schedule}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <Users size={16} color="#168A45" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>
                      <strong>Participants:</strong> {item.audience}
                    </span>
                  </div>
                </div>

                <Link
                  href="/membership"
                  className="btn btn-green"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Book Delegate / Stall Pass
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <section className="section bg-white">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Want to Host or Sponsor a City Chapter Event or Exhibition Stall?</h2>
              <p>
                Connect with the SME Growth Circle Foundation events desk to showcase your brand at our
                upcoming Business Conclaves, Trade Shows, and Buyer-Seller Meets.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-orange">
                Enquire for Stalls &amp; Sponsorship
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

