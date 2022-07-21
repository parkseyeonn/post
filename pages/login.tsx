import type { NextPage } from 'next';
import styled from 'styled-components';
import Seo from '../components/Seo';
import { Button, Input } from '../components/common';
import { Modal } from '../components/modal/Modal';
import useForm from '../hooks/useForm';

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

interface FormType {[key: string]: string}

const Login: NextPage = () => {
  const {values, errors, touched, handleSubmit, getFieldProps} = useForm({
    initialValues: {id: '', password: ''},
    validate: values => {
      const errors = {
        id: '',
        password: '',
      };

      if (!values.id) {
        errors.id = '아이디를 입력해주세요.'
      }
      if (!values.password) {
        errors.password = '비밀번호를 입력해주세요.'
      }
      return errors;
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    },
  });

  return (
    <LoginWrap>
      <Seo />
      <form onSubmit={handleSubmit}>
        <LoginInputWrap>
          <Input
            {...getFieldProps("id")}
            type="text"
            placeholder="아이디"
          />
          {touched.id && errors.id && <Input.Error>{errors.id}</Input.Error>}
          <Input
            {...getFieldProps("password")}
            type="password"
            placeholder="비밀번호"
            />
          {touched.password && errors.password && <Input.Error>{errors.password}</Input.Error>}
          <LoginButton type="submit" width="100%" size="big">
          로그인
          </LoginButton>
        </LoginInputWrap>
      </form>
    </LoginWrap>
  )
};

export default Login;
