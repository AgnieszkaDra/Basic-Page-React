import React, { useContext, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../context';
import { useScroll } from '../../../hooks/useScroll';

export const MenuList = ({ isNavbarOpen }) => {
  const { elements } = useContext(HeaderDataTeamContext);
  
  const root = elements[0];
  const menuIds = root.childIds;
  const MenuTree = ({ id, menuElementById }) => {
    const menuElement = menuElementById[id];
    const childIds = menuElement.childIds;
    const [showChilds, setShowChilds] = useState(false);
    
    return (
      <li
        className="menu__item menu"
        onMouseEnter={() => setShowChilds(true)}
        onMouseLeave={() => setShowChilds(false)}
      >
        <div>{menuElement.name} </div>
        <div className={'menu__sub-sublist'}>{menuElement.text}</div>
        {showChilds && childIds.length > 0 && (
          <ul className='menu__sublist' style={{ zIndex: 200 }}>
            {childIds.map(childId => (
              <MenuTree
                className='menu__sublist__item'
                key={childId}
                id={childId}
                parentId={id}
                menuElementById={menuElementById}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <ul className={`nav__menu menu ${isNavbarOpen ? 'nav__hide' : 'nav__block'}`}>
      {menuIds.map(id => (
        <MenuTree
          key={id}
          id={id}
          parentId={0}
          menuElementById={menu}
        />
      ))}
    </ul>
  );
};

export default MenuList;