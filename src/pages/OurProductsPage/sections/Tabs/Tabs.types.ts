export interface TabActivityPropsTypes {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}

export interface TabItemPropsTypes {
  title: string;
  img: string;
  id: string;
}

export interface TabNavItemPropsTypes {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}
