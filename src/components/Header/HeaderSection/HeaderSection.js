import React, { useState, useEffect } from 'react'
import ChocolateHamburger from '../ChocolateHamburger';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import SelectLanguage from '../SelectLanguage';
import Navigation from '../Navigation/Navigation';
import { useScroll } from '../../../hooks/useScroll';
import { NavbarContext } from '../../context';
import Menu from '../Menu/Menu';

export const HeaderSection = (props) => {
  const {
    logo,
    headline,
    description,
    buttonText,
    screen,
    menu,
  } = props
  const { Provider: NavbarProvider } = NavbarContext;
  const [scrolled, setScrolled] = useState(false);
  
  const { isScrolled } = useScroll()

  const isMobile = window.innerWidth <= 900;
  const isDesktop = window.innerWidth >= 900;
  const eventToUse = isMobile ? '' : 'onMouseEnter';

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     <NavbarProvider value={{ navbarOpen, setNavbarOpen }}>
      <div className={'header__cont'}>
        {/* <div className={`${navbarOpen ? `header__top open ` : 'header__top'} ${scrolled ? `header__top scrolled ` : 'header__top'} ${isScrolled && isDesktop ? `${' hidden'}` : '' }`} */}
         <div className={`${navbarOpen ? `header__top open ` : 'header__top'}`}
      >
        <Logo className={'header__logo'} logo={logo}></Logo>
        <button onClick={handleToggle} className={'hamburger'}>
          <ChocolateHamburger isNavbarOpen={navbarOpen} openFunc={setNavbarOpen} span={9} />
        </button>
        <div className={'header__menu'}>
          <Menu isNavbarOpen={navbarOpen} navbarOpenFunc={setNavbarOpen}></Menu> 
          
           {/* <SelectLanguage className={'select'} isNavbarOpen={navbarOpen} navbarOpenFunc={setNavbarOpen}></SelectLanguage> */}
           {/* <button className={'button--border'}>Log in</button>
           <button className={'button--full'}>Start for free</button> */}
        </div>
       
        {/* <div className={"header__menu"}>
          <Navigation content={menu}></Navigation>
        </div> */}
{/*        
           <div className={"header__other"}>
          
         </div>  */}
    
        {/* <div className={"header__other"}>
          <SelectLanguage className={'select'}></SelectLanguage>
          <button className={'button--border'}>Log in</button>
          <button className={'button--full'}>Start for free</button>
        </div> */}
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
    </>
  )
}

HeaderSection.propTypes = {
  logo: PropTypes.string,
  screen: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  screen: PropTypes.string
}

export default HeaderSection


