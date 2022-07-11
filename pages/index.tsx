import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import {Modal} from '../components/modal/Modal';
import { confirm } from '../components/modal/confirm';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feed, setFeed] = useState([{
    id: 1,
    thumbnail: null,
    title: '7/11 스페인어 스터디',
    contents: '바쁜 현대인들이 모여서 느슨하게 스페인어를 공부합니다. - 매일 5개 단어 외우기',
    group: {
      name: '여행가자',
    },
  }]);

  const onConfirmClick = async (options) => {
    const result = await confirm("Are you sure?", options);
    console.log(result);
    if (result) {
      return console.log("You click yes!");
    }
  };

  return (
    <>
    <Seo />
    <div>
      INIT
      <div>모임 찾기</div>
{/*   todo 모임 리스트 추가하기     */}
      <div>공부 목록</div>
      {feed.map((item) => (
        <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.contents}</div>
        </div>
      ))}
      <Button size={'normal'} onClick={() => setIsOpen(prev => !prev)}>
        open modal
      </Button>
      <Button size={'normal'} onClick={onConfirmClick}>
        test confirm
      </Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} title={'title'}>
        modal body test
      </Modal>
    </div>
    </>
  )
}

export default Home
