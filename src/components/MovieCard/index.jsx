import { useNavigate } from "react-router-dom";
import { CardContainer, Description, DescriptionContainer, Title, Poster, FavoriteBtn } from "./MovieCard";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../../context/FavoritesContext";


const MovieCard = ({ movie }) => {
    const { toggleFavorite, isFavorite } = useFavorites();
    const favorited = isFavorite(movie.id)

    const navigate = useNavigate();
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <CardContainer onClick={() => navigate(`/movie/${movie.id}`)}>
            <Poster src={imageUrl} />
            <DescriptionContainer>
                <Title>{movie.title}</Title>
                <Description>{movie.overview ? movie.overview.slice(0, 100) : 'Sem descrição disponível'}...</Description>
                <FavoriteBtn onClick={e => {
                    e.stopPropagation();
                    toggleFavorite(movie)
                }}>
                    {favorited ? <FaHeart color="red" /> : <FaRegHeart />}
                </FavoriteBtn>
            </DescriptionContainer>
        </CardContainer>
    );
};

export default MovieCard;
