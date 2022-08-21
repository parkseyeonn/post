import type { NextPage } from "next";
import { useState } from "react";
import Seo from "../components/Seo";
import { Feed, FeedList } from "../components/post";
import { Button, Title } from "../components/common";
import { Modal } from "../components/modal/Modal";
import useConfirm from "../hooks/useConfirm";
import { feedData } from "../data";

const Home: NextPage = () => {
  const { show } = useConfirm();

  const [isOpen, setIsOpen] = useState(false);
  const [randomCategory, setRandomCategory] = useState("공부");
  const [groups, setGroups] = useState([{
    id: 1,
    name: "여행가자",
    category: "공부",
  }]);
  const [feed, setFeed] = useState(feedData);

  const onConfirmClick = async () => {
    show({
        message: "hi",
        onCancel: () => {},
    });
  };

  return (
    <>
    <Seo />
    <div>
{/*       <Title type="t1">나에게 꼭맞는 모임을 찾아보세요!</Title> */}
{/*       <p>{randomCategory}</p> */}
{/*       <ul> */}
{/*         {groups.map((group) => ( */}
{/*           <Group> */}
{/*             {group.name} */}
{/*           </Group> */}
{/*         ))} */}
{/*       </ul> */}
      {/* <Title type="t1"></Title> */}
      <FeedList>
        {feed.map((item) => (
          <Feed key={item.id}
           id={item.id}
           category={item.group.category}
           title={item.title}
           contents={item.contents}
           />
        ))}
      </FeedList>
      <Button size={"normal"} onClick={() => setIsOpen(prev => !prev)}>
        open modal
      </Button>
      <Button size={"normal"} onClick={() => onConfirmClick()}>
        test confirm
      </Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} title={"title"}>
        modal body test
      </Modal>
    </div>
    </>
  )
}

export default Home
