import React, { useState } from 'react';
import Sidebar from '../../container';

const SidebarContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  )
};

export default SidebarContainer;
