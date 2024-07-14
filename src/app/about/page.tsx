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


// 로그인 기능 firebase 추가

//라이브러리 정리 5개 notion은 배포 후 다시 결정
//다중 항목을 한 번에 표시할 수 있는 캐러셀(슬라이더) 컴포넌트, 반응형 디자인을 지원 다양한 화면 크기에서 사용
//yarn add react-multi-carousel

//Markdown을 React 컴포넌트로 렌더링 ,Markdown을 쉽게 HTML로 변환
//yarn add react-markdown

// 코드 블록을 구문 강조(syntax highlighting)하여 렌더링
//yarn add react-syntax-highlighter

//nodemailer는 Node.js 환경에서 이메일을 보내기 위한 라이브러리
//yarn add nodemailer

//리액트 아이콘! 사용성공
//yarn add react-icons




