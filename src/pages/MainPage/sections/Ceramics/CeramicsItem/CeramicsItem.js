import classes from './CeramicsItem.module.scss';

const CeramicsItem = ({ Icn, title, description, order }) => {
  return (
    <li className={classes.ceramics__item}>
      <div>
        <div className={classes.ceramics__icn}>{<Icn />}</div>
      </div>
      <h3 className={classes.ceramics__subtitle}>{title}</h3>
      <ul>
        {description.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <div className={classes.ceramics__order}>{order + 1}</div>
    </li>
  );
};

export default CeramicsItem;
