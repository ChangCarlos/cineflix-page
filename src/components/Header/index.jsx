import { useNavigate } from "react-router-dom";
import Search from "../SearchBar";
import { Favorites, HeaderContainer, Logo } from "./Header";
import { BiMovie } from "react-icons/bi";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>
        <BiMovie size={24} color="#FFFFFF" /> CineFlix
      </Logo>
        <Search onSearch={onSearch} />
      <Favorites onClick={() => navigate('/favorites')}>Favoritos</Favorites>
    </HeaderContainer>
  );
};

export default Header;
