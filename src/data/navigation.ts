export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Product Proposition', path: '/product' },
  { label: 'Partners', path: '#', disabled: true },
  { label: 'Contact', path: '#', disabled: true },
] as const;

export const footerColumns = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '#' },
    { label: 'Contact', path: '#' },
    { label: 'Press', path: '#' },
  ],
  resources: [
    { label: 'Documentation', path: '#' },
    { label: 'API Reference', path: '#' },
    { label: 'Blog', path: '#' },
    { label: 'Support', path: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
    { label: 'Cookie Policy', path: '#' },
    { label: 'Compliance', path: '#' },
  ],
} as const;
