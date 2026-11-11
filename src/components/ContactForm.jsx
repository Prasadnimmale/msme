'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-card" style={{ textAlign: 'center', padding: '52px 32px' }}>
        <div
          className="card-icon green"
          style={{ margin: '0 auto 18px', width: '64px', height: '64px', borderRadius: '50%' }}
        >
          <CheckCircle2 size={34} />
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          Thank You for Reaching Out (Static Demo)
        </h3>
        <p style={{ maxWidth: '480px', margin: '0 auto 24px' }}>
          Your message has been recorded in our static demonstration interface. A representative from{' '}
          <strong>SME Growth Circle Foundation</strong> will respond to your enquiry shortly.
        </p>
        <button type="button" className="btn btn-navy" onClick={() => setSubmitted(false)}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div
          className="card-icon orange"
          style={{ width: '44px', height: '44px', marginBottom: 0 }}
        >
          <MessageSquare size={22} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Send Us an Enquiry</h3>
          <span style={{ fontSize: '0.86rem', color: '#4A5E78' }}>
            Have questions about Membership, Marketplace, or Events? Write to us below.
          </span>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #DCE7F3', margin: '18px 0 24px' }} />

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">
            Your Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-company">
            Organization / Business Name
          </label>
          <input
            id="contact-company"
            type="text"
            className="form-input"
            placeholder="Enter your business name"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            className="form-input"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">
            Phone / Mobile Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            className="form-input"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group full">
          <label className="form-label" htmlFor="contact-subject">
            Enquiry Topic *
          </label>
          <select id="contact-subject" className="form-select" required defaultValue="">
            <option value="" disabled>
              Select Enquiry Subject
            </option>
            <option value="Membership Onboarding">MSME Membership Onboarding</option>
            <option value="Business Directory & Marketplace">
              Business Directory &amp; Marketplace Listing
            </option>
            <option value="Buyer-Seller Connect">Buyer-Seller Connect Enquiry</option>
            <option value="Events & Exhibition Stalls">Events, Conclaves &amp; Exhibition Stalls</option>
            <option value="Government & Institutional Support">
              Government &amp; Institutional Support Guidance
            </option>
            <option value="General Partnership">General / Institutional Partnership</option>
          </select>
        </div>

        <div className="form-group full">
          <label className="form-label" htmlFor="contact-message">
            Your Message *
          </label>
          <textarea
            id="contact-message"
            rows={4}
            className="form-textarea"
            placeholder="How can SME Growth Circle Foundation assist your business?"
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-green" style={{ width: '100%', padding: '14px' }}>
        <Send size={18} />
        Submit Contact Enquiry
      </button>
    </form>
  );
}

