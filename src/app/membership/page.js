import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import MembershipForm from '@/components/MembershipForm';
import {
  CheckCircle2,
  Eye,
  Globe2,
  Handshake,
  Users,
  Award,
  Landmark,
  CalendarCheck,
  Factory,
  Truck,
  Store,
  Briefcase,
  Rocket,
  UserCheck,
  Sparkles,
  Wrench,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export const metadata = {
  title: 'Membership | Join SME Growth Circle',
  description:
    'Become a member of SME Growth Circle Foundation. Discover why to join, membership benefits, circle advantages, eligible MSME categories, and submit your membership enquiry.',
};

const membershipBenefits = [
  {
    title: 'Verified Business Directory Profile',
    description:
      'Receive a priority listing in our city-wise MSME directory with your company profile, product catalog, and verified trust badge.',
    icon: Eye,
    color: 'navy',
  },
  {
    title: 'Marketplace Product Showcase',
    description:
      'Display your manufactured items, wholesale goods, or B2B services on the SME Growth Circle Digital Marketplace.',
    icon: Globe2,
    color: 'green',
  },
  {
    title: 'Priority Buyer-Seller Matchmaking',
    description:
      'Get direct introductions to institutional buyers, wholesale distributors, OEMs, and raw material suppliers across cities.',
    icon: Handshake,
    color: 'orange',
  },
  {
    title: 'Access to City Chapter Circles',
    description:
      'Attend monthly city chapter meets, business referral circles, and cross-district trade delegations.',
    icon: Users,
    color: 'blue',
  },
  {
    title: 'Complimentary & Discounted Expo Access',
    description:
      'Enjoy member privileges for stall bookings, delegate passes, and speaking slots at MSME Conclaves and Exhibitions.',
    icon: CalendarCheck,
    color: 'green',
  },
  {
    title: 'Government Scheme & Training Support',
    description:
      'Participate in capacity-building workshops and receive guidance on state/central MSME incentives and credit linkages.',
    icon: Landmark,
    color: 'orange',
  },
];

const eligibleCategories = [
  { title: 'Manufacturers', icon: Factory, desc: 'OEMs, processing plants & industrial units' },
  { title: 'Traders & Distributors', icon: Truck, desc: 'Wholesalers, stockists & C&F agents' },
  { title: 'Retail Businesses', icon: Store, desc: 'Showrooms, outlets & commercial retailers' },
  { title: 'Service Providers', icon: Briefcase, desc: 'B2B services, logistics, IT & consulting' },
  { title: 'Startups', icon: Rocket, desc: 'Innovative early-stage & scaling ventures' },
  { title: 'Professionals', icon: UserCheck, desc: 'CAs, engineers, advisors & auditors' },
  { title: 'Women Entrepreneurs', icon: Sparkles, desc: 'Women-led enterprises & SHG producers' },
  { title: 'Small Industries', icon: Wrench, desc: 'Micro units, workshops & cottage industries' },
];

export default function MembershipPage() {
  return (
    <>
      <PageBanner
        badge="Membership"
        title="Join India's Premier City-Wise MSME Business Growth Circle"
        description="Unlock national visibility, verified buyer-seller connections, city chapter circles, and institutional support by becoming a member of SME Growth Circle."
      />

      {/* 1. WHY BECOME A MEMBER? */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-badge">Why Become a Member?</span>
              <h2 className="section-title">
                Stop Competing Alone. Grow Faster With a{' '}
                <span className="text-green">Powerful MSME Ecosystem</span>
              </h2>
              <p style={{ marginBottom: '16px', fontSize: '1.02rem' }}>
                In today&apos;s competitive market, relying solely on walk-in customers or word-of-mouth
                within your neighborhood limits your true enterprise potential. Becoming a member of{' '}
                <strong>SME Growth Circle</strong> immediately connects your business to a structured
                state-wide and national circle.
              </p>
              <p style={{ marginBottom: '20px', fontSize: '0.98rem' }}>
                Whether you want to appoint distributors in new districts, source quality raw materials
                at competitive rates, showcase your products at trade exhibitions, or learn about
                government subsidies, SME Growth Circle Membership gives you the platform and community
                to achieve it.
              </p>

              <div className="feature-checklist">
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Expand Beyond Your Local City</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Build Verified Brand Credibility</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Generate Consistent B2B Enquiries</span>
                </div>
                <div className="checklist-item">
                  <CheckCircle2 size={18} className="checklist-icon" />
                  <span>Learn from Industry Mentors</span>
                </div>
              </div>

              <a href="#membership-enquiry" className="btn btn-green">
                Apply for Membership Now
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="image-frame">
              <img
                src="/membership-hero.jpg"
                alt="Why Become a Member of SME Growth Circle"
                style={{ objectPosition: 'top center' }}
              />
              <div className="image-caption-ribbon">
                <ShieldCheck size={20} color="#F4B51B" />
                <span>Trusted by Manufacturers, Traders, Retailers &amp; Service Providers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEMBERSHIP BENEFITS */}
      <section className="section bg-light-green">
        <div className="container">
          <div className="section-header">
            <span className="section-badge green">Member Privileges</span>
            <h2 className="section-title">
              Exclusive <span className="text-green">Membership Benefits</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Every member receives comprehensive digital visibility and on-ground circle support
              designed to generate real business outcomes.
            </p>
          </div>

          <div className="grid-3">
            {membershipBenefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="card">
                  <div className={`card-icon ${benefit.color}`}>
                    <IconComponent size={26} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHO CAN JOIN? */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge orange">Eligibility</span>
            <h2 className="section-title">
              Who Can <span className="text-blue">Join SME Growth Circle?</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Open to all legitimate micro, small, and medium enterprises, trade establishments,
              startups, and independent professionals.
            </p>
          </div>

          <div className="grid-4">
            {eligibleCategories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div key={cat.title} className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
                  <div className="card-icon green">
                    <IconComponent size={26} />
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BUSINESS CIRCLE BENEFITS */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="split-grid">
            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80"
                alt="SME Growth Circle Business Circle Benefits"
              />
              <div className="image-caption-ribbon">
                <TrendingUp size={20} color="#F4B51B" />
                <span>High-Trust City Chapters &amp; Inter-District Trade Circles</span>
              </div>
            </div>

            <div>
              <span className="section-badge">Business Circle Benefits</span>
              <h2 className="section-title">
                Turn Meaningful Connections Into <span className="text-orange">Long-Term Contracts</span>
              </h2>
              <p style={{ marginBottom: '18px' }}>
                Unlike generic social groups, SME Growth Circle facilitates structured, agenda-driven
                business circles where every participant is a verified business owner or decision
                maker.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="checklist-item">
                  <Award size={20} className="checklist-icon" />
                  <span>
                    <strong>Structured Referral Exchange:</strong> Pass and receive warm B2B leads within
                    your city chapter and across neighboring districts.
                  </span>
                </div>
                <div className="checklist-item">
                  <Handshake size={20} className="checklist-icon" />
                  <span>
                    <strong>Vendor &amp; Distributor Discovery:</strong> Appoint reliable stockists,
                    retailers, and franchisee partners in new cities.
                  </span>
                </div>
                <div className="checklist-item">
                  <Users size={20} className="checklist-icon" />
                  <span>
                    <strong>Collaborative Bulk Sourcing:</strong> Pool procurement requirements with
                    fellow MSMEs to negotiate better raw material and logistics pricing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. MEMBERSHIP CTA & STATIC MEMBERSHIP ENQUIRY FORM UI */}
      <section id="membership-enquiry" className="section bg-white">
        <div className="container">
          <div className="split-grid" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-badge green">Enroll Today</span>
              <h2 className="section-title">
                Become a Member of <span className="text-green">SME Growth Circle</span>
              </h2>
              <p style={{ marginBottom: '20px', fontSize: '1.02rem' }}>
                Complete the membership enquiry form to register your interest. Our chapter coordinator
                will guide you through profile onboarding, directory listing, and upcoming circle
                meets in your city.
              </p>

              <div
                className="card"
                style={{
                  backgroundColor: '#EAF4FB',
                  borderColor: '#DCE7F3',
                  marginBottom: '24px',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>
                  What Happens After You Enquire?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="checklist-item">
                    <CheckCircle2 size={18} className="checklist-icon" />
                    <span>Step 1: Verification of your business category &amp; city chapter</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={18} className="checklist-icon" />
                    <span>Step 2: Onboarding onto the Business Directory &amp; Marketplace</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={18} className="checklist-icon" />
                    <span>Step 3: Invitation to upcoming Buyer-Seller Meets &amp; Conclaves</span>
                  </div>
                </div>
              </div>

              <div
                className="card"
                style={{
                  background: 'linear-gradient(135deg, #0B2D55 0%, #075A96 100%)',
                  color: '#FFFFFF',
                }}
              >
                <h3 style={{ color: '#FFFFFF', marginBottom: '8px' }}>
                  Need Assistance With Group or Association Enrollment?
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.86)', marginBottom: '16px' }}>
                  Industrial estates, trade associations, and women entrepreneur collectives can reach
                  out to our foundation desk for bulk chapter onboarding.
                </p>
                <Link href="/contact" className="btn btn-orange" style={{ alignSelf: 'flex-start' }}>
                  Contact Foundation Desk
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <MembershipForm />
          </div>
        </div>
      </section>
    </>
  );
}

