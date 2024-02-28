import React from 'react';

interface SidebarTitleProps {
  title: string;
  className?: string;
}

const SidebarTitle: React.FC<SidebarTitleProps> = ({ title, className = '' }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export default SidebarTitle;
