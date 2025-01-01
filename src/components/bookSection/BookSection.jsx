import React, { useEffect, useState } from 'react';
import "./bookSection.css";
import BookCard from '../bookCard/BookCard';
import fetchBooks from '../../api';

const BookSection = ({books}) => {
  

  return (
    <section className="section">
      {/* <h2 className="section-title">{title}</h2> */}
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.accessInfo.id} book={book.volumeInfo} />
        ))}
      </div>
    </section>
  );
};

export default BookSection;
