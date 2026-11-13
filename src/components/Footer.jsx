import React from 'react';
import Link from 'next/link';
import {
  Mail,
  ChevronRight,
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
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.94rem' }}>
              India&apos;s City-Wise MSME Business Visibility &amp; Growth Platform. An initiative by SME
              Growth Circle Foundation helping Manufacturers, Traders, Distributors, Retailers, Service
              Providers, Startups, and Women Entrepreneurs connect, collaborate, and scale across new
              markets.
            </p>
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
                <Link href="/made-in-andhra-sme">
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
                  <ChevronRight size={15} color="#F47721" /> Business Circle
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

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="footer-title">Contact Information</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail size={17} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>
                    Official Email
                  </strong>
                  <a
                    href="mailto:growthcirclesme@gmail.com"
                    style={{ color: 'rgba(255, 255, 255, 0.9)', wordBreak: 'break-all' }}
                  >
                    growthcirclesme@gmail.com
                  </a>
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

