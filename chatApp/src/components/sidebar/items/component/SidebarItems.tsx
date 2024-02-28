import React from 'react';
import Indicator from '../../indicator';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  const isMessagesItem = label === 'Messages';

  return (
    <div className="flex items-center p-4 hover:bg-green-100 cursor-pointer w-full">
      <span className="text-green-400">{icon}</span>
      <span className="ml-4">{label}</span>
      {isMessagesItem && <Indicator value='2' />}
    </div>
  );
};

export default SidebarItem;
