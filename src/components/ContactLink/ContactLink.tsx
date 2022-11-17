import classes from './ContactLink.module.scss';

interface ContactLinkProps {
  href: string,
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  text: string
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, Icon, text }) => {
  return (
    <a href={href} className={classes.contact}>
      <Icon className={classes.contact__icn} />
      <p className={classes.contact__text}>{text}</p>
    </a>
  );
};

export default ContactLink;
