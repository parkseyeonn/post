import styled from 'styled-components';
import { Button, Input } from '../../components/common';

const Wrap = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrap = styled.div`
  width: 300px;
  text-align: center;
`;

const SubmitButton = styled(Button)`
  margin-top: 24px;
`;

const JoinLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  border: 0;
  color: ${props => props.theme.themeColor1};
`;

export {
    Wrap,
    InputWrap,
    SubmitButton,
    JoinLink,
}
