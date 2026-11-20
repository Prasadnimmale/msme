'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';

const WHATSAPP_NUMBER = '918121672244';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      '*New Contact Enquiry — SME Growth Circle*',
      '',
      `*Full Name:* ${formData.name.trim()}`,
      `*Organization / Business:* ${formData.company.trim() || 'N/A'}`,
      `*Email Address:* ${formData.email.trim()}`,
      `*Phone / Mobile:* ${formData.phone.trim()}`,
      `*Enquiry Topic:* ${formData.subject}`,
      `*Message:* ${formData.message.trim()}`,
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
          Thank You for Reaching Out!
        </h3>
        <p style={{ maxWidth: '480px', margin: '0 auto 24px' }}>
          Your enquiry details have been prepared for WhatsApp (<strong>+91 81216 72244</strong>). A
          representative from <strong>SME Growth Circle Foundation</strong> will respond to your
          enquiry shortly.
        </p>
        <button
          type="button"
          className="btn btn-navy"
          onClick={() => {
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
            });
            setSubmitted(false);
          }}
        >
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
          <label className="form-label" htmlFor="contact-company">
            Organization / Business Name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            className="form-input"
            placeholder="Enter your business name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="form-input"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">
            Phone / Mobile Number *
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full">
          <label className="form-label" htmlFor="contact-subject">
            Enquiry Topic *
          </label>
          <select
            id="contact-subject"
            name="subject"
            className="form-select"
            value={formData.subject}
            onChange={handleChange}
            required
          >
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
            name="message"
            rows={4}
            className="form-textarea"
            placeholder="How can SME Growth Circle Foundation assist your business?"
            value={formData.message}
            onChange={handleChange}
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

