import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  const router = useRouter();

  return (
    <nav>
      <Link href={'/'}>
        <a>home</a>
      </Link>
      <Link href={'/'}>
        <a>feed</a>
      </Link>
      <Link href={'/mypage'}>
        <a>my page</a>
      </Link>
    </nav>
  )
}