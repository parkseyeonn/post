import styled from 'styled-components';

export const SectionTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

export const Group = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${props => props.theme.themeColor1};
`;
