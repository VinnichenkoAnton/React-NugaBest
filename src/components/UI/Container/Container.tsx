import classes from './Container.module.scss';

import { ConcatinatedClassesType } from '../../../types/GlobalTypes';
import { ContainerPropsTypes } from './Container.type';

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const containerClasses: ConcatinatedClassesType = `${classes.container} ${props.className}`;

  return <div className={containerClasses}>{props.children}</div>;
};

export default Container;
