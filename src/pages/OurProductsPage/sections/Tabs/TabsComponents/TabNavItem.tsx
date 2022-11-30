import classNames from 'classnames';
import Button from '../../../../../components/UI/Button/Button';

import classes from '../Tabs.module.scss';

const TabNavItem: React.FC<{
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}> = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick: () => void = () => {
    setActiveTab(id);
  };

  return (
    <li>
      <Button
        onClick={handleClick}
        type="button"
        className={classNames(
          classes.tabs__btn,
          activeTab === id && classes.tabs__btn_active,
          activeTab !== id && classes.tabs__btn,
        )}
      >
        {title}
      </Button>
    </li>
  );
};
export default TabNavItem;
