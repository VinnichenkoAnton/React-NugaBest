import { TabActivityPropsTypes } from '../Tabs.types';

const TabActivity: React.FC<TabActivityPropsTypes> = ({ id, activeTab, children }) => {
  return activeTab === id ? <>{children}</> : null;
};

export default TabActivity;
