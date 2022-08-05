import type {nextPage} from "next";
import { Input } from "../components/common";
import useForm from "../hooks/useForm";
import { Wrap, InputWrap, SubmitButton } from "../styles/pages/join";

const PASSWORD_REG = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

const Join: NextPage = () => {
  const {values, errors, touched, handleSubmit, getFieldProps} = useForm({
    initialValues: {name: "", nickname: "", password: "", confirmPassword: "",},
    validate: values => {
        const errors = {
          name: "",
          nickname: "",
          password: "",
        };
        if (!values.name) { errors.name = "이름을 입력해주세요."; }
        if (!values.nickname) { errors.nickname = "닉네임을 입력해주세요."; }
        if (values.nickname.length > 5 || values.nickname.length < 2) { errors.name = "닉네임은 2자 이상, 5자 이하로 입력해주세요."; }
        if (!values.password) { errors.password = "비밀번호를 입력해주세요."; }
        if (!errors.password && !PASSWORD_REG.test(values.password)) { errors.password = "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상 16자 이하로 만들어주세요."; }
        if (!errors.password && values.password !== values.confirmPassword) { errors.password = "비밀번호와 비밀번호 확인이 같은지 확인해주세요."; }

        return errors;
    },
    onSubmit: values => {
      console.log(values);
    }
  });
  return (
    <Wrap>
      <InputWrap>
        <form onSubmit={handleSubmit}>
          <Input.Label htmlFor="name">이름</Input.Label>
          <Input {...getFieldProps("name")} type="text" />
          {touched.name && errors.name && <Input.Error>{errors.name}</Input.Error>}
          <Input.Label htmlFor="nickname">닉네임</Input.Label>
          <Input {...getFieldProps("nickname")} type="text" maxLength={5} />
          {touched.nickname && errors.nickname && <Input.Error>{errors.nickname}</Input.Error>}
          <Input.Label htmlFor="password">비밀번호</Input.Label>
          <Input {...getFieldProps("password")} type="password" />
          {touched.password && errors.password && <Input.Error>{errors.password}</Input.Error>}
          <Input.Label htmlFor="confirmPassword">비밀번호 확인</Input.Label>
          <Input {...getFieldProps("confirmPassword")} type="password" />
          <SubmitButton type="submit" width="100%" size="big">
            회원가입
          </SubmitButton>
        </form>
      </InputWrap>
    </Wrap>
  )
};

export default Join;
