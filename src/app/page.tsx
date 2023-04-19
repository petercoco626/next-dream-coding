// import Counter from '@/components/Counter';
import { Inter } from '@next/font/google';
import os from 'os'; // 노드 api

export default function Home() {
  console.log('--- 서버 사이드 랜더링 ---');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지</h1>
      {/* <Counter /> */}
    </>
  );
}
