import React, { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/SearchBar'
import BookSection from './components/bookSection/BookSection'
import fetchBooks from './api'

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBooks("Sports" , setBooks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='section__margin'>
     <SearchBar setBooks={setBooks}/>
     <BookSection books={books}/>
    </div>
  )
}

export default App