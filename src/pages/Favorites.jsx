import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="favorite-empty">
            <h2>No movies added to Favorites yet</h2>
            <p>Start adding movies and they will appear here</p>
        </div>
    )
}

export default Favorites