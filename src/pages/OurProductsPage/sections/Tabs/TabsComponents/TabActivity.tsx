const TabActivity: React.FC<{ id: string; activeTab: string; children: React.ReactNode }> = ({
  id,
  activeTab,
  children,
}) => {
  return activeTab === id ? <>{children}</> : null;
};

export default TabActivity;
