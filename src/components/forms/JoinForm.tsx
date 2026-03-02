import type { FormEvent } from 'react';
import { useState } from 'react';

const WEB3FORMS_KEY = '236d967c-3ac9-495a-a50e-0e0f16d0f256';

interface JoinFormData {
  accountType: string;
  businessName: string;
  email: string;
  industry: string;
  volume: string;
  message: string;
}

const INDUSTRY_OPTIONS = [
  'Select your industry',
  'Digital Asset Platforms',
  'FX & Trading Platforms',
  'Botanical & Wellness',
  'Nutritional Sciences',
  'Gaming & Entertainment',
  'Premium Content Platforms',
  'Travel & Hospitality',
  'Subscription Commerce',
  'Companion & Social Platforms',
  'Course Sellers & EdTech',
  'Independent Content Creators',
  'E-commerce & Retail',
  'SaaS & Technology',
  'Other',
];

const VOLUME_OPTIONS = [
  'Select monthly volume',
  'Under £50K',
  '£50K – £250K',
  '£250K – £1M',
  '£1M – £5M',
  'Over £5M',
];

export function JoinForm() {
  const [formData, setFormData] = useState<JoinFormData>({
    accountType: '',
    businessName: '',
    email: '',
    industry: 'Select your industry',
    volume: 'Select monthly volume',
    message: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.accountType) { setError('Please select Business or Individual.'); return; }
    if (!formData.businessName.trim()) { setError('Please enter your business or individual name.'); return; }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setError('Please enter a valid email address.'); return; }
    if (formData.industry === 'Select your industry') { setError('Please select your industry.'); return; }
    if (formData.volume === 'Select monthly volume') { setError('Please select your monthly volume.'); return; }

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          to: 'info@mtrxpay.com',
          subject: `New Founding Partner Application: ${formData.businessName}`,
          from_name: 'MTRX PAY Join Now',
          account_type: formData.accountType,
          business_name: formData.businessName,
          email: formData.email,
          industry: formData.industry,
          monthly_volume: formData.volume,
          message: formData.message || 'N/A',
        }),
      });

      const result = await response.json();
      if (result.success) { setSubmitted(true); }
      else { setError('Something went wrong. Please try again.'); }
    } catch {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mjn-success">
        <div className="mjn-success-ring">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M14 26L22 34L38 18" stroke="#C5A44E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mjn-success-h3">Application Received</h3>
        <p className="mjn-success-p">Thank you for applying to the Founding Partner Programme. Our team will review your application and be in touch within 48 hours.</p>
      </div>
    );
  }

  return (
    <form className="mjn-form" onSubmit={handleSubmit} noValidate>

      {/* Account type */}
      <div className="mjn-field-group">
        <span className="mjn-label">
          Account Type
          {!formData.accountType && <span className="mjn-label-hint">required</span>}
        </span>
        <div className="mjn-type-toggle">
          {['Business', 'Individual'].map(type => (
            <button
              key={type}
              type="button"
              className={`mjn-type-btn${formData.accountType === type ? ' active' : ''}`}
              onClick={() => { setFormData(prev => ({ ...prev, accountType: type })); if (error) setError(''); }}
            >
              {type === 'Business' && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mjn-type-icon">
                  <rect x="1" y="5" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4 5V3.5A2.5 2.5 0 0 1 9 3.5V5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              )}
              {type === 'Individual' && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mjn-type-icon">
                  <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 13c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              )}
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="mjn-field-group">
        <label className="mjn-label" htmlFor="jn-businessName">
          {formData.accountType === 'Individual' ? 'Your Full Name' : 'Business Name'}
        </label>
        <div className="mjn-input-wrap">
          <input
            type="text"
            id="jn-businessName"
            name="businessName"
            className="mjn-field"
            value={formData.businessName}
            onChange={handleChange}
            placeholder={formData.accountType === 'Individual' ? 'Your full name' : 'Your company name'}
            autoComplete={formData.accountType === 'Individual' ? 'name' : 'organization'}
          />
        </div>
      </div>

      {/* Email */}
      <div className="mjn-field-group">
        <label className="mjn-label" htmlFor="jn-email">Email Address</label>
        <div className="mjn-input-wrap">
          <input
            type="email"
            id="jn-email"
            name="email"
            className="mjn-field"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@domain.com"
            autoComplete="email"
          />
        </div>
      </div>

      {/* Industry + Volume */}
      <div className="mjn-field-row">
        <div className="mjn-field-group">
          <label className="mjn-label" htmlFor="jn-industry">Industry</label>
          <div className="mjn-select-wrap">
            <select id="jn-industry" name="industry" className="mjn-field mjn-select" value={formData.industry} onChange={handleChange}>
              {INDUSTRY_OPTIONS.map(opt => (
                <option key={opt} value={opt} disabled={opt === 'Select your industry'}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mjn-field-group">
          <label className="mjn-label" htmlFor="jn-volume">Monthly Volume</label>
          <div className="mjn-select-wrap">
            <select id="jn-volume" name="volume" className="mjn-field mjn-select" value={formData.volume} onChange={handleChange}>
              {VOLUME_OPTIONS.map(opt => (
                <option key={opt} value={opt} disabled={opt === 'Select monthly volume'}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mjn-field-group">
        <label className="mjn-label" htmlFor="jn-message">
          Additional Notes <span className="mjn-optional">(optional)</span>
        </label>
        <textarea
          id="jn-message"
          name="message"
          className="mjn-field mjn-textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business, current payment challenges, or what you're looking for..."
          rows={3}
        />
      </div>

      {error && (
        <div className="mjn-error">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#FF6B6B" strokeWidth="1.2"/>
            <path d="M7 4.5V7.5M7 9.5V9.6" stroke="#FF6B6B" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          {error}
        </div>
      )}

      <button type="submit" className="mjn-submit" disabled={submitting}>
        {submitting ? (
          <>
            <span className="mjn-submit-spinner" />
            Submitting Application…
          </>
        ) : (
          <>
            Apply for Founding Partner Status
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mjn-submit-arrow">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      <p className="mjn-form-footnote">* Onboarding cost remains applicable. Founding Partner subscription waiver applies for the first 90 days.</p>
    </form>
  );
}
