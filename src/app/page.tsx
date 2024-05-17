import Counter from '@/components/counter'
import CustomImage from '@/components/customImage';
import os from 'os' 

export default function Home() {
  console.log('Server Components*****')
  console.log(os.hostname()) 

  return (
    <>
         <div style={{width: "50%"}}> 
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
