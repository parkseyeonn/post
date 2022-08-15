import styled from "styled-components";

const FormItem = styled.div`
  display: block;
  margin-bottom: 20px;
`;

const SearchInputWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  transition: .2s;
  z-index: 1;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: .5;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  FormItem,
  SearchInputWrap,
  SearchButton,
  ButtonWrap,
}
