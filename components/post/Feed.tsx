import styled from 'styled-components';
import ListItem from '../common/ListItem';

interface Props {
  category: string;
  title: string;
  contents?: string;
}

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

export default function Feed({title, category, contents}: Props) {
  return (
    <ListItem>
      <div>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </div>
      <Contents>{contents}</Contents>
    </ListItem>
  )
}


