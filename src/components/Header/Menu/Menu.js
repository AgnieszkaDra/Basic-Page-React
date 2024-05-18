import React from 'react'
import MenuTree from './MenuList';
import SelectLanguage from '../SelectLanguage';
import { useScroll } from '../../../hooks/useScroll';

export const Menu = (props) => {
  const {
    isNavbarOpen
  } = props

  const { isScrolled } = useScroll()
  return (
    <>
    

   <nav className='nav'>
    <MenuTree isNavbarOpen={isNavbarOpen} />
    <SelectLanguage className={'select'} isNavbarOpen={isNavbarOpen} ></SelectLanguage>
   </nav>
   
      
  


    </>
  )
}


export default Menu
