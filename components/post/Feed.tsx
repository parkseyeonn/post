import styled from "styled-components";
import Link from "next/link";
import {ListItem} from "../common";

interface Props {
  id: number;
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

export function Feed({title, category, contents, id}: Props) {
  return (
    <ListItem>
      <Link href={`/post/${id}`}>
        <a>
          <div>
            <Category>{category}</Category>
            <Title>{title}</Title>
          </div>
          <Contents>{contents}</Contents>
        </a>
      </Link>
    </ListItem>
  )
}


