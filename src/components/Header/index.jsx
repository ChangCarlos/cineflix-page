import Search from "../SearchBar";
import { Favourites, HeaderContainer, Logo } from "./Header";
import { BiMovie } from "react-icons/bi";

const Header = ({ onSearch }) => {
  return (
    <HeaderContainer>
      <Logo>
        <BiMovie size={24} color="#FFFFFF" /> CineFlix
      </Logo>
        <Search onSearch={onSearch} />
      <Favourites>Favoritos</Favourites>
    </HeaderContainer>
  );
};

export default Header;
