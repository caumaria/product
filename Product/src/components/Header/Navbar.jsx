import { useState } from "react";
import styled from "styled-components";
import { BsCart3 } from "react-icons/Bs";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgb(180, 180, 180, 0.5);
  padding: 10px;
  height: 6rem;
  width: 66rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  color: black;
  font-size: 2.2rem;
  font-weight: 900;

  a {
    text-decoration: none;
  }
  
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
    margin-right: 1rem;

    a {
      text-decoration: none;
      color: #7e7c7c;
      transition: all 0.2s ease-in-out;
      font-size: .9rem;

      &:hover {
        color: black;
      }
    }
  }

  @media screen and (max-width: 760px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 16rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10rem;
`;

const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    display: none;
  }

  &:nth-child(2):hover {
    border: 2px solid orange;
  }
`;

const MenuIcon = styled.i`
  display: block;
  margin-left: 8rem;
  cursor: pointer;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Div>
      <NavbarContainer>
        <Div>
          <LogoContainer>
            <a>sneakers</a>
          </LogoContainer>

          <NavbarList showMenu={showMenu}>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </NavbarList>
        </Div>

        <Div>
          <IconContainer showMenu={showMenu} onClick={toggleMenu}>
            <Icon>
              <BsCart3 size={20} />
            </Icon>
            <Icon>
              <img
                style={{ width: "2.4rem", height: "2.4rem" }}
                src="/image-avatar.png"
              />
            </Icon>
            <MenuIcon
            className={showMenu ? "fas fa-times" : "fas fa-bars"}
          ></MenuIcon>
          </IconContainer>
        </Div>
      </NavbarContainer>
    </Div>
  );
};

export default Navbar;
