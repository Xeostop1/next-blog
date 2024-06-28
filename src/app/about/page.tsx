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
