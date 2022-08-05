import styled from "styled-components";

const Profile = styled.div`
  display: flex;
  padding: 16px 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: ${props => props.theme.boxShadow};
`;

const Name = styled.span`
  margin-right: 5px;
`;

export {
  Profile,
}
