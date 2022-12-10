import React from 'react';
import { menus } from './menus';
import MenuItems from './menuItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menus.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
