export type Page = 'home' | 'about' | 'services' | 'cibil' | 'apply' | 'contact';

export interface LoanType {
  id: string;
  title: string;
  minAmount: number;
  maxAmount: number;
  description: string;
  benefits: string[];
  target: string;
  icon: string;
}
