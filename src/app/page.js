'use client';
import Image from 'next/image';

import AppLayout from '@/core/layout';
import Header from '@/core/components/Header';
import Greet from '@/core/components/Greet';

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Header />
      <Greet />
    </>
  );
}
