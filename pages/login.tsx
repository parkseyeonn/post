import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import Seo from "../components/Seo";
import { Button, Input } from "../components/common";
import { Modal } from "../components/modal/Modal";
import useForm from "../hooks/useForm";
import {Wrap, InputWrap, SubmitButton, JoinLink} from "../styles/pages/login";

interface FormType {[key: string]: string}

const Login: NextPage = () => {
  const {values, errors, touched, handleSubmit, getFieldProps} = useForm({
    initialValues: {id: "", password: ""},
    validate: values => {
      const errors = {
        id: "",
        password: "",
      };

      if (!values.id) {
        errors.id = "아이디를 입력해주세요."
      }
      if (!values.password) {
        errors.password = "비밀번호를 입력해주세요."
      }
      return errors;
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <Wrap>
      <Seo />
      <InputWrap>
        <form onSubmit={handleSubmit}>
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
          <SubmitButton type="submit" width="100%" size="big">
          로그인
          </SubmitButton>
       </form>
       <Link href={"/join"} passHref>
         <JoinLink>회원가입</JoinLink>
       </Link>
     </InputWrap>
    </Wrap>
  )
};

export default Login;
