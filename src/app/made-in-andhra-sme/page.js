import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import MadeInAndhraShowcase from '@/components/MadeInAndhraShowcase';
import MarketplaceView from '@/components/MarketplaceView';
import {
  Package,
  Users,
  Factory,
  Wrench,
  ShoppingBag,
  Briefcase,
  FilePlus,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const metadata = {
  title: 'Made in AndhraSME.in | A Digital Platform for MSMEs',
  description:
    'Made in AndhraSME.in by SME Growth Circle Foundation — Showcase and sell your products & services to the world, discover buyers, suppliers, and business opportunities across Andhra Pradesh and beyond.',
  alternates: {
    canonical: 'https://www.growthcirclesme.com/made-in-andhra-sme',
  },
};

const portalModules = [
  {
    title: 'Products',
    description:
      'Explore authentic Andhra products across food & beverages, handlooms, agriculture, engineering, chemicals, and lifestyle.',
    icon: Package,
    color: 'navy',
  },
  {
    title: 'Suppliers',
    description:
      'Connect with verified raw material suppliers, wholesale traders, agro-aggregators, and industrial stockists.',
    icon: Users,
    color: 'green',
  },
  {
    title: 'Manufacturers',
    description:
      'Direct access to Andhra Pradesh OEMs, processing plants, precision fabrication units, and small industries.',
    icon: Factory,
    color: 'orange',
  },
  {
    title: 'Services',
    description:
      'Discover B2B service providers including logistics, cold-chain, packaging, quality testing, IT, and export advisory.',
    icon: Wrench,
    color: 'blue',
  },
  {
    title: 'Buyers',
    description:
      'Reach domestic wholesale buyers, institutional procurement teams, retail chains, and global importers.',
    icon: ShoppingBag,
    color: 'green',
  },
  {
    title: 'Opportunities & Post Requirement',
    description:
      'Post your custom sourcing requirement, dealership enquiry, or B2B tender and receive direct responses from verified MSMEs.',
    icon: FilePlus,
    color: 'orange',
  },
];

export default function MadeInAndhraSMEPage() {
  return (
    <>
      <PageBanner
        badge="Made in AndhraSME.in"
        title="Made in AndhraSME.in — A Digital Platform for MSMEs"
        description="From Local to Global: Showcase and sell your products & services to the world, discover buyers, suppliers, and business opportunities across all devices."
      />

      {/* Flagship Made in AndhraSME.in Showcase */}
      <MadeInAndhraShowcase />

      {/* 6 Portal Modules from the Reference Interface */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">One Platform. Global Reach.</span>
            <h2 className="section-title">
              Everything You Can Do on{' '}
              <span className="text-blue">Made in Andhra</span>
              <span className="text-green">SME.in</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Designed for seamless access across mobile, tablet, and desktop—connecting Andhra
              Pradesh&apos;s entrepreneurs with global markets.
            </p>
          </div>

          <div className="grid-3">
            {portalModules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <div key={mod.title} className="card">
                  <div className={`card-icon ${mod.color}`}>
                    <IconComponent size={26} />
                  </div>
                  <h3>{mod.title}</h3>
                  <p style={{ marginBottom: '16px' }}>{mod.description}</p>
                  {mod.title.includes('Post Requirement') ? (
                    <Link
                      href="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: 600,
                        color: '#F47721',
                        fontSize: '0.92rem',
                        marginTop: 'auto',
                      }}
                    >
                      Post Your Requirement <ArrowRight size={15} />
                    </Link>
                  ) : (
                    <a
                      href="https://madeinandhrasme.com/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      Open on MadeInAndhraSME.com <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Product & Category Directory */}
      <MarketplaceView />
    </>
  );
}

