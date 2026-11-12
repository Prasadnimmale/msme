import React from 'react';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';
import { Mail, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | SME Growth Circle Foundation',
  description:
    'Get in touch with SME Growth Circle Foundation for MSME membership, marketplace onboarding, buyer-seller meets, and regional chapter partnerships.',
  alternates: {
    canonical: 'https://www.growthcirclesme.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge="Contact Us"
        title="Connect With SME Growth Circle Foundation"
        description="Reach out to our team for membership enquiries, city chapter collaborations, marketplace listings, or upcoming MSME conclaves and exhibitions."
      />

      {/* CONTACT INFORMATION & ENQUIRY FORM */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-grid" style={{ alignItems: 'flex-start' }}>
            <div style={{ minWidth: 0, width: '100%' }}>
              <span className="section-badge">Contact Information</span>
              <h2 className="section-title">
                We&apos;re Here to Support Your <span className="text-green">Business Growth</span>
              </h2>
              <p style={{ marginBottom: '24px', fontSize: '1rem' }}>
                Have questions about joining SME Growth Circle, listing your products on Made in
                AndhraSME.in, or participating in upcoming Buyer-Seller Meets? Reach out to us
                directly via email or submit your enquiry using the form.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Official Email Address */}
                <div
                  className="card"
                  style={{
                    padding: '22px',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  <div className="card-icon green" style={{ marginBottom: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
                      Official Email Address
                    </h3>
                    <p
                      style={{
                        color: '#168A45',
                        fontWeight: 600,
                        marginBottom: '6px',
                        wordBreak: 'break-all',
                      }}
                    >
                      <a href="mailto:growthcirclesme@gmail.com">growthcirclesme@gmail.com</a>
                    </p>
                    <p style={{ fontSize: '0.9rem' }}>
                      Write to us for membership enquiries, marketplace onboarding, and support.
                    </p>
                  </div>
                </div>

                {/* Quick Support Highlights */}
                <div
                  className="card"
                  style={{
                    padding: '22px',
                    backgroundColor: '#F7FAFC',
                    borderColor: '#DCE7F3',
                  }}
                >
                  <h3 style={{ fontSize: '1.08rem', marginBottom: '12px' }}>
                    How We Can Assist Your Enterprise
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div className="checklist-item">
                      <CheckCircle2 size={18} className="checklist-icon" />
                      <span>MSME Membership &amp; City Chapter Onboarding</span>
                    </div>
                    <div className="checklist-item">
                      <CheckCircle2 size={18} className="checklist-icon" />
                      <span>Made in AndhraSME.in Product &amp; Service Listing</span>
                    </div>
                    <div className="checklist-item">
                      <CheckCircle2 size={18} className="checklist-icon" />
                      <span>Buyer-Seller Connect &amp; B2B Trade Enquiries</span>
                    </div>
                    <div className="checklist-item">
                      <CheckCircle2 size={18} className="checklist-icon" />
                      <span>Conclaves, Exhibitions &amp; Institutional Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

