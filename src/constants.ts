import { LoanType } from './types.ts';

export const LOAN_TYPES: LoanType[] = [
  {
    id: 'business',
    title: 'Business Loan',
    minAmount: 50000,
    maxAmount: 300000,
    description: 'Grow your business, start a new venture or empower your farming operations.',
    benefits: ['Quick disbursal in 24-48 hours', 'Minimal documentation', 'Flexible tenure'],
    target: 'Small business owners, startups, farmers',
    icon: 'Briefcase'
  },
  {
    id: 'home',
    title: 'Home Loan',
    minAmount: 300000,
    maxAmount: 1000000,
    description: 'Build your dream home or renovate your existing building with ease.',
    benefits: ['Up to ₹10 Lakhs', 'Easy repayment options', 'Expert guidance'],
    target: 'Rural house construction & renovation',
    icon: 'Home'
  }
];

export const COMPANY_DETAILS = {
  name: 'Satyam Microfinance Private Limited',
  tagline: 'Empowering Rural Dreams with Easy Loans',
  phone: '+91 98765 43210',
  email: 'support@satyammicrofinance.in',
  address: 'Plot No. 45, Second Floor, Rural Enterprise Hub, Sector 12, Lucknow, UP - 226001',
  whatsapp: '919876543210'
};
