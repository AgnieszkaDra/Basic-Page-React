import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const SelectLanguage = () => {
  
 const [isChevronUp, setIsChevronUp] = useState(false);

  const toggleChevron = () => {
    setIsChevronUp((prevState) => !prevState);
  };

  return (
    <div
      className={'custom-select-wrapper'}
      onClick={toggleChevron}
    >
      <select className={'custom-select'}>
        <option value="">PL</option>
        <option value="option1">EN</option>
      </select>
      <div className="custom-select-arrow">
        {isChevronUp ? <FaChevronUp /> : <FaChevronDown />} 
      </div> 
     
        {/* {isChevronUp ? <FaChevronUp /> : <FaChevronDown />} */}
    
    </div>
  );
};

SelectLanguage.propTypes = {
  className: PropTypes.string,
};

export default SelectLanguage;