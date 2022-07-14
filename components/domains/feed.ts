import styled from 'styled-components';

export const ListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const Title = styled.span`
  font-weight: bold;
`;

export const Category = styled.span`
  margin-right: 10px;
  color: ${props => props.theme.themeColor2};
  font-weight: 500;
`;

export const Contents = styled.div`
  margin-top: 10px;
`;
