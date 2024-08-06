import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../service/projects';
import { Project } from '../types';
//공통은 모두 -> 글로벌, 레이아웃만 사용 
//기능페이지는 최대한 쓰지 않는 방향으로 테일원드 사용! 
//주석을 이용해서 \n 넘길 수 있음 -> 
export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-8">Project</h1>
      <nav className="flex flex-col items-center gap-8 w-full px-4">
        {projects.map((project) => (
          <Link key={project.path} href={`/projects/${project.path}`} className="text-white no-underline">
           <div className="bg-white bg-opacity-98 text-black 
                          rounded-lg p-6 text-center shadow-md 
                          backdrop-blur-lg hover:bg-opacity-20 
                          hover:text-white transition duration-300 ease-in-out">
            {project.path ? (
              <Image
                src={`/images/${project.path}`}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
            ) : (
              <div className="h-64 w-full flex items-center justify-center bg-gray-700 rounded-lg">
                <span className="text-white">이미지 없음</span>
              </div>
            )}
               <h2 className="mt-4 text-xl">{project.title}</h2>
              <p><strong>Date:</strong> {project.date}</p>
              <p>{project.descript}</p>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
