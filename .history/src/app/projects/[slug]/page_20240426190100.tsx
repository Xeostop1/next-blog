//네비게이션에서 404낫파운드 임포트(next)
import { getProject, getProjects } from '@/service/projects'
import { notFound } from 'next/navigation'

//Props의 타입을 정의 슬러그는 스트링(url로 쓸꺼라서)

type Props = {
  params: {
    slug: string
  }
}

//내가 필요한 것을 전달하는 역할(뒤에 내가 필요한 정보만 사용하기 위해)
export function generateMetadata({ params }: Props) {
  return {
    title: `project 이름: ${params.slug}`,
  }
}

//프로젝트 상세정보 비동기! 슬러그로 조회 없으면 404
//url뒤에 안에있는것을 살펴보기 위해 
export default async function ProjectDescript({ params: { slug } }: Props) {
  const project = await getProject(slug)
console.log('프로젝트 데이터 ',project )
if (!project) {
  return {
    notFound: true,
  };  
}
  //서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 화면에 뿌려준다
return (
    <div>
      <h1>{project.name} Page with Descript</h1>
      <p>{project.descript}</p>
      <img src={project.img} alt={project.name} />
    </div>
  )
}

//page 미리 생성 generateStaticParams 사용(next ssg) 슬러그: 프로젝트.id("id": "1234")
// Next.js에서 제공하는 Server Component는 비동기 가능, async await만 해주면 비동기 사용가능.
export async function generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 할 것.(SSG)
  //id가 있으면 모든 페이지를 미리 만들어줘 
  
  const projects = await getProjects()
  return projects.map((project) => ({
    slug:project.href,
  }))
}
