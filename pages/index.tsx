import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { Modal } from '../components/modal/Modal';
import useConfirm from '../hooks/useConfirm';

const Home: NextPage = () => {
  const { show } = useConfirm();
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

  const onConfirmClick = async () => {
    show({
        message: 'hi',
        onCancel: () => {},
    });
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
      <Button size={'normal'} onClick={() => onConfirmClick()}>
        test confirm
      </Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} title={'title'} size={1000}>
        modal body test
      </Modal>
    </div>
    </>
  )
}

export default Home
