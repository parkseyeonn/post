import type { NextPage } from "next";
import Link from "next/link";
import Seo from "../../components/Seo";
import { ListItem } from "../../components/common";

const user = {
  name: '이름이',
  nickname: '이므미',
  group: {
    name: '스터디그룹',
    tag: ['국어', '영어', '수학'],
    introduction: '같이 공부하자!',
  },
};

const menu = [
    {name: "그룹 생성", link: "/mypage/group/create"},
    {name: "그룹 관리", link: "/mypage/group/management"},
    {name: "그룹원 관리", link: "/mypage/group/member"},
]

const MyPage: NextPage = () => {
  return (
    <>
    <Seo />
    <div>
{/* todo user profile*/}
      <ul>
      {menu?.map((item, index) => (
        <ListItem key={index}>
          <Link href={item.link}>
            <a>{item.name}</a>
          </Link>
        </ListItem>
      ))}
      </ul>
    </div>
    </>
  )
}

export default MyPage
