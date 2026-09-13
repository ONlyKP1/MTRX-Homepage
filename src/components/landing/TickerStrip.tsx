/*
  What the platform does, with the cross-border half of it first.

  The list was almost entirely compliance, which describes a business
  defending itself rather than one selling. Compliance stays, because it is
  real and it matters to the people signing contracts, but it is no longer the
  whole answer to what MTRX is.
*/
const chips = [
  'Multi-Provider Routing',
  'Automatic Failover',
  '100+ Currencies',
  'Local Payment Methods',
  'Stablecoin Settlement',
  'Cross-Border by Default',
  'One Reconciliation',
  'KYB Verified',
  'KYC Compliant',
  'AML Monitored',
  'PEP Screened',
];

export function TickerStrip() {
  return (
    <div className="hp-ticker-wrap">
      <div className="hp-ticker">
        {[...chips, ...chips].map((chip, i) => (
          <span key={i} className="hp-ticker__chip"><span className="hp-ticker__dot" />{chip}</span>
        ))}
      </div>
    </div>
  );
}
