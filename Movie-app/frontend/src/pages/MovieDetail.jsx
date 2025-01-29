import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieReviews, postReview } from "../services/api";
import "../css/MovieDetail.css"; // Add styles for this page

function MovieDetail() {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [sentiment, setSentiment] = useState("");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // Track current review index

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews); // Set the reviews for the movie
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };
    loadMovieDetails();
  }, [movieId]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!review.trim()) return;

    try {
      const response = await postReview(movieId, review);
      setSentiment(response.sentiment); // Set sentiment from the response
      setPopup(true); // Show the popup with sentiment

      // Add the new review to the current list of reviews
      const newReview = {
        review_text: review,
        sentiment: response.sentiment,
      };
      setReviews((prevReviews) => [newReview, ...prevReviews]);

      setReview(""); // Clear the input after submission
    } catch (err) {
      setError("Failed to submit review.");
    }
  };

  const handleClosePopup = () => {
    setPopup(false); // Close the sentiment popup
  };

  const goToNextReview = () => {
    if (currentReviewIndex < reviews.length - 1) {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
  };

  const goToPreviousReview = () => {
    if (currentReviewIndex > 0) {
      setCurrentReviewIndex(currentReviewIndex - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-detail">
      {movie && (
        <>
          <div className="movie-detail-content">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <form onSubmit={handleSubmitReview} className="review-form">
                <textarea
                  value={review}
                  onChange={handleReviewChange}
                  placeholder="Add a review..."
                  rows="5"
                ></textarea>
                <button type="submit" className="submit-review-btn">
                  Submit Review
                </button>
              </form>

              {/* Simple Reviews Carousel */}
              <div className="movie-reviews">
                {reviews.length > 0 ? (
                  <div className="carousel">
                    <p className="review-text">
                      {reviews[currentReviewIndex].review_text}
                    </p>
                    <p className="review-sentiment">
                      Sentiment: {reviews[currentReviewIndex].sentiment}
                    </p>
                    <div className="carousel-nav">
                      <button
                        onClick={goToPreviousReview}
                        disabled={currentReviewIndex === 0}
                        className="carousel-btn"
                      >
                        Prev
                      </button>
                      <button
                        onClick={goToNextReview}
                        disabled={currentReviewIndex === reviews.length - 1}
                        className="carousel-btn"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sentiment Popup */}
          {popup && (
            <div className="sentiment-popup">
              <h3>Sentiment Analysis Result</h3>
              <p>{sentiment}</p>
              <button onClick={handleClosePopup} className="close-btn">
                Close
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MovieDetail;
