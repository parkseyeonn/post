import type { NextPage } from "next";
import { useState } from "react";
import Seo from "../../../components/Seo";
import { Modal } from "../../../components/modal/Modal";
import { Button, CategorySelector, Input, Title } from "../../../components/common";
import useForm from "../../../hooks/useForm";
import { FormItem, ButtonWrap, SearchInputWrap, SearchButton } from "../../../styles/pages/mypage/create";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const team_list_fake = [
  {id: 1, name: "팀원1", image: null, nickname: "영화바보", interests: ["영어", "영화"]},
];

const CreateGroup: NextPage = () => {
  const {values, errors, getFieldProps, handleSubmit} = useForm({
    initialValues: {name: "", category: "", members: "", introduction: ""},
    validate: (values) => {
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
    onSubmit: values => {},
  });

  //modal
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenTeam, setIsOpenTeam] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <>
    <Seo />
    <Title type="t2" style={{marginBottom: 20}}>그룹 만들기</Title>
    <form>
      <FormItem>
        <label htmlFor="name">이름</label>
        <Input
          id="name"
        />
      </FormItem>
      <FormItem>
        <div>카테고리</div>
        <Button type="button" size="normal" onClick={() => setIsOpenCategory(prev => !prev)}>카테고리 찾기</Button>
        <CategorySelector selectedCategories={selectedCategories}/>
      </FormItem>
      <FormItem>
        <div>팀원</div>
        <Button type="button" size="normal" onClick={() => setIsOpenTeam(prev => !prev)}>팀원 찾기</Button>
      </FormItem>
      <ButtonWrap>
         <Button type="button" size="big">생성하기</Button>
      </ButtonWrap>
      <Modal isOpen={isOpenCategory} handleClose={() => setIsOpenCategory(false)} title={"카테고리 찾기"}>
        <SearchInputWrap>
            <Input type="text"
                   style={{paddingRight: 40}}
                   id="searchCategory"
                   value={searchCategory}
                   onChange={e => setSearchCategory(e.target.value)}
            />
            <SearchButton>
                <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
        </SearchInputWrap>
      </Modal>
      <Modal isOpen={isOpenTeam} handleClose={() => setIsOpenTeam(false)} title={"팀원 찾기"}>
        <Input type="text" id="searchName" value={searchName} onChange={e => setSearchName(e.target.value)}/>
        {
          team_list_fake.map((user) => (
            <div key={user.id}>
              {user.nickname}
              <div>
              {user.interests.map((interest, index) => (
                <span key={index}>{interest}</span>
              ))}
              </div>
            </div>
          ))
        }
      </Modal>
    </form>
    </>
  )
}

export default CreateGroup;
