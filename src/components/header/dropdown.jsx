import React from 'react';
import MenuItems from './menuItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => {
        return (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        );
      })}
    </ul>
  );
};

export default Dropdown;
