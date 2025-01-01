import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import './searchBar.css';
import fetchBooks from '../../api';
import DropDown from '../dropDown/DropDown';
import { categories } from '../../constants';

const SearchBar = ({ setBooks }) => {
  const [selectedCategory, setSelectedCategory] = useState('Fiction');

  const fetchBooksByCategory = async () => {
    try {
      await fetchBooks(selectedCategory, setBooks);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooksByCategory();
  }, [selectedCategory]);

  return (
    <div className="search-container">
      <DropDown
        options={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      <button
        onClick={fetchBooksByCategory}
        className="search-icon-button"
        aria-label="Search"
      >
        <Search className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
