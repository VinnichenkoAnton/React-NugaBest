import { useState } from 'react';

import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/UI/Title/Title';
import TabContent from './TabsComponents/TabContent';
import TabNavItem from './TabsComponents/TabNavItem';
import TabActivity from './TabsComponents/TabActivity';

import classes from './Tabs.module.scss';

import { firstTabList } from '../../../../data/data';
import { secondTabList } from '../../../../data/data';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <section className={classes.tabs}>
      <Container>
        <Title text="NAŠA PROIZVODNJA" />
        <ul className={classes.tabs__nav}>
          <TabNavItem title="Kreveta" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem
            title="Ostala oprema"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className="tabs__outlet">
          <TabActivity id="tab1" activeTab={activeTab}>
            <TabContent contentList={firstTabList} />
          </TabActivity>
          <TabActivity id="tab2" activeTab={activeTab}>
            <TabContent contentList={secondTabList} />
          </TabActivity>
        </div>
      </Container>
    </section>
  );
};

export default Tabs;
