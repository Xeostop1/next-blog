import { getProject, getProjects } from '@/service/projects'
import { notFound } from 'next/navigation'
import CustomImage from '@/components/customImage';


type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `project 이름: ${params.slug}`,
  }
}

export default async function ProjectDescript({ params: { slug } }: Props) {
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  //서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 화면에 뿌려준다
  return (
    <div>
      {project.name} 
      <CustomImage
          imageData={{
            src: `${project.img}`,
            alt: `${project.name}`,
            width: 300,
            height: 200,
          }}
        />
      {project.descript} 
    </div>
    
 )
}

//page 미리 생성 generateStaticParams 사용
// Next.js에서 제공하는 Server Component는 비동기 가능, async await만 해주면 비동기 사용가능.
export async function generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 할 것.(SSG)
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.id,
  }))
}
