import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBook } from "@fortawesome/free-solid-svg-icons";

const HeaderTag = styled.header`
  position: relative;
  z-index: ${props => props.theme.headerZIndex};
  display: flex;
  align-items: center;
  height: 140px;
`;

const LogoH1 = styled.a`
  font-family: "Cormorant SC", serif;
  font-size: 40px;
  &:hover {
   text-decoration: none;
  }
`;

const HeaderLink = styled.a`
  margin-left: auto;
  font-weight: bold;
`;

const StyledNavBar = styled.nav`
  flex: 1;
  display: flex;
  margin-left: 100px;
  padding: 14px 10px;
`;

const StyledLink = styled.a<{isCurrentPage: boolean}>`
  flex: 1;
  color: ${props => props.isCurrentPage ? props.theme.themeColor1 : "black"};
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  transition: opacity .2s;
  &:hover {
    opacity: .6;
  }
`;

export default function Header() {
  const {pathname} = useRouter();
  const menu = pathname.split("/")[1];
  const user = null;

  return (
    <HeaderTag>
      <h1>
        <Link href={"/"} passHref>
          <LogoH1>STUDY WITH ME</LogoH1>
        </Link>
      </h1>
      <StyledNavBar>
        <Link href={"/"} passHref>
          <StyledLink isCurrentPage={pathname === "/"}><FontAwesomeIcon icon={faHouse} /></StyledLink>
        </Link>
        <Link href={"/group"} passHref>
          <StyledLink isCurrentPage={menu === "group"}><FontAwesomeIcon icon={faBook} /></StyledLink>
        </Link>
        <Link href={user ? "/mypage": "/mypage"} passHref>
          <StyledLink isCurrentPage={menu === (user ? "mypage" : "login")}><FontAwesomeIcon icon={faUser} /></StyledLink>
        </Link>
      </StyledNavBar>
{/*       <Link href={"/login"} passHref> */}
{/*         <HeaderLink>로그인</HeaderLink> */}
{/*       </Link> */}
    </HeaderTag>
  )
}
