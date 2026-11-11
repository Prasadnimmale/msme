import React from 'react';
import Link from 'next/link';
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Search,
  ArrowRight,
  Award,
  ShieldCheck,
  ShoppingBag,
  Package,
  Users,
  Briefcase,
  Wrench,
  FilePlus,
  TrendingUp,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const laptopCategories = [
  {
    name: 'Food Products',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Handlooms & Textiles',
    img: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Agriculture',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Engineering',
    img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chemicals',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Home & Lifestyle',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
  },
];

const tabletCategories = [
  {
    name: 'Food & Beverages',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Handlooms & Textiles',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Agriculture & Allied',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Engineering & Machinery',
    img: '/category-manufacture.avif',
  },
  {
    name: 'Chemicals & Plastics',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Home & Lifestyle',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
  },
];

export default function MadeInAndhraShowcase() {
  return (
    <section className="section andhra-sme-section" id="made-in-andhra-sme">
      <div className="container">
        {/* Top Row: Brand + 3 Value Pills (Left) & World Callout Card (Right) */}
        <div className="andhra-sme-top-grid">
          <div>
            <span className="section-badge green">
              <MapPin size={15} /> Flagship Digital Portal by SME Growth Circle Foundation
            </span>
            <h2 className="andhra-brand-heading">
              Made in Andhra<span className="sme-green">SME.in</span>
            </h2>
            <div className="andhra-brand-subtitle">
              <span>A Digital Platform for MSMEs</span>
            </div>

            <div className="andhra-pill-list">
              <div className="andhra-pill-card">
                <div className="andhra-pill-icon navy">
                  <Globe size={24} />
                </div>
                <div className="andhra-pill-text">
                  Showcase and sell your products &amp; services <strong>to the world.</strong>
                </div>
              </div>

              <div className="andhra-pill-card green-border">
                <div className="andhra-pill-icon green">
                  <ShoppingCart size={24} />
                </div>
                <div className="andhra-pill-text">
                  Discover buyers, suppliers and <strong>business opportunities.</strong>
                </div>
              </div>

              <div className="andhra-pill-card">
                <div className="andhra-pill-icon navy">
                  <Smartphone size={24} />
                </div>
                <div className="andhra-pill-text">
                  Access from <strong>mobile, laptop or any device.</strong>
                </div>
              </div>
            </div>

            <div className="andhra-cta-group">
              <a
                href="https://madeinandhrasme.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green"
              >
                Visit Made in AndhraSME Portal
                <ExternalLink size={18} />
              </a>
              <Link href="/contact" className="btn btn-orange">
                Post Your Requirement
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Callout Card: Let's take Andhra to the world together */}
          <div className="world-together-card">
            <img
              src="/logo.jpg"
              alt="SME Growth Circle Foundation Logo"
              style={{
                width: '96px',
                height: '96px',
                objectFit: 'contain',
                margin: '0 auto 12px',
                borderRadius: '50%',
              }}
            />

            <h3 className="world-together-title">
              Let&apos;s take <span>Andhra</span> to the world together.
            </h3>

            <div className="connect-empower-ribbon">
              <span>CONNECT</span>
              <span className="orange-dot" />
              <span>EMPOWER</span>
              <span className="orange-dot" />
              <span>GROW</span>
            </div>

            <p style={{ marginBottom: '20px', fontSize: '0.98rem' }}>
              Empowering Andhra Pradesh&apos;s authentic products, industrial machinery, handlooms,
              spices, marine exports, and MSME services with one unified digital gateway to national and
              global markets.
            </p>

            <div style={{ marginBottom: '20px' }}>
              <a
                href="https://madeinandhrasme.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy"
                style={{ width: '100%' }}
              >
                Launch MadeInAndhraSME.com
                <ExternalLink size={17} />
              </a>
            </div>

            <div className="world-stats-grid">
              <div
                style={{
                  backgroundColor: '#F7FAFC',
                  padding: '12px 8px',
                  borderRadius: '10px',
                  border: '1px solid #DCE7F3',
                }}
              >
                <strong style={{ display: 'block', color: '#0B2D55', fontSize: '1.05rem' }}>
                  26 Districts
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#4A5E78' }}>AP MSME Network</span>
              </div>
              <div
                style={{
                  backgroundColor: '#EFF8EF',
                  padding: '12px 8px',
                  borderRadius: '10px',
                  border: '1px solid #C6E6CE',
                }}
              >
                <strong style={{ display: 'block', color: '#168A45', fontSize: '1.05rem' }}>
                  Local to Global
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#4A5E78' }}>Export &amp; B2B Ready</span>
              </div>
              <div
                style={{
                  backgroundColor: '#FFF3EA',
                  padding: '12px 8px',
                  borderRadius: '10px',
                  border: '1px solid rgba(244,119,33,0.28)',
                }}
              >
                <strong style={{ display: 'block', color: '#F47721', fontSize: '1.05rem' }}>
                  24/7 Access
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#4A5E78' }}>All Devices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Device Platform Preview (Laptop + Mobile + Tablet) */}
        <div className="devices-showcase-wrap">
          {/* 1. Laptop Mockup */}
          <div className="device-laptop">
            <div className="device-screen">
              <div className="device-topbar">
                <div className="device-logo-text">
                  Made in Andhra<span>SME.in</span>
                </div>
                <div className="device-search-mini">
                  <Search size={12} color="#075A96" />
                  <span>Search for products, services, suppliers...</span>
                </div>
              </div>
              <div className="device-nav-tabs">
                <span style={{ color: '#168A45' }}>Products</span>
                <span>Suppliers</span>
                <span>Manufacturers</span>
                <span>Services</span>
                <span>Buyers</span>
                <span>Opportunities</span>
              </div>
              <div className="device-hero-banner">
                <div style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.2 }}>
                  Andhra Products. Global Opportunities.
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.9)',
                    margin: '4px 0 10px',
                  }}
                >
                  From Local to Global
                </div>
                <a
                  href="https://madeinandhrasme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: '#168A45',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '6px 12px',
                    borderRadius: '99px',
                  }}
                >
                  Explore Products <ArrowRight size={12} />
                </a>
              </div>
              <div className="device-mini-cats">
                {laptopCategories.map((cat) => (
                  <div key={cat.name} className="device-mini-cat-card">
                    <img src={cat.img} alt={cat.name} loading="lazy" />
                    <span>{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Mobile Phone Mockup */}
          <div className="device-phone">
            <div className="device-screen">
              <div className="device-topbar" style={{ justifyContent: 'center' }}>
                <div className="device-logo-text">
                  Made in Andhra<span>SME.in</span>
                </div>
              </div>
              <div style={{ padding: '8px 10px 4px' }}>
                <div className="device-search-mini" style={{ width: '100%' }}>
                  <Search size={11} color="#075A96" />
                  <span>Search products, suppliers...</span>
                </div>
              </div>
              <div className="phone-icon-grid">
                <div className="phone-action-item">
                  <Package size={15} color="#075A96" />
                  <span>Products</span>
                </div>
                <div className="phone-action-item">
                  <Users size={15} color="#168A45" />
                  <span>Suppliers</span>
                </div>
                <div className="phone-action-item">
                  <ShoppingBag size={15} color="#F47721" />
                  <span>Buyers</span>
                </div>
                <div className="phone-action-item">
                  <Wrench size={15} color="#0B2D55" />
                  <span>Services</span>
                </div>
                <div className="phone-action-item">
                  <Briefcase size={15} color="#168A45" />
                  <span>Opportunities</span>
                </div>
                <Link href="/contact" className="phone-action-item">
                  <FilePlus size={15} color="#F47721" />
                  <span>Post Req.</span>
                </Link>
              </div>
              <div style={{ padding: '6px 12px 12px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#0B2D55',
                    marginBottom: '6px',
                  }}
                >
                  <span>Featured Products</span>
                  <a
                    href="https://madeinandhrasme.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#075A96' }}
                  >
                    View All &gt;
                  </a>
                </div>
                <div className="phone-featured-grid">
                  {laptopCategories.slice(0, 3).map((item) => (
                    <div key={item.name} className="phone-featured-card">
                      <img src={item.img} alt={item.name} loading="lazy" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Tablet Mockup */}
          <div className="device-tablet">
            <div className="device-screen">
              <div className="device-topbar">
                <div className="device-logo-text">
                  Made in Andhra<span>SME.in</span>
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#168A45' }}>
                  All Categories
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 12px 2px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  color: '#0B2D55',
                }}
              >
                <span>Popular Categories</span>
                <a
                  href="https://madeinandhrasme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#075A96', fontSize: '0.7rem' }}
                >
                  View All &gt;
                </a>
              </div>
              <div className="tablet-cat-grid">
                {tabletCategories.map((cat) => (
                  <div key={cat.name} className="tablet-cat-card">
                    <img src={cat.img} alt={cat.name} loading="lazy" />
                    <span>{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Pillar Trust Bar (From Andhra For the World | One Platform. Global Reach. | Trusted Services. Verified Sellers. | Buy Local. Grow Global.) */}
        <div className="andhra-trust-bar">
          <div className="andhra-trust-item">
            <div className="andhra-trust-icon">
              <Award size={24} />
            </div>
            <div className="andhra-trust-text">
              <strong>From Andhra</strong>
              <span>For the World</span>
            </div>
          </div>

          <div className="andhra-trust-item">
            <div className="andhra-trust-icon">
              <Globe size={24} />
            </div>
            <div className="andhra-trust-text">
              <strong>One Platform.</strong>
              <span>Global Reach.</span>
            </div>
          </div>

          <div className="andhra-trust-item">
            <div className="andhra-trust-icon">
              <ShieldCheck size={24} />
            </div>
            <div className="andhra-trust-text">
              <strong>Trusted Services.</strong>
              <span>Verified Sellers.</span>
            </div>
          </div>

          <div className="andhra-trust-item">
            <div className="andhra-trust-icon">
              <ShoppingBag size={24} />
            </div>
            <div className="andhra-trust-text">
              <strong>Buy Local.</strong>
              <span>Grow Global.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

