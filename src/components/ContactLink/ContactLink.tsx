import classes from './ContactLink.module.scss';

import { ConcatinatedClassesType } from '../../types/GlobalTypes';
import { ContactLinkPropsTypes } from './ContactLink.type';
const ContactLink: React.FC<ContactLinkPropsTypes> = ({ href, Icn, text, className }) => {
  const contactLinkClasses: ConcatinatedClassesType = `${classes.contact} ${className}`;
  return (
    <a href={href} className={contactLinkClasses}>
      <Icn className={classes.contact__icn} />
      <p className={classes.contact__text}>{text}</p>
    </a>
  );
};

export default ContactLink;
