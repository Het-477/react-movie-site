import '../css/MovieCard.css';

function MovieCard({ movie }) {
    const whenClickFavorite = () => {
        alert("favorite clicked");
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
                    alt={movie.Title}
                />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={whenClickFavorite}>
                        💖
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <div className="user-rating">IMDB: {movie.imdbRating}</div>
            </div>
        </div>
    );
}

export default MovieCard;
