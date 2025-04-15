import { useNavigate } from "react-router-dom";
import { CardContainer, Description, DescriptionContainer, Title, Poster } from "./MovieCard"; // seus styled

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <CardContainer onClick={() => navigate(`/movie/${movie.id}`)}>
            <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <DescriptionContainer>
                <Title>{movie.title}</Title>
                <Description>{movie.overview.slice(0, 100)}...</Description>
            </DescriptionContainer>
        </CardContainer>
    );
};

export default MovieCard;
