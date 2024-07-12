import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../service/projects';
import { Project } from '../types';

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen pt-20">
      <h1 className="text-4xl mb-8">Project 공통 소개</h1>
      <nav className="flex flex-col items-center gap-8">
        {projects.map((project) => (
          <Link key={project.path} href={`/projects/${project.path}`} className="text-white no-underline w-full max-w-md">
            <div className="bg-white bg-opacity-10 text-black rounded-lg p-6 text-center shadow-md backdrop-blur-lg mb-8">
              <Image
                src={`/images/${project.path}.png`}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg w-full h-auto mx-auto"
              />
              <h2 className="mt-4 text-xl text-white">{project.title}</h2>
              <p className="text-gray-300"><strong>Date:</strong> {project.date}</p>
              <p className="text-gray-300">{project.descript}</p>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
