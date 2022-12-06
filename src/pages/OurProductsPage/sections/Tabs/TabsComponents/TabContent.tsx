import TabItem from './TabItem';
import classes from '../Tabs.module.scss';

import { TabListTypes, MappedArrayType } from '../../../../../types/GlobalTypes';

const TabContent: React.FC<{ contentList: TabListTypes[] }> = ({ contentList }) => {
  const items: MappedArrayType = contentList.map((item) => {
    return <TabItem key={item.id} id={item.id} img={item.img} title={item.title} />;
  });
  return <ul className={classes.tabs__contenttab}>{items}</ul>;
};
export default TabContent;
