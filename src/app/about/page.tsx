import Link from 'next/link'
//ts 형식 불러와서 사용 무슨 차이가 있지? 이렇게도 사용하나??? 
import { history } from '../../../data/history'


//css가 안되서 글로벌에 css h2, h3추가 
export default function AboutPage(){
    return(
      <div>
      <h2>About</h2>
      {history.map((yearData) => (
        <div key={yearData.year}>
          <h3>{yearData.year}</h3>
          <ul>
            {yearData.events.map((event) => (
              <li key={event.slug}>
                <Link href={`/about/${yearData.year}/${event.slug}`}>
                  {event.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
<<<<<<< HEAD

//소스트리 머지로 하기 겁내지마! 
//필요한 부분 브랜치를 따기 -> 브랜치를 머지하면서 합쳐보기. 

//노션 올려진 글을 포폴을 바로 넣기 


//드디어 성공!
=======
>>>>>>> d4829b31ad79005fc8ddd3231696e6e19b80f2c8
