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

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.id,
  }))
}
