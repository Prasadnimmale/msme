'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, Building2 } from 'lucide-react';

const WHATSAPP_NUMBER = '918121672244';

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    category: '',
    sector: '',
    phone: '',
    email: '',
    city: '',
    goals: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      '*New Membership Enquiry — SME Growth Circle*',
      '',
      `*Full Name / Founder:* ${formData.name.trim()}`,
      `*Business / Enterprise Name:* ${formData.businessName.trim()}`,
      `*Business Category:* ${formData.category}`,
      `*Industry Sector:* ${formData.sector}`,
      `*Mobile / WhatsApp:* ${formData.phone.trim()}`,
      `*Official Email:* ${formData.email.trim()}`,
      `*City / District & State:* ${formData.city.trim()}`,
      `*Products / Services & Expectations:* ${formData.goals.trim() || 'N/A'}`,
    ];

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

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
          Membership Enquiry Received!
        </h3>
        <p style={{ maxWidth: '480px', margin: '0 auto 24px' }}>
          Thank you for expressing interest in joining <strong>SME Growth Circle</strong>. Your
          details have been prepared for WhatsApp (<strong>+91 81216 72244</strong>) and our
          membership desk will connect with you shortly.
        </p>
        <button
          type="button"
          className="btn btn-navy"
          onClick={() => {
            setFormData({
              name: '',
              businessName: '',
              category: '',
              sector: '',
              phone: '',
              email: '',
              city: '',
              goals: '',
            });
            setSubmitted(false);
          }}
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
            Enroll your business in India&apos;s City-Wise MSME Growth Circle
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
            name="name"
            type="text"
            className="form-input"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="business-name">
            Business / Enterprise Name *
          </label>
          <input
            id="business-name"
            name="businessName"
            type="text"
            className="form-input"
            placeholder="Enter registered company / shop name"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="member-category">
            Business Category *
          </label>
          <select
            id="member-category"
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
            required
          >
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
          <select
            id="industry-sector"
            name="sector"
            className="form-select"
            value={formData.sector}
            onChange={handleChange}
            required
          >
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
            name="phone"
            type="tel"
            className="form-input"
            placeholder="Enter 10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="member-email">
            Official Email Address *
          </label>
          <input
            id="member-email"
            name="email"
            type="email"
            className="form-input"
            placeholder="Enter business email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full">
          <label className="form-label" htmlFor="member-city">
            City / District &amp; State *
          </label>
          <input
            id="member-city"
            name="city"
            type="text"
            className="form-input"
            placeholder="e.g., Visakhapatnam / Vijayawada / Guntur / Tirupati, Andhra Pradesh"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full">
          <label className="form-label" htmlFor="member-goals">
            Products / Services Offered &amp; Growth Expectations
          </label>
          <textarea
            id="member-goals"
            name="goals"
            rows={4}
            className="form-textarea"
            placeholder="Briefly describe your products/services and what kind of buyers, suppliers, or circle support you are looking for..."
            value={formData.goals}
            onChange={handleChange}
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

