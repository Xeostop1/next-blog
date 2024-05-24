'use client'
import React, { useState } from 'react'
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
