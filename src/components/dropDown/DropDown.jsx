import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './dropDown.css';

const DropDown = ({ options, selected, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };
  
    const handleOptionClick = (option) => {
      onChange(option);
      setIsOpen(false); 
    };
  
    return (
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span>{selected}</span>
          {isOpen ? <ChevronUp className="dropdown-icon" /> : <ChevronDown className="dropdown-icon" />}
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li
                key={option}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default DropDown