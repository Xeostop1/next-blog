//프로젝트의 메인페이지 get있다? -> 데이터를 가지고 온다 
import Link from 'next/link'
import styles from './layout.module.css'
import { getProjects } from '@/service/projects'
import AboutCats from '@/components/aboutCats'
import CustomImage from '@/components/customImage';


//test로 페이지 내에서 만들었다. 현재 service/projects.ts에서 불러서 사용 중.
//const projects = ['envSettings', 'UI', 'TypeScript', 'Next.js']

//비동기적으로 가져옴 map-> 렌더링! a의 주소는 project.id=1234 내용은 프로젝트 네임
//url = 내주소/123  a내용으로는 blog 이렇게 
export default async function Projects() {
  //서버 파일(DB)에 있는 프로젝트 리스트를 읽어 와서 뿌려 준다.
//리액트 styles.deNav 클래스로 스타일 구성
  const projects = await getProjects()

  return (
    <>
      <h1>Project 공통 소개</h1>
      <nav className={styles.deNav}>  
      <div style={{width: "30%"}}> {/* 컨테이너의 너비를 50%로 설정 */}
        <CustomImage
          imageData={{
            src: "/project_intro.png",
            alt: "index_landing",
            width: 150 ,
            height: 150,
          }}
          />
          </div>
        {projects.map((project, index) => (
          <>
            {/* <Link href={`/projects/${project.id}`}>{project.name}</Link> */}
            <Link href={`/projects${project.href}`}>{project.name}</Link>
          </>
        ))}
      </nav>
      <AboutCats /> {/* CSR */}
    </>
  )
}
