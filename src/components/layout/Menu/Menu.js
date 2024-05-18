import React from 'react'
import MenuTree from './MenuList';
import SelectLanguage from '../../features/SelectLanguage';
import { useScroll } from '../../../hooks/useScroll';

export const Menu = (props) => {
  const {
    isDropdownOpen
  } = props

  const { isScrolled } = useScroll()
  return (
    <>
    

   <nav className='nav'>
    <MenuTree isDropdownOpen={isDropdownOpen} />
    <SelectLanguage className={'select'} isDropdownOpen={isDropdownOpen} ></SelectLanguage>
   </nav>
   
      
  


    </>
  )
}


export default Menu
