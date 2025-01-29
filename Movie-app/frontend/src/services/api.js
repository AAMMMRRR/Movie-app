const API_KEY = "2c02070b21de5e8eb37a675e8c4e4102";
const BASE_URL = "https://api.themoviedb.org/3";
const REVIEW_API_URL = "http://127.0.0.1:8000/api/reviews/"; // Replace with your backend API URL
// src/services/api.js
export const getMovieDetails = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  };
  
  export const getMovieReviews = async (movieId) => {
    const response = await fetch(`http://127.0.0.1:8000/api/reviews/${movieId}/`);
    const data = await response.json();
    return data;
  };
  

  export const postReview = async (movieId, reviewText) => {
    const response = await fetch(REVIEW_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: movieId,
        review_text: reviewText,
      }),
    });
    const data = await response.json();
    return data; // Assuming the backend returns the review along with sentiment analysis
  };
  
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};



// // New function to get reviews for a movie by ID
// export const getMovieReviews = async (movieId) => {
//   const response = await fetch(`${REVIEW_API_URL}${movieId}/`);
//   const data = await response.json();
//   return data;
// };

// // New function to submit a review for a movie
// export const postReview = async (movieId, reviewText) => {
//   const response = await fetch(REVIEW_API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       movie_id: movieId,
//       review_text: reviewText,
//     }),
//   });
//   const data = await response.json();
//   return data;
// };
