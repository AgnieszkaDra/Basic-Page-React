import React, { useContext, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../context';
import { useScroll } from '../../../hooks/useScroll';

export const MenuTree = ({ isNavbarOpen }) => {
    const { elements } = useContext(HeaderDataTeamContext);
    const [menu, setMenu] = useState(elements);
    const root = elements[0];
    const menuIds = root.childIds;
    const [showSublist, setShowSublist] = useState(false);


    const MenuItemText = ( {id, menuElementById} ) => {
        const menuElement = menuElementById[id];
        const childIds = menuElement.childIds;
        
        return (
            <div 
                className='menu__sublist__item--text'
                style={{height: '100%'}}
            >
            <div>{menuElement.name}</div>
            </div>
        );
    }

    const MenuList = ({ id, menuElementById }) => {
            const menuElement = menuElementById[id];
            const childIds = menuElement.childIds;
        
            
            return (
            <li
                className="menu__listItem menu"
                onMouseEnter={() => setShowSublist(true)}
            
            >
                <div>{menuElement.name} </div>
                {showSublist && childIds.length > 0 && (
                <ul 
                    className='menu__sublist' 
                    style={{ zIndex: 200 }}
                    onMouseLeave={() => setShowSublist(false)}
                >
                    {childIds.map(childId => (
                    <MenuSubList
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

    const MenuSubList = ({ id, menuElementById }) => {
        const menuElement = menuElementById[id];
        const childIds = menuElement.childIds;
        const [showMenuTextItem, setShowMenuTextItem] = useState(false);
        return (
            <li
                className="menu__sublist__item"
                onMouseEnter={() => setShowMenuTextItem(true)}
            >
            <div>{menuElement.name}</div>
            {showMenuTextItem && childIds.length > 0 && (
                <ul 
                    className='menu__text' 
                    style={{ zIndex: 200 }}
                >
                    {childIds.map(childId => (
                    <MenuItemText
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
        <MenuList
          key={id}
          id={id}
          parentId={0}
          menuElementById={menu}
        />
      ))}
    </ul>
  );
};

export default MenuTree;