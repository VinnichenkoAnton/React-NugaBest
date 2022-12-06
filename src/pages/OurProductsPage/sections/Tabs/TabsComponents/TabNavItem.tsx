import Button from '../../../../../components/UI/Button/Button';

import { ClickHandlerType } from '../../../../../types/GlobalTypes';
import { TabNavItemPropsTypes } from '../Tabs.types';

const TabNavItem: React.FC<TabNavItemPropsTypes> = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick: ClickHandlerType = () => {
    setActiveTab(id);
  };

  return (
    <li>
      <Button
        onClick={handleClick}
        type="button"
        buttonActivity={activeTab === id ? '' : 'inactive'}
      >
        {title}
      </Button>
    </li>
  );
};
export default TabNavItem;
