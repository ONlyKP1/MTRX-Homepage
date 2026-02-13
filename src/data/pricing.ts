export interface PricingTier {
  name: string;
  monthlyVolume: string;
  transactionFee: string;
  monthlyFee: string;
  chargebackReserve: string;
  settlement: string;
  dedicatedManager: string;
  featured: boolean;
  bestFor: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Emerging',
    monthlyVolume: 'Up to £50K',
    transactionFee: '3.2%',
    monthlyFee: '£0',
    chargebackReserve: '1.5%',
    settlement: 'T+3',
    dedicatedManager: 'No',
    featured: false,
    bestFor: 'Startups and new merchants',
  },
  {
    name: 'Growth',
    monthlyVolume: '£50K - £250K',
    transactionFee: '2.8%',
    monthlyFee: 'From £49',
    chargebackReserve: '1.2%',
    settlement: 'T+2',
    dedicatedManager: 'Shared',
    featured: true,
    bestFor: 'Growing businesses',
  },
  {
    name: 'Scale',
    monthlyVolume: '£250K - £1M',
    transactionFee: '2.2%',
    monthlyFee: 'From £149',
    chargebackReserve: '0.8%',
    settlement: 'T+1',
    dedicatedManager: 'Yes',
    featured: false,
    bestFor: 'Established merchants',
  },
  {
    name: 'Enterprise',
    monthlyVolume: '£1M+',
    transactionFee: '1.5%',
    monthlyFee: 'Custom',
    chargebackReserve: '0.5%',
    settlement: 'Same Day',
    dedicatedManager: 'Yes',
    featured: false,
    bestFor: 'High-volume operators',
  },
];

export const pricingNotes = [
  'Setup Fee: £0',
  'Compliance Costs: £350/year per merchant',
  'No long-term commitment required',
  'All prices in GBP. Pricing subject to underwriting review.',
];
