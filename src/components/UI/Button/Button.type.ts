export interface ButtonPropsTypes {
  className?: string;
  buttonActivity?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
}
