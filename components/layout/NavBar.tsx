import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBook } from "@fortawesome/free-solid-svg-icons";

const StyledNavBar = styled.nav`
    display: flex;
    border-bottom: 1px solid;
    border-top: 1px solid;
    padding: 14px 0;
`;

const StyledLink = styled.a<{isCurrentPage: boolean}>`
    flex: 1;
    color: ${props => props.isCurrentPage ? props.theme.themeColor1 : 'black'};
    font-size: 24px;
    font-weight: 500;
    transition: opacity .2s;
    &:hover {
        opacity: .6;
    }
`;

export default function NavBar(){
  const {pathname} = useRouter();
  const menu = pathname.split('/')[1];

  return (
    <StyledNavBar>
      <Link href={'/'} passHref>
        <StyledLink isCurrentPage={pathname === '/'}><FontAwesomeIcon icon={faHouse} /> 홈</StyledLink>
      </Link>
      <Link href={'/group'} passHref>
        <StyledLink isCurrentPage={menu === 'group'}><FontAwesomeIcon icon={faBook} /> 그룹</StyledLink>
      </Link>
      <Link href={'/mypage'} passHref>
        <StyledLink isCurrentPage={menu === 'mypage'}><FontAwesomeIcon icon={faUser} /> 사용자</StyledLink>
      </Link>
    </StyledNavBar>
  )
}
