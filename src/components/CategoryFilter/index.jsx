import { useEffect, useState } from "react";
import { getGenres } from "../../services/movieService";
import {
    FilterWrapper,
    GenreButton,
    GenreScrollArea
} from "./Categories";

const CategoryFilter = ({ onSelectGenre }) => {
    const [genres, setGenres] = useState([]);
    const [activeGenre, setActiveGenre] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            const data = await getGenres();
            setGenres(data);
        };
        fetchGenres();

        const area = document.querySelector("#genre-scroll");

        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                area.scrollLeft += e.deltaY;
            }
        };

        if (area) {
            area.addEventListener("wheel", onWheel, { passive: false });
        }

        return () => {
            if (area) {
                area.removeEventListener("wheel", onWheel);
            }
        };

    }, []);

    const handleSelect = (genreId) => {
        setActiveGenre(genreId);
        onSelectGenre(genreId);
    };

    return (
        <FilterWrapper>
            <GenreScrollArea id="genre-scroll">
                <GenreButton
                    active={activeGenre === null}
                    onClick={() => handleSelect(null)}
                >
                    Todos
                </GenreButton>
                {genres.map((genre) => (
                    <GenreButton
                        key={genre.id}
                        active={activeGenre === genre.id}
                        onClick={() => handleSelect(genre.id)}
                    >
                        {genre.name}
                    </GenreButton>
                ))}
            </GenreScrollArea>
        </FilterWrapper>
    );
};

export default CategoryFilter;
