import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Button from '../components/Button';
import Input from '../components/Input';
import {Modal} from '../components/modal/Modal';

const LoginWrap = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginInputWrap = styled.div`
  width: 300px;
`;

const LoginButton = styled(Button)`
  margin-top: 24px;
`;

const Login: NextPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginWrap>
      <Seo />
      <LoginInputWrap>
        <Input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)}/>
        <Input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <LoginButton width="100%" size="big" onClick={() => {}}>
        로그인
        </LoginButton>
      </LoginInputWrap>
    </LoginWrap>
  )
};

export default Login;
