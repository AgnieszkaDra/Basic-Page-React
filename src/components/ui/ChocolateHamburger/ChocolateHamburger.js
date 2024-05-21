import React from 'react';
import PropTypes from 'prop-types';

export const ChocolateHamburger = (props) => {
  
  const {
    isDropdownOpen, 
    openFunc,
    span
  } = props

  const renderSpanElement = (spanElement) => {
    const numberOfElements = spanElement;
    const elements = [];

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(<div key={i} className={'span-container'}><span className={'span'}></span></div>);
    }
    return (
      <>
        {elements}
      </>
    );
  }

  return (
    <div className={'hamburger'} onClick={openFunc} >
      <button className={`hamburger__icon${isDropdownOpen ? '-open' : '-close'}`} >
        {renderSpanElement(span)}
      </button>
    </div>
  )
  
}

ChocolateHamburger.propTypes = {
  open: PropTypes.bool,
  span: PropTypes.number,
  openFunc: PropTypes.func
}

export default ChocolateHamburger