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
=======

//소스트리 머지로 하기 겁내지마! 
//필요한 부분 브랜치를 따기 -> 브랜치를 머지하면서 합쳐보기. 

//노션 올려진 글을 포폴을 바로 넣기 



// Tailwind CSS
// 페이지 2 
// 미리보기
// 연결 까지 admin
// 메인 내 네비게이션 
// 메인 

// 깃 초대 하기
// 프라이빗 


// 와이퍼 프레임

// 작동되는지, 훅에 대한 
// 메인 랜딩 최적화
// 메인페이지, 
// firebase 사용
// 버셀로 배포
// 인스타그램은 도메인 
// aws 올리기 

// seo 최적화 

// 폴더 구조
// 기능별 콤포넌트화
// 페이지(기능), 라우터 
// 테이블 구조
// 네비게이션 파일을 만드는 것 
// 1개의 기능만을 가져야 한다. 
// 기능별, 라우터, 에셋따로 
// crud 
// - 정렬
// - select
// 타입스크립트 하기



// 한 사람이 짠 코드 처럼 보이기
>>>>>>> sub
