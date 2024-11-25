import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../api';
//using bootstrap to make each page look simply better
function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails(id).then(data => setBook(data));
  }, [id]);

  if (!book) return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={book.coverImageUrl} className="img-fluid" alt={book.title} />
        </div>
        <div className="col-md-8">
          <h1>{book.title}</h1>
          <h5 className="text-muted">{book.author}</h5>
          <p className="mt-4">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;