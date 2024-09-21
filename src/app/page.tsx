import { getProjects } from '../service/projects';
import { Project } from '../types/project';
import dynamic from 'next/dynamic';
import ProductGrid from '../components/projextGrid';  

// 동적 로딩된 슬라이더 컴포넌트
const MyCarousel = dynamic(() => import('../components/myCarousel'), { ssr: false });

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <>
      <section className="w-full max-w-6xl mx-auto my-8">
        <MyCarousel projects={projects} />  
      </section>
      <ProductGrid projects={projects} /> 
    </>
  );
}