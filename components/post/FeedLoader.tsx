import styled from "styled-components";
import {ListItem, Skeleton} from "../common";

const ListItemExtend = styled(ListItem)`
  & + li {
    margin-top: 16px;
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
`;

const Contents = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export function FeedLoader() {
  return (
    <ListItemExtend>
      <Grid>
        <Skeleton style={{width: "50px", height: "50px", borderRadius: "25px"}} />
        <Contents>
          <Skeleton style={{width: "50%", height: "14px"}} />
          <Skeleton style={{display: "block", width: "30%", height: "14px", marginTop: "5px"}} />
        </Contents>
      </Grid>
    </ListItemExtend>
  )
}
