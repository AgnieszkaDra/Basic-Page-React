import React, { useContext, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../context';
import { useScroll } from '../../../hooks/useScroll';


  const MenuSubList = ( {id, menuElementById}) => {
    const menuElement = menuElementById[id];
    const childIds = menuElement.childIds;
    const [showChilds, setShowChilds] = useState(false);
    return (
      <li
        className="menu__item menu"
        onMouseEnter={() => setShowChilds(true)}
      >
        <div>{menuElement.name} </div>
        <div >{menuElement.text}</div>
        {showChilds && childIds.length > 0 && (
          <ul className='menu__sublist' style={{ zIndex: 200 }}
          onMouseLeave={() => setShowChilds(false)}
          >
            {/* {childIds.map(childId => (
              // <MenuSublist
              //   className='menu__sublist__item'
              //   key={childId}
              //   id={childId}
              //   parentId={id}
              //   menuElementById={menuElementById}
              // />
            ))} */}
          </ul>
        )}
      </li>
)}

const MenuItemText = ( {id, menuElementById}) => {
    const menuElement = menuElementById[id];
    const childIds = menuElement.childIds;
    const [showChilds, setShowChilds] = useState(false);
    return (
      <div  className="menu__item menu"  onMouseEnter={() => setShowChilds(true)}>
         {showChilds && childIds.length > 0 && (
          <div>
          {menuElement.name}    
          </div>


         )}
       
      </div>
    )
  }

  const MenuList = ({ id, menuElementById }) => {
    const menuElement = menuElementById[id];
    const childIds = menuElement.childIds;
    const [showChilds, setShowChilds] = useState(false);

    const MenuTree = ({ id, menuElementById }) => {
      const menuElement = menuElementById[id];
      const childIds = menuElement.childIds;
      const [showChilds, setShowChilds] = useState(false);
    
    return (
      <li
        className="menu__item menu"
        onMouseEnter={() => setShowChilds(true)}
      >
        <div>{menuElement.name} </div>
        <div >{menuElement.text}</div>
        {showChilds && childIds.length > 0 && (
          <ul className='menu__sublist' style={{ zIndex: 200 }}
          onMouseLeave={() => setShowChilds(false)}
          >
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
}

export default MenuList;