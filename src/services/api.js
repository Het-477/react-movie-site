const API_KEY = "b28d6a95";
const BASE_URL = "https://www.omdbapi.com/";

// Function to search movies by keyword
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();
    if (!data.Search) return [];

    // Fetch full movie details to get rating
    const fullDetails = await Promise.all(
        data.Search.map(async (movie) => {
            const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}`);
            return await res.json();
        })
    );

    return fullDetails;
};

// OMDb does not have a "popular" endpoint, so this is a manual workaround
export const getPopularMovies = async () => {
    // You can simulate popular movies by using fixed popular titles
    const popularTitles = ["Inception", "The Dark Knight", "Avengers", "Titanic", "Avatar", "SpiderMan",
        "superman", "the matrix", "iron man"];
    const moviePromises = popularTitles.map(async (title) => {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
        const data = await response.json();
        return data;
    });
    return Promise.all(moviePromises);
};
