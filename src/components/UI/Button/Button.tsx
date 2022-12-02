import classNames from 'classnames';
import classes from './Button.module.scss';

import { ButtonPropsTypes } from './ButtonTypes';

const Button: React.FC<ButtonPropsTypes> = ({
  className,
  buttonActivity,
  type,
  onClick,
  children,
}) => {
  const buttonClasses: string = classNames(
    classes.button,
    className,
    classes[`button_${buttonActivity}`],
  );
  return (
    <button className={buttonClasses} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
