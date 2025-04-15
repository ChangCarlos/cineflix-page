import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieTrailer } from "../components/services/movieService";

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const movieData = await getMovieDetails(id);
                setMovie(movieData);

                const trailers = await getMovieTrailer(id);
                const trailer = trailers.find(t => t.type === "Trailer" && t.site === "YouTube");
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            } catch (error) {
                console.error("Erro ao carregar detalhes:", error);
            }
        };

        loadMovie();
    }, [id]);

    if (!movie) {
        return <div>Carregando...</div>;
    }

    return (
        <div style={{ padding: "2rem", color: "#fff" }}>
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ borderRadius: "12px", width: "300px", marginBottom: "1rem" }}
            />
            <p><strong>Sinopse:</strong> {movie.overview}</p>
            <p><strong>Nota:</strong> {movie.vote_average}</p>
            <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>

            {trailerKey && (
                <div style={{ marginTop: "2rem" }}>
                    <h3>Trailer</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="Trailer"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
