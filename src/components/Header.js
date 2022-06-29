import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  z-index: 999;
  background-color: ${(props) => props.bgColor};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

const Logo = styled.h3`
  font-size: 28px;
  font-weight: 800;
  a {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

const MenuWrap = styled.div`
  width: 30%;
  height: 100vh;
  position: fixed;
  background-color: #1d1d1d;
  top: 0;
  right: ${(props) => props.po};
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Menu = styled.h3`
  margin-top: 150px;
  /* margin-left: 100px; */
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

export const Header = () => {
  const [posi, setPosi] = useState("-100%");
  const [bg, setBg] = useState("transparent");

  const handleMenu = () => {
    if (posi == "-100%") {
      setPosi("0");
    } else {
      setPosi("-100%");
    }
  };

  const handelScroll = () => {
    const sct = window.pageYOffset;
    // console.log(sct);
    if (sct > 300) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", handelScroll);

  return (
    <>
      <SHeader bgColor={bg}>
        <Logo>
          <Link to={"/"}>YJ_MOVIE</Link>
        </Logo>

        <FontAwesomeIcon icon={faBars} onClick={handleMenu} />
      </SHeader>
      <MenuWrap po={posi}>
        <Menu>
          <Link to={"/"}>Home</Link>
        </Menu>
        <Menu>
          <Link to={"/Search"}>Search</Link>
        </Menu>
      </MenuWrap>
    </>
  );
};
