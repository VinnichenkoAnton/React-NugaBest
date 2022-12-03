import TabItem from './TabItem';
import classes from '../Tabs.module.scss';

import { TabListTypes } from '../../../../../types/GlobalTypes';
import { TabContentItems } from '../Tabs.types';

const TabContent: React.FC<{ contentList: TabListTypes[] }> = ({ contentList }) => {
  const items: TabContentItems = contentList.map((item) => {
    return <TabItem key={item.id} id={item.id} img={item.img} title={item.title} />;
  });
  return <ul className={classes.tabs__contenttab}>{items}</ul>;
};
export default TabContent;
