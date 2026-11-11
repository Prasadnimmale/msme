'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Building2,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Made in AndhraSME.in', href: '/made-in-andhra-sme' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Solutions', href: '/solutions' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Events', href: '/events' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      <div className="top-ribbon">
        <div className="container top-ribbon-inner">
          <div className="top-ribbon-left">
            <span className="ribbon-tag">MADE IN ANDHRASME.IN</span>
            <span>
              A Digital Platform for MSMEs &bull; Let&apos;s Take Andhra to the World Together
            </span>
          </div>
          <div className="top-ribbon-right">
            <span>
              <MapPin size={14} color="#F4B51B" />
              CONNECT &bull; EMPOWER &bull; GROW
            </span>
            <span>
              <ShieldCheck size={14} color="#249B50" />
              From Andhra For the World
            </span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand-logo" aria-label="SME Growth Circle Home">
            <img
              src="/logo.jpg"
              alt="SME Growth Circle Foundation Logo"
              className="brand-logo-img"
            />
            <div className="brand-text">
              <span className="brand-name">
                SME <span>Growth Circle</span>
              </span>
              <span className="brand-tagline">Foundation &bull; Connect &bull; Empower &bull; Grow</span>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/membership" className="btn btn-green">
              Join Now
              <ArrowRight size={17} />
            </Link>
            <button
              type="button"
              className="mobile-menu-btn"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-drawer-footer">
            <Link
              href="/membership"
              className="btn btn-green mobile-join-btn"
              onClick={() => setMobileOpen(false)}
            >
              <span>Join Now</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

