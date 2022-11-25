import classes from './Button.module.scss';

const Button: React.FC<{
  children: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  className?: string;
}> = ({ children, type, onClick, className }) => {
  const buttonClasses: string = `${classes.button} ${className}`;
  return (
    <button className={buttonClasses} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
