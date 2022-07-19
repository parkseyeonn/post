import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../components/Seo';
import { Feed, FeedList } from '../components/post';
import { Button, Title } from '../components/common';
import { Modal } from '../components/modal/Modal';
import useConfirm from '../hooks/useConfirm';

const Home: NextPage = () => {
  const { show } = useConfirm();
  const [isOpen, setIsOpen] = useState(false);
  const [randomCategory, setRandomCategory] = useState('공부');
  const [groups, setGroups] = useState([{
    id: 1,
    name: '여행가자',
    category: '공부',
  }]);
  const [feed, setFeed] = useState([{
    id: 1,
    thumbnail: null,
    title: '7/11 스페인어 스터디',
    contents: '바쁜 현대인들이 모여서 느슨하게 스페인어를 공부합니다. - 매일 5개 단어 외우기',
    group: {
      name: '여행가자',
      category: '공부',
    },
  },
  {
    id: 2,
    thumbnail: null,
    title: '[독서] 별의 계승자 1/5',
    contents: '별의 계승자 탐독하기 1.어디까지 읽었나요?',
    group: {
        name: '책읽자',
        category: '취미',
        },
    },
    {
    id: 3,
    thumbnail: null,
    title: '🚀알고리즘 | 배열',
    contents: '',
    group: {
        name: '알고스터디',
        category: '공부',
    },
    },
    {
    id: 4,
    thumbnail: null,
    title: '7/11 스페인어 스터디',
    contents: '바쁜 현대인들이 모여서 느슨하게 스페인어를 공부합니다. - 매일 5개 단어 외우기',
    group: {
        name: '여행가자',
        category: '공부',
    },
    },
  ]);

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
{/*       <Title type='t1'>나에게 꼭맞는 모임을 찾아보세요!</Title> */}
{/*       <p>{randomCategory}</p> */}
{/*       <ul> */}
{/*         {groups.map((group) => ( */}
{/*           <Group> */}
{/*             {group.name} */}
{/*           </Group> */}
{/*         ))} */}
{/*       </ul> */}
      <Title type='t1'>다른 모임들이 어떻게 활동하는지 구경해보세요!</Title>
      <FeedList>
        {feed.map((item) => (
          <Feed key={item.id}
           category={item.group.category}
           title={item.title}
           contents={item.contents}
           />
        ))}
      </FeedList>
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
