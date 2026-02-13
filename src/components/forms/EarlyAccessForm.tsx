import type { FormEvent } from 'react';
import { useState } from 'react';

const WEB3FORMS_KEY = '236d967c-3ac9-495a-a50e-0e0f16d0f256';

interface FormData {
  accountType: string;
  businessName: string;
  email: string;
  industry: string;
  volume: string;
}

const INDUSTRY_OPTIONS = [
  'Select your industry',
  'E-commerce & Retail',
  'SaaS & Technology',
  'Content Creators',
  'Gaming & iGaming',
  'Cryptocurrency & Web3',
  'CBD & Cannabis',
  'Nutraceuticals',
  'Forex & Trading',
  'Travel & Tourism',
  'Adult Entertainment',
  'Subscription Services',
  'Other',
];

const VOLUME_OPTIONS = [
  'Select volume',
  'Under £50K',
  '£50K - £250K',
  '£250K - £1M',
  'Over £1M',
];

export function EarlyAccessForm() {
  const [formData, setFormData] = useState<FormData>({
    accountType: '',
    businessName: '',
    email: '',
    industry: 'Select your industry',
    volume: 'Select volume',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.accountType || formData.accountType === 'Select account type') {
      setError('Please select Business or Individual.');
      return;
    }

    if (!formData.businessName.trim()) {
      setError('Please enter your business or individual name.');
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!formData.industry || formData.industry === 'Select your industry') {
      setError('Please select your industry.');
      return;
    }

    if (!formData.volume || formData.volume === 'Select volume') {
      setError('Please select your monthly processing volume.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Early Access Request - ${formData.businessName}`,
          from_name: 'MTRX PAY Website',
          account_type: formData.accountType,
          business_name: formData.businessName,
          email: formData.email,
          industry: formData.industry,
          monthly_volume: formData.volume,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#C5A44E" fillOpacity="0.15" />
            <circle cx="32" cy="32" r="24" fill="#C5A44E" fillOpacity="0.25" />
            <path
              d="M22 32L29 39L42 26"
              stroke="#C5A44E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3>Thank You!</h3>
        <p>We've received your registration. Our team will be in touch soon with next steps.</p>
      </div>
    );
  }

  return (
    <form className="early-access-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label className="toggle-label">
          Account Type {!formData.accountType && <span className="required-hint">- Please select one</span>}
        </label>
        <div className="account-type-toggle">
          <button
            type="button"
            className={`toggle-btn ${formData.accountType === 'Business' ? 'active' : ''}`}
            onClick={() => setFormData(prev => ({ ...prev, accountType: 'Business' }))}
          >
            Business
          </button>
          <button
            type="button"
            className={`toggle-btn ${formData.accountType === 'Individual' ? 'active' : ''}`}
            onClick={() => setFormData(prev => ({ ...prev, accountType: 'Individual' }))}
          >
            Individual
          </button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="businessName">{formData.accountType === 'Individual' ? 'Your Name' : 'Business Name'}</label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder={formData.accountType === 'Individual' ? 'Your full name' : 'Your business name'}
          autoComplete={formData.accountType === 'Individual' ? 'name' : 'organization'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          autoComplete="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="industry">Industry Category</label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
        >
          {INDUSTRY_OPTIONS.map((option) => (
            <option key={option} value={option} disabled={option === 'Select your industry'}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="volume">Monthly Processing Volume</label>
        <select
          id="volume"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
        >
          {VOLUME_OPTIONS.map((option) => (
            <option key={option} value={option} disabled={option === 'Select volume'}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="btn btn-gold btn-animated" style={{ width: '100%' }} disabled={submitting}>
        {submitting ? 'Submitting...' : 'Request Early Access'}
      </button>
    </form>
  );
}
