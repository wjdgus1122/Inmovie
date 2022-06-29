import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
  svg {
    font-size: 25px;
  }
`;
const Logo = styled.h3`
  font-size: 28px;
  font-weight: 800;
  a {
    color: ${mainStyle.maingColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
const MenuWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  position: fixed;
  right: ${(props) => props.po};
  transition: 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
const Menu = styled.h3`
  margin-bottom: 100px;
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

export const Header = () => {
  const [posi, setPosi] = useState("-100%");
  const MenuClick = () => {
    if (posi === "-100%") {
      setPosi("0");
    } else {
      setPosi("-100%");
    }
  };
  return (
    <>
      <SHeader>
        <Logo>
          <Link to={"/"}>INMOIVE</Link>
        </Logo>

        <FontAwesomeIcon icon={faBars} onClick={MenuClick} />
      </SHeader>
      <MenuWrap po={posi}>
        <Menu onClick={MenuClick}>
          <Link to={"/"}>Home</Link>
        </Menu>
        <Menu onClick={MenuClick}>
          <Link to={"/search"}>Search</Link>
        </Menu>
      </MenuWrap>
    </>
  );
};
