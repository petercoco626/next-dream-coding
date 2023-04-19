'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('--- 클라이언트 사이드 랜더링 ---');
  const [count, setCounter] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCounter((pre: number) => pre + 1)}>
        숫자 증가 시키기.
      </button>
    </>
  );
}
