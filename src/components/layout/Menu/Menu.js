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
    

   <div className='nav'>
    <MenuTree isDropdownOpen={isDropdownOpen} />
    <SelectLanguage className={'select'} isDropdownOpen={isDropdownOpen} ></SelectLanguage>
   </div>
   
      
  


    </>
  )
}


export default Menu
