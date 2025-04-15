
import { CardContainer, Description, DescriptionContainer, Title, Poster } from "./MovieCard"


const MovieCard = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <CardContainer>
            <Poster src={imageUrl} alt={movie.title} />
            <DescriptionContainer>
                <Title>
                    {movie.title}
                </Title>
                <Description>
                    {movie.overview ? movie.overview.slice(0, 120) + '...' : 'Sem descrição'}
                </Description>
            </DescriptionContainer>
        </CardContainer>
    )
}

export default MovieCard;