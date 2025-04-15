import { useNavigate } from "react-router-dom";
import { CardContainer, Description, DescriptionContainer, Title, Poster } from "./MovieCard"; // seus styled

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <CardContainer onClick={() => navigate(`/movie/${movie.id}`)}>
            <Poster src={imageUrl} />
            <DescriptionContainer>
                <Title>{movie.title}</Title>
                <Description>{movie.overview ? movie.overview.slice(0, 100) : 'Sem descrição disponível'}...</Description>
            </DescriptionContainer>
        </CardContainer>
    );
};

export default MovieCard;
