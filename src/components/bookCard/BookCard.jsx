import React from 'react';
import { Circle } from 'lucide-react';
import './bookCard.css';

const BookCard = ({ book }) => {
  

  return (
    <div className="book-card">
      <img
        src={book?.imageLinks?.thumbnail}
        alt={`Cover of ${book.title}`}
        className="book-cover"
      />
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        {book.subtitle && <p className="book-subtitle">{book?.subtitle}</p>}
        <p className="book-author">{book?.authors?.join(', ')}</p>
        <p className="book-published">{`Published: ${book.publishedDate}`}</p>
        <p className="book-country">{`Country: ${book.country}`}</p>
        {/* <p className="book-description">{book.description?.slice(0, 10)}...</p> */}
        {book.categories && (
          <p className="book-categories">{`Categories: ${book?.categories.join(', ')}`}</p>
        )}
        {/* <a
          href={book?.infoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="book-info-link"
        >
          More Info
        </a> */}
      </div>
    </div>
  );
};

export default BookCard;
