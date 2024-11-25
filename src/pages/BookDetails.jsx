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
        <img src={`https://seussology.info/images/book-covers/${book.id}.jpg`} className="card-img-top" alt={book.title} />
        </div>
        <div className="col-md-8">
          <h1>{book.title}</h1>
          <h5 className="text-muted">{book.author}</h5>
          <p className="mt-4">{book.description}</p>
        </div>
      </div>
    </div> // at first we are loading the page, then we are displaying the book details. I was going to originally call the IMG url with the API but then I realized that the img id coorelated with the book covers NUMBER, so i just use the bookID in the url to call the image src
  );
}

export default BookDetails;