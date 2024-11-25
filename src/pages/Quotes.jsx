// src/pages/Quotes.jsx
import React, { useEffect, useState } from 'react';
import { fetchRandomQuotes } from '../api';
//using bootstrap to make each page look simply better

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function getQuotes() {
      const randomQuotes = await fetchRandomQuotes();
      setQuotes(randomQuotes);
    }
    getQuotes();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Random Quotes</h1>
      <ul className="list-group">
        {quotes.map((quote, index) => (
          <li key={index} className="list-group-item">
            {quote.text} - <strong>{quote.author}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;