import React from 'react';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building2,
  Navigation,
  ExternalLink,
} from 'lucide-react';

export const metadata = {
  title: 'Contact Us | SME Growth Circle Foundation',
  description:
    'Get in touch with SME Growth Circle Foundation for MSME membership, marketplace onboarding, buyer-seller meets, and regional chapter partnerships.',
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge="Contact Us"
        title="Connect With SME Growth Circle Foundation"
        description="Reach out to our team for membership enquiries, city chapter collaborations, marketplace listings, or upcoming MSME conclaves and exhibitions."
      />

      {/* 1. CONTACT INFORMATION & ENQUIRY FORM */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-grid" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-badge">Contact Information</span>
              <h2 className="section-title">
                We&apos;re Here to Support Your <span className="text-green">Business Growth</span>
              </h2>
              <p style={{ marginBottom: '26px', fontSize: '1rem' }}>
                Use the editable contact placeholders below to configure your official regional or head
                office coordinates, helpline numbers, and support email addresses.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Office Address Placeholder */}
                <div className="card" style={{ padding: '22px', flexDirection: 'row', gap: '16px' }}>
                  <div className="card-icon navy" style={{ marginBottom: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                      Registered &amp; Regional Office Address
                    </h3>
                    <p style={{ color: '#0B2D55', fontWeight: 500, marginBottom: '4px' }}>
                      [Office Address Placeholder – Building / Floor / Street Name]
                    </p>
                    <p style={{ fontSize: '0.9rem' }}>
                      [City / District Name, State, PIN Code – India]
                    </p>
                  </div>
                </div>

                {/* Email Placeholder */}
                <div className="card" style={{ padding: '22px', flexDirection: 'row', gap: '16px' }}>
                  <div className="card-icon green" style={{ marginBottom: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                      Official Email Address
                    </h3>
                    <p style={{ color: '#168A45', fontWeight: 600, marginBottom: '4px' }}>
                      [Email Address Placeholder – e.g., info@your-domain-placeholder.org]
                    </p>
                    <p style={{ fontSize: '0.9rem' }}>
                      [Membership Desk Email Placeholder]
                    </p>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="card" style={{ padding: '22px', flexDirection: 'row', gap: '16px' }}>
                  <div className="card-icon orange" style={{ marginBottom: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                      MSME Helpline &amp; Phone
                    </h3>
                    <p style={{ color: '#0B2D55', fontWeight: 600, marginBottom: '4px' }}>
                      [Primary Phone / Mobile Number Placeholder]
                    </p>
                    <p style={{ fontSize: '0.9rem' }}>
                      [Secondary / WhatsApp Support Number Placeholder]
                    </p>
                  </div>
                </div>

                {/* Office Timings Placeholder */}
                <div className="card" style={{ padding: '22px', flexDirection: 'row', gap: '16px' }}>
                  <div className="card-icon blue" style={{ marginBottom: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Working Hours</h3>
                    <p style={{ fontSize: '0.92rem' }}>
                      [Working Days &amp; Timings Placeholder – e.g., Monday to Saturday: 10:00 AM –
                      6:00 PM]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 2. GOOGLE MAPS VISUAL PLACEHOLDER */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="section-header">
            <span className="section-badge orange">Location Map</span>
            <h2 className="section-title">
              Office Location &amp; <span className="text-blue">Google Maps Placeholder</span>
            </h2>
            <div className="title-divider">
              <span className="bar-navy" />
              <span className="bar-green" />
              <span className="bar-orange" />
            </div>
            <p className="section-desc">
              Interactive map visual placeholder ready to be linked with your official office
              coordinates.
            </p>
          </div>

          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '4px solid #FFFFFF',
              boxShadow: '0 14px 34px rgba(11, 45, 85, 0.12)',
              background:
                'linear-gradient(135deg, #EAF4FB 0%, #DCECF8 45%, #EFF8EF 100%)',
              minHeight: '360px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 24px',
              position: 'relative',
            }}
          >
            {/* Subtle Map Grid Pattern via CSS */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(to right, rgba(7, 90, 150, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(7, 90, 150, 0.08) 1px, transparent 1px)',
                backgroundSize: '42px 42px',
                pointerEvents: 'none',
              }}
            />

            <div
              className="card"
              style={{
                maxWidth: '560px',
                textAlign: 'center',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                padding: '36px 30px',
              }}
            >
              <div
                className="card-icon orange"
                style={{ width: '64px', height: '64px', borderRadius: '50%', marginBottom: '16px' }}
              >
                <Navigation size={30} />
              </div>
              <span
                style={{
                  backgroundColor: '#EAF4FB',
                  color: '#075A96',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '99px',
                  marginBottom: '10px',
                }}
              >
                GOOGLE MAPS VISUAL PLACEHOLDER
              </span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
                SME Growth Circle Foundation — Office Location
              </h3>
              <p style={{ marginBottom: '18px', fontSize: '0.95rem' }}>
                [Office Address Placeholder — Replace with your Google Maps Embed URL or exact street
                coordinates when finalized]
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span className="btn btn-navy" style={{ cursor: 'default' }}>
                  <Building2 size={17} />
                  [City, State Placeholder]
                </span>
                <span className="btn btn-outline-navy" style={{ cursor: 'default' }}>
                  <ExternalLink size={17} />
                  [Map Directions Placeholder]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

