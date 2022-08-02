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
        if (values.name.length > 5) { errors.name = "이름은 5자 이하로 입력해주세요."; }
        if (!values.nickname) { errors.nickname = "닉네임을 입력해주세요."; }
        if (values.nickname.length > 5 || values.nickname.length < 2) { errors.name = "닉네임은 2자 이상, 5자 이하로 입력해주세요."; }
        if (!values.password) { errors.password = "비밀번호를 입력해주세요."; }
        if (PASSWORD_REG.test(values.password)) { errors.password = "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상 16자 이하로 만들어주세요."; }
        if (values.password !== values.confirmPassword) { errors.password = "비밀번호와 비밀번호 확인이 같은지 확인해주세요."; }

        return errors;
    },
    onSubmit: values => {
      console.log(values);
    }
  });
  return (
    <Wrap>
      <InputWrap>
        <form>
          <Input.Label htmlFor="name">이름</Input.Label>
          <Input {...getFieldProps("name")} type="text" placeholder="이름을 입력해주세요." />
          {touched.name && errors.name && <Input.Error>{errors.name}</Input.Error>}
        </form>
      </InputWrap>
    </Wrap>
  )
};

export default Join;
