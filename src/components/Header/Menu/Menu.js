import React from 'react'
import MenuList from './MenuList';
import { useScroll } from '../../../hooks/useScroll';

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props

  const { isScrolled } = useScroll()
  return (
    <>
      <nav className={`nav`} >
        <ul className={`${'nav__menu menu'} ${isNavbarOpen ? `${'nav__hide'}` : `${'nav__block'}`} `}>
          {<MenuList></MenuList>}
        </ul>
      </nav>
    </>
  )
}


export default Menu
