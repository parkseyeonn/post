import type { NextPage } from "next";
import { useState } from "react";
import { Input } from "../components/common";
import Seo from "../components/Seo";
import { FeedLoader } from "../components/post";
import { feedData } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Group: NextPage = () => {

  return (
    <div>
      <Seo />
      <Input append={<FontAwesomeIcon icon={faSearch} />}/>
      {[...Array(10)].map((_, index) => (
        <FeedLoader key={index}/>
      ))}
    </div>
  )
};

export default Group;
