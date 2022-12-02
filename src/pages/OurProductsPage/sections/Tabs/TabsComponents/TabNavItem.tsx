import Button from '../../../../../components/UI/Button/Button';

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
        buttonActivity={activeTab === id ? '' : 'inactive'}
      >
        {title}
      </Button>
    </li>
  );
};
export default TabNavItem;
