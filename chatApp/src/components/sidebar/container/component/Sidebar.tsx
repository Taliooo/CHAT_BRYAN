import React from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-codicon/menu';
import home from '@iconify/icons-codicon/home';
import person from '@iconify/icons-codicon/person';
import personAdd from '@iconify/icons-codicon/person-add'
import messages from '@iconify/icons-codicon/comment-discussion';
import card from '@iconify/icons-codicon/credit-card';
import user from '@iconify/icons-codicon/account';
import SidebarCategory from '../../category';
import SidebarTitle from '../../title';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: home, label: 'Dashboard' },
    { icon: person, label: 'People' },
    { icon: messages, label: 'Messages' },
    { icon: personAdd, label: 'Groups' }
  ];
  const extraItems = [
    { icon: card, label: 'Giving' },
    { icon: user, label: 'My Profile' }
  ]

  return (
    <div className={`bg-gray-100 h-full w-64 ${isOpen ? 'translate-x-0' : '-translate-x-64'} fixed top-0 left-0 transition-transform duration-300 ease-in-out md:translate-x-0`}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="cursor-pointer" onClick={toggleSidebar}>
          <Icon icon={menuIcon} className="text-black-500 w-8 h-8" />
          </div>
          <SidebarTitle title="floakly" className="bg-white-700 text-green-700 p-4 ml-2" />
        </div>
      </div>
      <div className="mt-4">
        <SidebarCategory title="Menu" items={menuItems} />
      </div>
      <div className="mt-4">
        <SidebarCategory title="" items={extraItems} />
      </div>
    </div>
  );
};

export default Sidebar;
