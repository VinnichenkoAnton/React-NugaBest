import classes from './Spinner.module.scss';

const Spinner = () => {
    return (
      <div>
        <svg role="img" aria-label='Spinner' className={classes.spinner} viewBox="0 0 50 50">
            <circle className={classes.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      </div>
    );
  };
  
  export default Spinner;