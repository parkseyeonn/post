import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../../../components/Seo';
import { Modal } from '../../../components/modal/Modal';
import { Button, CategorySelector, Input, Title } from '../../../components/common';

const CreateGroup: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Seo />
    <Title type="t2">생성</Title>
    <form>
      <Input
        id="name"
        prepend={<label htmlFor="name">이름</label>}
      />
      <CategorySelector />
      <Button type='button' size={'normal'} onClick={() => setIsOpen(prev => !prev)}>팀원 찾기</Button>
{/*         카테고리, 초기 팀원*/}
      <Button type='button'>생성하기</Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} title={'팀원 찾기'} size={1000}>
        팀원 찾기 모달 내용
      </Modal>
    </form>
    </>
  )
}

export default CreateGroup;
