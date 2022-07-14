import type { NextPage } from 'next';
import Link from 'next/link';
import Seo from '../../components/Seo';
import ListItem from '../../components/ListItem';
import {ListWrap} from '../../styles/pages/mypage';

const menu = [
    {name: '그룹 생성', link: '/mypage/group/create'},
    {name: '그룹 관리', link: '/mypage/group/management'},
    {name: '그룹원 관리', link: '/mypage/group/member'},
]

const MyPage: NextPage = () => {
  return (
    <>
    <Seo />
    <div>
{/* todo user profile*/}
      <ListWrap>
      {menu?.map((item, index) => (
        <ListItem>
          <Link href={item.link}>
            <a>{item.name}</a>
          </Link>
        </ListItem>
      ))}
      </ListWrap>
    </div>
    </>
  )
}

export default MyPage
