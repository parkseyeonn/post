import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../components/Seo';
import { FeedLoader } from '../components/post';
import { feedData } from '../data';

const Group: NextPage = () => {

  return (
    <div>
      <Seo />
      {[...Array(10)].map((_, index) => (
        <FeedLoader key={index}/>
      ))}
    </div>
  )
};

export default Group;
