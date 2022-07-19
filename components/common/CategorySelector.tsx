import styled, {css} from 'styled-components';

// category - name,
const categories = ['영어', '스페인어', '개발', '책', '영화', '드라마'];

const CategoryList = styled.ul`
  display: flex;
  gap: 5px;
`;

const Category = styled.li<{isActive: boolean}>`
  padding: 3px 7px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.borderColor};
  font-size: 14px;
  transition: .2s;
  ${props => props.isActive &&
  css`
    border-color: ${props => props.theme.themeColor1};
    background-color: ${props => props.theme.themeColor1};
    color: white;
  `}
  &:hover {
    opacity: .6;
    cursor: pointer;
  }
`;

export function CategorySelector() {
  return (
    <CategoryList>
    {
      categories.map((category, index) => (
        <Category>{category}</Category>
      ))
    }
    </CategoryList>
  )
}
