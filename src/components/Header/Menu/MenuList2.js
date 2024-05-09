import React, { useContext, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { HeaderDataTeamContext } from '../../context';
import { useScroll } from '../../../hooks/useScroll';

export const MenuList = (props) => {
  const {
    isNavbarOpen
  } = props

  const { elements } = useContext(HeaderDataTeamContext);
  const root = elements[0]
  const menuIds = root.childIds
  // console.log(menuIds)
  const [hoveredListItem, setHoveredListItem] = useState(null);
  const [hoveredSubListItem, setHoveredSubListItem] = useState(null);
  const [showSubList, setShowSubList] = useState(null);
  const { isScrolled } = useScroll()
  


  const handleMouseEnterListItem = (key) => {
    setHoveredListItem(key);
  };

  const handleMouseEnterSubListItem = (key) => {
    setHoveredSubListItem(key);
  };

  const handleMouseEnterSubSubListItem = (key) => {
    setShowSubList(key);
  };

  const isMobile = window.innerWidth <= 900;
  const eventToUse = isMobile ? 'onClick' : 'onMouseEnter';

  function onAction(parentId, childId) {
    const parent = menuIds[parentId];
    console.log(parent)
    // Create a new version of the parent place
    // that doesn't include this child ID.
    // const nextParent = {
    //   ...parent,
    //   childIds: parent.childIds
    //     .filter(id => id !== childId)
    // };
    // // Update the root state object...
    // setPlan({
    //   ...plan,
    //   // ...so that it has the updated parent.
    //   [parentId]: nextParent
    // });
  }
  function MenuTree({ id, menuElementById }) {
   
    const menuElement = menuElementById[id]
    const childIds = menuElement.childIds
    const onClick = onClick
    const isMobile = window.innerWidth <= 900;
    const eventToUse = isMobile ? 'onClick' : 'onMouseEnter';
    return (
      <li
        className={`menu__item menu`}
        onClick={() => onAction()}
        // {...{ [eventToUse]: isMobile ? () => handleMouseEnterListItem(menuElement) : () => handleMouseEnterListItem(menuElement) }}
      >
        {menuElement.name}
        {childIds.length > 0 && (
          <ul
          className={`${'menu__sublist'} ${hoveredListItem === menuElement ? `${'menu__sublist--block'}` : `${'menu__sublist--hide'}`}${isScrolled ? `${' hidden'}` : '' } `}
          >
            {childIds.map(childId => (
              <MenuTree
                key={childId}
                id={childId}
                menuElementById={menuElementById}
              />
            ))}
          </ul>
        )}
      </li>
    )
  }


  // const renderListItem = (item) => {

  //   const isMobile = window.innerWidth <= 900;
  //   const eventToUse = isMobile ? 'onClick' : 'onMouseEnter';
  //   console.log(item)

  //   return (
  //     <>
  //       {item.elementList
  //         ?
  //         <>
  //           {/* <li
  //             key={item.id}
  //             className={`${item.className ? ` ${item.className} menu__item main` : 'menu__item'}`}
  //             {...{ [eventToUse]: isMobile ? () => handleMouseEnterListItem(item.id) : () => handleMouseEnterListItem(item.id) }}
  //           >
  //             {item.className === 'menu__item--parent' ?<div className='menu__item--parent--title'>{item.name}<FaChevronDown /></div>  : <div className='menu__item--parent--title'> <a href={`#${item.idSection}`}>{item.name}</a></div>}
  //             {item.parentSubList
  //               ?
  //               <ul className={`${'menu__sublist'} ${hoveredListItem === item.id ? `${'menu__sublist--block'}` : `${'menu__sublist--hide'}`}${isScrolled ? `${' hidden'}` : '' } `}  >
  //                 {elements
  //                   .filter((el) => el.childFor === item.name)
  //                   .map((el) => (
  //                     <li
  //                       key={el.id}
  //                       className={`${item.className ? ` ${item.className} menu__sublist__item` : 'menu__item'}`}
  //                       {...{ [eventToUse]: isMobile ? () => handleMouseEnterSubListItem(el.id) : () => handleMouseEnterSubSubListItem(el.id) }}
  //                     >
  //                       {el.name}
  //                       <ul
  //                         className={`${'menu__sub-sublist'} 
  //                       ${hoveredSubListItem === el.id ? `${'menu__sub-sublist--block'}` : `${'menu__sub-sublist--hide'}`}
  //                       ${showSubList === el.id ? `${'menu__sub-sublist--block'}` : ''}
  //                       `}>
  //                         {elements
  //                           .filter((el2) => el2.childFor === el.name)
  //                           .map((el2) => (
  //                             <li
  //                               key={el2.id}
  //                             >{el2.name}
  //                             </li>
  //                           ))
  //                         }
  //                       </ul>
  //                     </li>))
  //                 }
  //               </ul>
  //               : ""
  //             }

  //           </li> */}
  //         </>
  //         : ""
  //       }
  //     </>
  //   )
  // }


  return (
    <>
      {
               <ul className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`} `}>
        {menuIds.map((id) => {
          return (
            <MenuTree
              key={id}
              id={id}
              menuElementById={elements}
            /> 
          )
            }
      
        )}
        </ul>
         
      }
    </>
  )

}


export default MenuList