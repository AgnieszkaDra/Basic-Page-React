import React from 'react'
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

export const HeaderSection = (props) => {
  const {
   logo, 
   screen
 } = props

  return (
    <header className={'header'}>
      <div className={"header__container"}>
        <h1 className={'header__container__logo'}>
          <img src={logo} alt="logo">
          </img>
        </h1>
        <div className={"header__container__navigation"}>
          <Navigation></Navigation>
        </div>
      </div>
      <div className={"hero"} id="hero">
        <article class="hero__info">
          <h2 class="hero__header">Beautiful Free Nova template</h2>
          <p class="hero__sub-header">A top notch premium quality template for your next web project</p>
          <button class="hero__button button">Download FREE!</button>
        </article>
        <div class="hero__photo-container">
          <img class="image" src={screen} alt="screen" width="350px"></img>
        </div>
      </div>
    </header>
  )
}

HeaderSection.propTypes = {
  logo: PropTypes.object,
  screen: PropTypes.object
}

export default HeaderSection


