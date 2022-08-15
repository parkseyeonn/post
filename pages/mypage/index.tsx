import type { NextPage } from "next";
import Link from "next/link";
import Seo from "../../components/Seo";
import { ListItem } from "../../components/common";
import {
  Profile,
  ProfileImage,
  Name,
  LinkList,
  LinkWrap,
  LinkItem
} from "../../styles/pages/mypage";

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
      <Profile>
        <ProfileImage />
        <Name>닉네임</Name>
        <Name>2002.02.02</Name>
      </Profile>
      <LinkList>
      {menu?.map((item, index) => (
        <LinkWrap key={index}>
          <Link href={item.link} passHref>
            <LinkItem>{item.name}</LinkItem>
          </Link>
        </LinkWrap>
      ))}
      </LinkList>
    </div>
    </>
  )
}

export default MyPage
