import React, { useState } from 'react'
import { HeaderDataTeamContext } from '../../../context';
import { NavbarContext } from '../../../context';
import Logo from '../../ui/Logo';
import ChocolateHamburger from '../../ui/ChocolateHamburger';
import Menu from '../../layout/Menu';
import { useDropdown } from '../../../hooks/useDropdown';
import PropTypes from 'prop-types';


export const Header = (props) => {
  const {
    className,
    menu,
    logo,
    headline,
    description,
    screen,
  } = props

  const { Provider: HeaderDataTeamProvider } = HeaderDataTeamContext;
  const { Provider: NavbarProvider } = NavbarContext;
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown();
  const [ elements, setElements ] = useState(menu)

  return (
    <HeaderDataTeamProvider value={{ elements, setElements }}>
      <header className={className}>
        <NavbarProvider value={{ isDropdownOpen, toggleDropdown }}>
          <div className={'header__cont'}>
            <div className={`${isDropdownOpen ? `header__top open ` : 'header__top'}`}>
              <Logo className={'header__logo'} logo={logo}/>
              <button onClick={toggleDropdown} className={'hamburger'}>
                <ChocolateHamburger isDropdownOpen={isDropdownOpen} openFunc={toggleDropdown} span={9} />
              </button>
              <div className={'header__menu'}>
                <Menu isDropdownOpen={isDropdownOpen} navbarOpenFunc={toggleDropdown}></Menu> 
              </div>
            </div>
          </div>
        </NavbarProvider>
        <div className={"header__hero"} id="hero">
        <article className={"hero__info"}>
          <h3 className={'hero__header headline--h3'}>{headline}</h3>
          <p className={'hero__sub-header'}>{description}</p>
          <button className={'button--full'}>Order a website</button>
        </article>
        <div className={"hero__photo-container"}>
          <img className={"hero__photo"} src={screen} alt="screen" width="350px"></img>
        </div>
        </div>
      </header>
    </HeaderDataTeamProvider>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  header: PropTypes.object
}

export default Header