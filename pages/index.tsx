import type { NextPage } from 'next';
import { useState } from 'react';
import Seo from '../components/Seo';
import {Modal} from '../components/modal/Modal';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Seo />
    <div>
      INIT
      <button onClick={() => setIsOpen(prev => !prev)}>
        open modal
      </button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        modal body test
      </Modal>
    </div>
    </>
  )
}

export default Home
