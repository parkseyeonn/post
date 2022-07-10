import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import {Modal} from '../components/modal/Modal';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Seo />
    <div>
      INIT
      <Button size={'normal'} onClick={() => setIsOpen(prev => !prev)}>
        open modal
      </Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} title={'title'}>
        modal body test
      </Modal>
    </div>
    </>
  )
}

export default Home
