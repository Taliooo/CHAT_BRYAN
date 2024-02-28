import React from 'react';
import { Icon } from '@iconify/react';
import SidebarItem from '../../items';

interface SidebarCategoryProps {
  title: string;
  items: { icon: any; label: string }[];
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({ title, items }) => {
  return (
    <div className="mb-4 space-y-2 transition duration-300 ease-in-out bg-gray-100">
      <h2 className="text-base font-semibold text-gray-400 mb-2 ml-4 cursor-default">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center cursor-pointer">
            <SidebarItem icon={<Icon icon={item.icon} />} label={item.label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategory;
