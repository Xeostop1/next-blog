import Counter from '@/components/counter'
//이미지에 쓰이는 next js 구성요서 지연로딩, 자동이미지 최적화
import CustomImage from '@/components/customImage';
import os from 'os' //노드 API
//여기는 서버니까

export default function Home() {
  console.log('Server Components?🥰')
  console.log(os.hostname()) //노드 API Test

  return (
    <>
         <div style={{width: "50%"}}> {/* 컨테이너의 너비를 50%로 설정 */}
        <CustomImage
          imageData={{
            src: "/laptop.jpeg",
            alt: "index_landing",
            width: 300,
            height: 200,
          }}
        />
      </div>
      <h1>Hello</h1>
      {/* <Counter /> */}
    </>
  )
}
