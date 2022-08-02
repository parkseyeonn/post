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
`;

const LoginButton = styled(Button)`
  margin-top: 24px;
`;

export {
    Wrap,
    InputWrap,
    LoginButton,
}
