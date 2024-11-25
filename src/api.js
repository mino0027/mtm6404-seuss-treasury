const API_BASE_URL = 'https://seussology.info/api';

export const fetchBooks = async () => {
  const response = await fetch(`${API_BASE_URL}/books`);
  return response.json();
};

export const fetchBookDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/books/${id}`);
  return response.json();
};

export const fetchQuotes = async () => {
  const response = await fetch(`${API_BASE_URL}/quotes`);
  return response.json();
};

export const fetchRandomQuotes = async () => {
    const quotes = await fetchQuotes();
    return quotes.sort(() => 0.5 - Math.random()).slice(0, 10);
  };

// this script fetchs the api, we must fetch the API as a script, this allows us to
// call the api from the internet, and use it in our file (App.jsx)