import { useNavigate } from 'react-router-dom';

import classes from './GoBack.module.scss';

const GoBack: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.goback} onClick={() => navigate(-1)}>
      Povratak na prethodnu stranicu
    </div>
  );
};

export default GoBack;
