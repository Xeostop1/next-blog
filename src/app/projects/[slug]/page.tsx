import { getProject, getProjects } from '@/service/projects'
import { notFound } from 'next/navigation'
import CustomImage from '@/components/customImage';
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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

//리다이렉트 파라미터 2개 path, type(replace/ push)
async function fetchTeam(id: string) {
  const res = await fetch(`http://localhost:3000/projects/${id}`)
  if (!res.ok) return undefined
  return res.json()
}

export async function Profile({ params }: { params: { id: string } }) {
  const router = useRouter();

  useEffect(() => {
    if (!params.id) {
      router.push('/'); // 홈으로 리다이렉트
      return;
    }

    const fetchData = async () => {
      const team = await fetchTeam(params.id);
      if (!team) {
        router.push('/'); // 홈으로 리다이렉트
      }
    };

    fetchData();
  }, [params.id, router]);

  return (
    <div>
      {}
    </div>
  )
}