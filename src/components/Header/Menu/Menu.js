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
     <nav className="nav">

   
   
      <MenuList isNavbarOpen={isNavbarOpen} />
  

</nav>
    </>
  )
}


export default Menu
