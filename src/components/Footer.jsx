import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Globe,
  Share2,
  MessageSquare,
  Users,
  Briefcase,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Description */}
          <div>
            <Link
              href="/"
              className="brand-logo"
              style={{ marginBottom: '18px', display: 'inline-flex' }}
            >
              <img
                src="/logo.jpg"
                alt="SME Growth Circle Foundation Logo"
                className="footer-logo-img"
              />
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>
                  SME <span style={{ color: '#249B50' }}>Growth Circle</span>
                </span>
                <span className="brand-tagline" style={{ color: '#F4B51B' }}>
                  Foundation &bull; Connect &bull; Empower &bull; Grow
                </span>
              </div>
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.94rem', marginBottom: '18px' }}>
              India&apos;s City-Wise MSME Business Visibility &amp; Growth Platform. An initiative by SME
              Growth Circle Foundation helping Manufacturers, Traders, Distributors, Retailers, Service
              Providers, Startups, and Women Entrepreneurs connect, collaborate, and scale across new
              markets.
            </p>
            <div className="social-links" aria-label="Social Media Links">
              <a href="#linkedin" className="social-btn" aria-label="LinkedIn Page">
                <Briefcase size={18} />
              </a>
              <a href="#network" className="social-btn" aria-label="Community Network">
                <Users size={18} />
              </a>
              <a href="#website" className="social-btn" aria-label="Official Website">
                <Globe size={18} />
              </a>
              <a href="#updates" className="social-btn" aria-label="Social Updates">
                <Share2 size={18} />
              </a>
              <a href="#community" className="social-btn" aria-label="Discussion Forum">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">
                  <ChevronRight size={15} color="#249B50" /> Home
                </Link>
              </li>
              <li>
                <Link href="/made-in-andhra-sme">
                  <ChevronRight size={15} color="#249B50" /> Made in AndhraSME.in
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <ChevronRight size={15} color="#249B50" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <ChevronRight size={15} color="#249B50" /> Our Solutions
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  <ChevronRight size={15} color="#249B50" /> Marketplace
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <ChevronRight size={15} color="#249B50" /> Events
                </Link>
              </li>
              <li>
                <Link href="/membership">
                  <ChevronRight size={15} color="#249B50" /> Membership
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <ChevronRight size={15} color="#249B50" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Solutions */}
          <div>
            <h3 className="footer-title">Our Solutions</h3>
            <ul className="footer-links">
              <li>
                <Link href="/solutions">
                  <ChevronRight size={15} color="#F47721" /> Business Directory &amp; Visibility
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  <ChevronRight size={15} color="#F47721" /> Digital Marketplace
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <ChevronRight size={15} color="#F47721" /> Buyer-Seller Connect
                </Link>
              </li>
              <li>
                <Link href="/membership">
                  <ChevronRight size={15} color="#F47721" /> Business Networking
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <ChevronRight size={15} color="#F47721" /> Learning &amp; Business Support
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <ChevronRight size={15} color="#F47721" /> Government &amp; Institutional Support
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <ChevronRight size={15} color="#F47721" /> Events &amp; Industry Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information Placeholders */}
          <div>
            <h3 className="footer-title">Contact Information</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={17} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>
                    Office Address
                  </strong>
                  <span>[Office Address Placeholder – City, State, PIN Code]</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail size={17} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>
                    Official Email
                  </strong>
                  <span>[Email Address Placeholder]</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Phone size={17} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>
                    Helpline / Phone
                  </strong>
                  <span>[Phone Number Placeholder]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
            &copy; {new Date().getFullYear()} <strong>SME Growth Circle Foundation</strong>. All Rights
            Reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/about" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Foundation Charter
            </Link>
            <Link href="/membership" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Member Guidelines
            </Link>
            <Link href="/contact" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Help &amp; Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

