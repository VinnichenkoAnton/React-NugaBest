import classNames from 'classnames';
import classes from './Title.module.scss';

import { ConcatinatedClassesType } from '../../../types/GlobalTypes';
import { TitlePropsTypes } from './Title.type';

const Title: React.FC<TitlePropsTypes> = ({ className, text, marginBottom }) => {
  const titleClasses: ConcatinatedClassesType = classNames(
    classes.title,
    className,
    classes[`title_${marginBottom}`],
  );

  return <h2 className={titleClasses}>{text}</h2>;
};

export default Title;
