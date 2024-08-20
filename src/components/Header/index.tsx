import styled from "styled-components";
import logo from "../../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  height: 7rem;
  background: linear-gradient(45deg, #ffb116, #e45f07);
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 10px #e45f07;
`;

const Logo = styled.img`
  width: 7rem;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo src={logo} alt="logo da pizzaria" />
      </Link>
    </HeaderStyled>
  );
};
