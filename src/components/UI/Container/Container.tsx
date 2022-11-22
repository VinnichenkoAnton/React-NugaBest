import { ReactNode } from 'react';
import classes from './Container.module.scss';

const Container: React.FC<{ className?: string; children: ReactNode }> = (props) => {
  const containerClasses = `${classes.container} ${props.className}`;

  return <div className={containerClasses}>{props.children}</div>;
};

export default Container;
