import React, { useContext, useState, useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../../context';

export const MenuTree = () => {
    const { elements } = useContext(HeaderDataTeamContext);
    const [menu, setMenu] = useState(elements);
    const root = elements[0];
    const menuIds = root.childIds;
    const [showSublist, setShowSublist] = useState(false);
    const isMobile = window.innerWidth <= 900;
    const eventToUse = isMobile ? 'onClick' : 'onMouseEnter';
    const [showMenuTextItem, setShowMenuTextItem] = useState(false);

    const MenuItemText = ( {id, menuElementById} ) => {
        const menuElement = menuElementById[id];
        
        return (
            <li
                className='menu__sublist__item--text'
                style={{height: '100%'}}
            >
                {menuElement.name}
            </li>
        );
    }

    const MenuList = ({ id, menuElementById }) => {
        const menuElement = menuElementById[id];
        const childIds = menuElement.childIds;
        const arrowDown = menuElement?.arrowDown

        const handleSublist = useCallback(
            id => {
                setShowSublist(prevState => prevState === id ? null : id);
            },[]
        );

        return (
         
                <li
                className="menu__listItem"
                onClick={() => handleSublist(id)} 
            >
                <div>{menuElement.name}</div>
                {arrowDown && (
                    <FaChevronDown style={{marginLeft: '5px'}}/>
                )}
                {showSublist === id  && childIds.length > 0 && (
                <ul 
                    className='menu__sublist' 
                    style={{ zIndex: 200 }}
                    onMouseLeave={() => handleSublist(id)}
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
        const handleText = useCallback((itemId, event) => {
            event.stopPropagation()
            setShowMenuTextItem(prevState => prevState === itemId ? null : itemId);
        }, [showMenuTextItem]);
        return (
            <li
                className="menu__sublist__item"
                onClick={(event) => handleText(id, event)} 
            >
            <div>{menuElement.name}</div>
            {showMenuTextItem === id && childIds.length > 0 && (
                <ul 
                    className='menu__text' 
                    style={{ zIndex: 200 }}
                    onMouseLeave={(event) => handleText(id, event)}
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
    <ul className={`menu`}>
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