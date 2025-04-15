import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieTrailer } from "../services/movieService";
import { Description, DescriptionContainer, MovieDetailContainer, PosterContainer, Title, TrailerContainer } from "./MovieDetailsStyle";
import Header from "../components/Header";

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
        <>
        <Header />
            <MovieDetailContainer>
                <PosterContainer>
                    <Title>{movie.title}</Title>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </PosterContainer>
                <DescriptionContainer>
                    <Description><strong>Sinopse:</strong> {movie.overview ? movie.overview : 'Sem sinopse disponível.'}</Description>
                    <Description><strong>Nota:</strong> {movie.vote_average}</Description>
                    <Description><strong>Data de Lançamento:</strong> {movie.release_date}</Description>
                </DescriptionContainer>
            </MovieDetailContainer>
            {trailerKey ? (
                <TrailerContainer>
                    <iframe
                        width="1280"
                        height="720"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="Trailer"
                        frameBorder="0"
                        allowFullScreen
                    />
                </TrailerContainer>
            ) : <TrailerContainer><Description>Trailer indisponível.</Description></TrailerContainer>}
        </>
    );
};

export default MovieDetail;
