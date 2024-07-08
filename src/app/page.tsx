import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../service/projects';
import { Project } from '../types';

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col items-center pt-20 bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-8">Project 공통 소개</h1>
      <nav className="flex flex-col items-center gap-8">
        {projects.map((project) => (
          <Link key={project.path} href={`/projects/${project.path}`} className="text-white no-underline">
            <div className="bg-white text-black rounded-lg p-6 text-center w-4/5 max-w-xl shadow-md mb-8">
              <Image
                src={`/images/${project.path}.png`}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
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
