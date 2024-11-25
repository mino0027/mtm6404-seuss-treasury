import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../api';
//using bootstrap to make each page look simply better

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(data => setBooks(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Books</h1>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <Link to={`/books/${book.id}`}>
                <img src={book.coverImageUrl} className="card-img-top" alt={book.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;