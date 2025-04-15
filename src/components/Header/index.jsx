import { useNavigate } from "react-router-dom";
import Search from "../SearchBar";
import { Favourites, HeaderContainer, Logo } from "./Header";
import { BiMovie } from "react-icons/bi";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>
        <BiMovie size={24} color="#FFFFFF" /> CineFlix
      </Logo>
        <Search onSearch={onSearch} />
      <Favourites>Favoritos</Favourites>
    </HeaderContainer>
  );
};

export default Header;
