'use client' //CSR
import { useEffect, useState } from 'react'
import styles from './aboutCats.module.css'


export default function AboutCats() {
  //text 변수 초기화 데이터 가져오면 로딩중이라고 쓰임
  const [text, setText] = useState('Data Loading...😼')

  //뭐예요? CAT API 있어요?!
  useEffect(() => {
    // https://catfact.ninja/#/Facts/getFacts
    fetch('http://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]))
  }, [])

  // AboutCats()가 SSR일 때 async 함수로 만들어 사용한 것. revalidate isg 트리거 3초 
  // const response = await fetch('http://meowfacts.herokuapp.com', {
  //   // ISR 옵션, 3초마다 revalidate 되어 data를 가져 온다.
  //   next: { revalidate: 3 },
  //   // cache: 'default'
  // })
  // const data = await response.json()
  // const meowFactText = data.data[0]

  //아틀에 api리스폰스 값 사용 
  return <article className={styles.article}>About Cats: {text}</article>
}


//슬러그가 프롭스를 받아서 어떤 상태를 만드는지 확인! 