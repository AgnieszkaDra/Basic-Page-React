import React, { useContext, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../context';
import { useScroll } from '../../../hooks/useScroll';

export const MenuList = ({ isNavbarOpen }) => {
  const { elements } = useContext(HeaderDataTeamContext);
  
  const [menu, setMenu] = useState(elements);
  const root = elements[0];
  const menuIds = root.childIds;
  const { isScrolled } = useScroll();

  const [hoveredListItem, setHoveredListItem] = useState(null);
  const [hoveredSubListItem, setHoveredSubListItem] = useState(null);
  const [showSubList, setShowSubList] = useState(null);

    const [child, setChilds] = useState([]);
    console.log(child.childIds)

  const handleMouseEnterListItem = (key) => {
    setHoveredListItem(key);
  };

  const handleMouseEnterSubListItem = (key) => {
    setHoveredSubListItem(key);
  };

  const handleMouseEnterSubSubListItem = (key) => {
    setShowSubList(key);
  };



  const MenuTree = ({ id, parentId,  menuElementById, onComplete }) => {
    const menuElement = menuElementById[id];
    const childIds = menuElement.childIds;
    // const childIds = child.childIds

    
    return (
      <li
        className="menu__item menu"
        onClick={() => {
          onComplete(parentId, id);
        }}
        onMouseEnter={() => handleMouseEnterListItem(menuElement)}
      >
        {menuElement.name}
        {childIds.length > 0 && (
          <ul>
            {childIds.map(childId => (
              <MenuTree
                key={childId}
                id={childId}
                parentId={id}
                menuElementById={menuElementById}
                onComplete={onComplete}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  function handleComplete(parentId, childId) {
    // const parent = parentId;
    const parent = elements[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds
        .filter(id => id == childId)
    };

    
   setMenu({
      ...menu,
     
      [parentId]: nextParent
    });
}


  return (
    <ul className={`nav__menu menu ${isNavbarOpen ? 'nav__hide' : 'nav__block'}`}>
      {menuIds.map(id => (
        <MenuTree
          key={id}
          id={id}
          parentId={0}
          menuElementById={menu}
          onComplete={handleComplete}
        />
      ))}
    </ul>
  );
};

export default MenuList;