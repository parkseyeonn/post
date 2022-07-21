import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../../../components/Seo';
import { Modal } from '../../../components/modal/Modal';
import { Button, CategorySelector, Input, Title } from '../../../components/common';
import useForm from '../../../hooks/useForm';

const team_list_fake = [
  {id: 1, name: '팀원1', image: null, nickname: '영화바보', interests: ['영어', '영화']},
];

const CreateGroup: NextPage = () => {
  const {values, errors, getFieldProps, handleSubmit} = useForm({
    initialValues: {name: '', category: '', members: ''},
    validate: (values) => {
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
    onValidate: values => {},
  });

  //modal
  const [isOpen, setIsOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  return (
    <>
    <Seo />
    <Title type="t2" style={{marginBottom: 20}}>그룹 만들기</Title>
    <form>
      <Input
        id="name"
        prepend={<label htmlFor="name">이름</label>}
      />
{/*  카테고리 생성하기?       */}
      <CategorySelector />
      <Button type="button" size="normal" onClick={() => setIsOpen(prev => !prev)}>팀원 찾기</Button>
{/*         카테고리, 초기 팀원*/}
      <Button type="button">생성하기</Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} title={'팀원 찾기'} size={1000}>
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
