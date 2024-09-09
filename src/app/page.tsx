import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../service/projects';
import { Project } from '../types/project';
import dynamic from 'next/dynamic';

// MyCarousel 컴포넌트를 동적 로드하여 클라이언트 측에서만 렌더링
const MyCarousel = dynamic(() => import('../components/myCarousel'), { ssr: false });
// 반응형에 대한 부분 질문 필수 

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-8">Project</h1>
      <div className="w-full mt-8">
        <MyCarousel projects={projects} /> {/* 모든 프로젝트를 슬라이더로 표시 */}
      </div>
    </div>
  );
}
