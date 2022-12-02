import classNames from 'classnames';
import classes from './Title.module.scss';

const Title: React.FC<{ className?: string; text: string; marginBottom?: string }> = ({
  className,
  text,
  marginBottom,
}) => {
  const titleClasses: string = classNames(
    classes.title,
    className,
    classes[`title_${marginBottom}`],
  );

  return <h2 className={titleClasses}>{text}</h2>;
};

export default Title;
