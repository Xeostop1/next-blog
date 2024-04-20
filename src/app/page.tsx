import Counter from '@/components/counter'
//이미지에 쓰이는 next js 구성요서 지연로딩, 자동이미지 최적화
import Image from 'next/image' 
import os from 'os' //노드 API
//여기는 서버니까

export default function Home() {
  console.log('Server Components?🥰')
  console.log(os.hostname()) //노드 API Test

  return (
    <>
      <h1>index page 여기서 부터 시작이에요 그리고 서버로 볼 수 있어요</h1>
      <Counter />
    </>
  )
}
