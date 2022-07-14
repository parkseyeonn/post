import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';

const StyledNavBar = styled.nav`
    display: flex;
`;

const StyledLink = styled.a<{isCurrentPage: boolean}>`
    flex: 1;
    color: ${props => props.isCurrentPage ? props.theme.themeColor1 : 'black'};
    font-size: 24px;
    font-weight: '500';
    transition: opacity .2s;
    &:hover {
        opacity: .6;
    }
`;

export default function NavBar(){
  const {pathname} = useRouter();

  return (
    <StyledNavBar>
      <Link href={'/'} passHref>
        <StyledLink isCurrentPage={pathname === '/'}>home</StyledLink>
      </Link>
      <Link href={'/'} passHref>
        <StyledLink isCurrentPage={pathname === '/feed'}>feed</StyledLink>
      </Link>
      <Link href={'/'} passHref>
        <StyledLink isCurrentPage={pathname === '/group'}>group</StyledLink>
      </Link>
      <Link href={'/mypage'} passHref>
        <StyledLink isCurrentPage={pathname === '/mypage'}>my page</StyledLink>
      </Link>
    </StyledNavBar>
  )
}
