import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import ListItem from '../components/ListItem';
import { Modal } from '../components/modal/Modal';
import { ListWrap, Category, Title, Contents } from '../components/domains/feed';
import useConfirm from '../hooks/useConfirm';
import { SectionTitle, Group } from '../styles/pages/index';

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
{/*       <SectionTitle>나에게 꼭맞는 모임을 찾아보세요!</SectionTitle> */}
{/*       <p>{randomCategory}</p> */}
{/*       <ul> */}
{/*         {groups.map((group) => ( */}
{/*           <Group> */}
{/*             {group.name} */}
{/*           </Group> */}
{/*         ))} */}
{/*       </ul> */}
      <SectionTitle>다른 모임들이 어떻게 활동하는지 구경해보세요!</SectionTitle>
      <ListWrap>
        {feed.map((item) => (
          <ListItem key={item.id}>
            <div>
              <Category>{item.group.category}</Category>
              <Title>{item.title}</Title>
            </div>
            <Contents>{item.contents}</Contents>
          </ListItem>
        ))}
      </ListWrap>
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
