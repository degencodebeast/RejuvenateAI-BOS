'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import WhatWeDo from '@/components/what-we-do';
import WorkWithUs from '@/components/work-with-us';
import TalkToNutritionist from '@/components/talk-to-nutritionist';
import CTA from '@/components/cta';
import Footer from '@/components/footer';
import { useSyncContentHeight } from 'near-social-bridge';
import DashBoardLayout from './layout';

const App = ({ navigation }: any) => {
  useSyncContentHeight();
  return (
    <DashBoardLayout>
      <div className='bg-primaryBeige min-h-screen'>
        <div className='px-4 lg:px-8 w-full'>
          <Header navigator={navigation} />
        </div>
        <div className=' h-7 bg-[#EEC438]' />
        <Hero />
        <div className='px-4 lg:px-8'>
          <WhatWeDo />
        </div>
        <WorkWithUs />
        <TalkToNutritionist />
        <CTA />
        <Footer />
      </div>
    </DashBoardLayout>
  );
};

export default App;
