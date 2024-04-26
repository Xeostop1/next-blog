// 필요한 라이브러리와 함수를 임포트합니다.
import { getProject, getProjects } from '@/service/projects';
import { notFound } from 'next/navigation';

// Props의 타입을 정의합니다. slug는 URL에서 사용될 문자열입니다.
type Props = {
  params: {
    slug: string
  }
}

// 메타데이터를 생성하는 함수입니다.
export function generateMetadata({ params }: Props) {
  return {
    title: `프로젝트 이름: ${params.slug}`,
  }
}

// getStaticProps를 사용하여 페이지의 프로젝트 데이터를 가져옵니다.
export async function getStaticProps({ params }) {
  const project = await getProject(params.slug);
  console.log('프로젝트 데이터:', project); // 서버측 디버깅을 위한 로그

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project }, // 페이지 컴포넌트로 프로젝트 데이터 전달
  };
}

// 프로젝트의 세부 정보를 보여주는 리액트 컴포넌트입니다.
export default function ProjectDescript({ project }) {
  console.log('페이지에서 사용되는 프로젝트 데이터:', project); // 클라이언트측 디버깅을 위한 로그

  return (
    <div>
      <h1>{project.name} Page with Descript</h1>
      <p>{project.descript}</p>
      <img src={project.img} alt={project.name} />
    </div>
  );
}

// 모든 프로젝트의 정적 경로를 생성하는 함수입니다.
export async function getStaticPaths() {
  const projects = await getProjects();
  console.log('모든 프로젝트:', projects); // 서버측 디버깅을 위한 로그

  const paths = projects.map(project => ({
    params: { slug: project.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}
