import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import {
  Eye,
  Globe2,
  ShoppingBag,
  Network,
  Handshake,
  TrendingUp,
  GraduationCap,
  Landmark,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Our Solutions | SME Growth Circle',
  description:
    'Explore SME Growth Circle solutions: Business Visibility, Market Access, Digital Marketplace, Business Circle, Buyer-Seller Connect, Business Development, Learning & Training, Government Support, and Events & Industry Connect.',
};

const solutionsList = [
  {
    title: 'Business Visibility',
    badge: 'Pillar 01',
    description:
      'Build a strong, verified digital identity in our city-wise MSME Business Directory so corporate buyers, wholesale traders, and consumers can discover your enterprise 24/7.',
    highlights: [
      'Verified City & Sector Business Profile',
      'Searchable Product & Service Portfolio',
      'Credibility Badge from SME Growth Circle',
    ],
    icon: Eye,
    color: 'navy',
    ctaText: 'Get Listed Now',
    ctaHref: '/membership',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Market Access',
    badge: 'Pillar 02',
    description:
      'Expand your commercial footprint beyond your shop, office, and city. Connect with new geographical territories, district distributors, and institutional procurement channels.',
    highlights: [
      'Inter-District & Inter-State Trade Links',
      'Distributor & Channel Partner Discovery',
      'New Territory Market Entry Support',
    ],
    icon: Globe2,
    color: 'green',
    ctaText: 'Unlock New Markets',
    ctaHref: '/marketplace',
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Digital Marketplace',
    badge: 'B2B & B2C Showcase',
    description:
      'Display your manufactured products, agricultural produce, industrial components, textiles, and services on a dedicated MSME marketplace built for serious trade enquiries.',
    highlights: [
      'Category-Wise Product Showcase',
      'Direct Enquiry Generation from Buyers',
      'Zero-Commission Static Product Discovery',
    ],
    icon: ShoppingBag,
    color: 'orange',
    ctaText: 'Visit Marketplace',
    ctaHref: '/marketplace',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Business Circle',
    badge: 'Peer Ecosystem',
    description:
      'Join active city chapters and sector forums where manufacturers, traders, service providers, and professionals collaborate, share referrals, and form strategic alliances.',
    highlights: [
      'Structured City Chapter Meetings',
      'Cross-Industry Referral Ecosystem',
      'Trusted Leadership & Peer Circles',
    ],
    icon: Network,
    color: 'blue',
    ctaText: 'Join the Circle',
    ctaHref: '/membership',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Buyer-Seller Connect',
    badge: 'Direct Matchmaking',
    description:
      'Participate in structured B2B matchmaking sessions designed to align your production capacity or wholesale inventory with verified bulk buyers and vendor procurement teams.',
    highlights: [
      'Curated B2B Buyer-Supplier Introductions',
      'OEM & Ancillary Vendor Development',
      'Raw Material & Bulk Sourcing Connect',
    ],
    icon: Handshake,
    color: 'green',
    ctaText: 'Connect With Buyers',
    ctaHref: '/events',
    image:
      'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Business Development',
    badge: 'Scale & Strategy',
    description:
      'Accelerate revenue growth through strategic branding guidance, channel expansion frameworks, packaging modernization, and market positioning tailored for SMEs.',
    highlights: [
      'Go-To-Market & Channel Structuring',
      'Brand Positioning & Digital Readiness',
      'Enterprise Scaling Advisory',
    ],
    icon: TrendingUp,
    color: 'orange',
    ctaText: 'Accelerate Growth',
    ctaHref: '/membership',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Learning & Training',
    badge: 'Capacity Building',
    description:
      'Upskill your leadership and workforce through practical workshops on financial management, GST/compliance, digital marketing, export readiness, and lean manufacturing.',
    highlights: [
      'Expert-Led MSME Masterclasses',
      'Digital & Financial Literacy Workshops',
      'Quality & Export Certification Guidance',
    ],
    icon: GraduationCap,
    color: 'navy',
    ctaText: 'Explore Programs',
    ctaHref: '/events',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Government Support',
    badge: 'Policy & Schemes',
    description:
      'Navigate central and state government MSME schemes, Udyam registration benefits, CGTMSE credit guarantees, industrial subsidies, and institutional procurement norms.',
    highlights: [
      'Central & State MSME Scheme Awareness',
      'Industrial Subsidy & Incentive Guidance',
      'Banking & Institutional Linkage Support',
    ],
    icon: Landmark,
    color: 'blue',
    ctaText: 'Enquire for Guidance',
    ctaHref: '/contact',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Events & Industry Connect',
    badge: 'Expos & Conclaves',
    description:
      'Gain high-visibility stall showcases and speaking/circle opportunities at regional MSME conclaves, trade shows, industrial exhibitions, and delegation visits.',
    highlights: [
      'Regional & State MSME Conclaves',
      'Product Exhibitions & Trade Fairs',
      'Industry Association Interactions',
    ],
    icon: CalendarCheck,
    color: 'green',
    ctaText: 'View Upcoming Events',
    ctaHref: '/events',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        badge="Our Solutions"
        title="End-to-End Business Growth Solutions for Indian MSMEs"
        description="From digital visibility and B2B marketplace discovery to buyer-seller meets, skill training, and government scheme awareness—discover how SME Growth Circle powers your growth."
      />

      {/* SOLUTIONS CARDS GRID */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">9 Core Growth Engines</span>
            <h2 className="section-title">
              Comprehensive <span className="text-green">MSME Solutions</span> Under One Platform
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Each solution is thoughtfully designed to solve real operational, marketing, and circle
              challenges faced by micro, small, and medium enterprises.
            </p>
          </div>

          <div className="grid-3">
            {solutionsList.map((sol) => {
              const IconComponent = sol.icon;
              return (
                <div key={sol.title} className="product-card">
                  <div className="product-img-wrap">
                    <img src={sol.image} alt={sol.title} loading="lazy" />
                    <span className="product-category-tag">{sol.badge}</span>
                  </div>

                  <div className="product-body" style={{ padding: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '14px',
                      }}
                    >
                      <div
                        className={`card-icon ${sol.color}`}
                        style={{ width: '48px', height: '48px', marginBottom: 0 }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h3 style={{ fontSize: '1.24rem', margin: 0 }}>{sol.title}</h3>
                    </div>

                    <p style={{ marginBottom: '18px', fontSize: '0.94rem' }}>{sol.description}</p>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        marginBottom: '22px',
                        paddingTop: '14px',
                        borderTop: '1px solid #DCE7F3',
                      }}
                    >
                      {sol.highlights.map((pt) => (
                        <div
                          key={pt}
                          className="checklist-item"
                          style={{ fontSize: '0.88rem', fontWeight: 500 }}
                        >
                          <CheckCircle2 size={16} className="checklist-icon" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={sol.ctaHref}
                      className="btn btn-green"
                      style={{ width: '100%', marginTop: 'auto', padding: '11px 18px' }}
                    >
                      {sol.ctaText}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*CTA SECTION */}
      <section className="section bg-white">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Ready to Leverage All 9 Growth Solutions for Your Business?</h2>
              <p>
                Join SME Growth Circle today and unlock full access to our business directory,
                marketplace, circle chapters, and industry events.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/membership" className="btn btn-orange">
                Apply for Membership
                <ArrowRight size={18} />
              </Link>
              <Link href="/marketplace" className="btn btn-outline-white">
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

