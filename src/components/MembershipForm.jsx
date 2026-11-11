'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, Building2 } from 'lucide-react';

export default function MembershipForm() {
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
          Membership Enquiry Received (Static Demo)
        </h3>
        <p style={{ maxWidth: '480px', margin: '0 auto 24px' }}>
          Thank you for expressing interest in joining <strong>SME Growth Circle</strong>. Our
          membership desk will connect with you regarding chapter onboarding and directory verification.
        </p>
        <button
          type="button"
          className="btn btn-navy"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div
          className="card-icon green"
          style={{ width: '44px', height: '44px', marginBottom: 0 }}
        >
          <Building2 size={22} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Membership Enquiry Form</h3>
          <span style={{ fontSize: '0.86rem', color: '#4A5E78' }}>
            Enroll your business in India&apos;s City-Wise MSME Growth Network
          </span>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #DCE7F3', margin: '18px 0 24px' }} />

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="member-name">
            Full Name / Founder Name *
          </label>
          <input
            id="member-name"
            type="text"
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="business-name">
            Business / Enterprise Name *
          </label>
          <input
            id="business-name"
            type="text"
            className="form-input"
            placeholder="Enter registered company / shop name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="member-category">
            Business Category *
          </label>
          <select id="member-category" className="form-select" required defaultValue="">
            <option value="" disabled>
              Select MSME Category
            </option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Trader & Distributor">Trader &amp; Distributor</option>
            <option value="Retail Business">Retail Business</option>
            <option value="Service Provider">Service Provider</option>
            <option value="Startup">Startup</option>
            <option value="Professional">Professional</option>
            <option value="Women Entrepreneur">Women Entrepreneur</option>
            <option value="Small Industry">Small Industry</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="industry-sector">
            Industry Sector *
          </label>
          <select id="industry-sector" className="form-select" required defaultValue="">
            <option value="" disabled>
              Select Industry Sector
            </option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Food & Beverages">Food &amp; Beverages</option>
            <option value="Handlooms & Textiles">Handlooms &amp; Textiles</option>
            <option value="Engineering & Machinery">Engineering &amp; Machinery</option>
            <option value="Chemicals & Plastics">Chemicals &amp; Plastics</option>
            <option value="Home & Lifestyle">Home &amp; Lifestyle</option>
            <option value="IT & Professional Services">IT &amp; Professional Services</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="member-phone">
            Mobile / WhatsApp Number *
          </label>
          <input
            id="member-phone"
            type="tel"
            className="form-input"
            placeholder="Enter 10-digit mobile number"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="member-email">
            Official Email Address *
          </label>
          <input
            id="member-email"
            type="email"
            className="form-input"
            placeholder="Enter business email address"
            required
          />
        </div>

        <div className="form-group full">
          <label className="form-label" htmlFor="member-city">
            City / District &amp; State *
          </label>
          <input
            id="member-city"
            type="text"
            className="form-input"
            placeholder="e.g., Visakhapatnam / Vijayawada / Guntur / Tirupati, Andhra Pradesh"
            required
          />
        </div>

        <div className="form-group full">
          <label className="form-label" htmlFor="member-goals">
            Products / Services Offered &amp; Growth Expectations
          </label>
          <textarea
            id="member-goals"
            rows={4}
            className="form-textarea"
            placeholder="Briefly describe your products/services and what kind of buyers, suppliers, or networking support you are looking for..."
          />
        </div>
      </div>

      <button type="submit" className="btn btn-green" style={{ width: '100%', padding: '14px' }}>
        <Send size={18} />
        Submit Membership Enquiry
      </button>
    </form>
  );
}

