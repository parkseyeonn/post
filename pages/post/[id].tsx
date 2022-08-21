import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { useState } from "react";

const Post: NextPage = () => {
  const {query} = useRouter();
  
  return (
    <>
    post {query.id}
    </>
  )
}

export default Post;
