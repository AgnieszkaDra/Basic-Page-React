import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const SelectLanguage = ({ isNavbarOpen  }) => {
  
 const [isChevronUp, setIsChevronUp] = useState(false);

  const toggleChevron = () => {
    setIsChevronUp((prevState) => !prevState);
  };

  return (
    <div
 
      className={`${isNavbarOpen ? 'none' : 'custom__select'}`}
      onClick={toggleChevron}
    >
       <select >
        <option value="">PL</option>
        <option value="option1">EN</option>
      </select>
      <div className="custom-chevron">
        {isChevronUp ? <FaChevronUp /> : <FaChevronDown />} 
      </div>
    </div>
  );
};

SelectLanguage.propTypes = {
  className: PropTypes.string,
};

export default SelectLanguage;