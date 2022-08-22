import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { useState } from "react";
import { Title } from "../../styles/pages/post/id";

const Post: NextPage = () => {
  const {query} = useRouter();
  
  return (
    <>
    <Title>제목</Title>
    
    post {query.id}
    </>
  )
}

export default Post;
