import React from 'react'
import MenuTree from './MenuList';
import { useScroll } from '../../../hooks/useScroll';

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props

  const { isScrolled } = useScroll()
  return (
    <>
     <nav className="nav">

   
   
      <MenuTree isNavbarOpen={isNavbarOpen} />
  

</nav>
    </>
  )
}


export default Menu
