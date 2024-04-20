'use client'
import React, { useState } from 'react'
//클라이언트 단 사용 방법
export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount((num) => num + 1)}>Click하면 숫자 증가</button>
      </p>
      <button onClick={() => setCount((num) => num - 1)}>Click하면 숫자 감소</button>
    </>
  )
}
