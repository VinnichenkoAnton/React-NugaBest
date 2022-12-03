import classNames from 'classnames';
import classes from './Button.module.scss';

import { ConcatinatedClassesType } from '../../../types/GlobalTypes';
import { ButtonPropsTypes } from './Button.type';

const Button: React.FC<ButtonPropsTypes> = ({
  className,
  buttonActivity,
  type,
  onClick,
  children,
}) => {
  const buttonClasses: ConcatinatedClassesType = classNames(
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
