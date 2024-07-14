import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../service/projects';
import { Project } from '../types';

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col items-center pt-20 bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-8">Project</h1>
      <nav className="flex flex-col items-center gap-8 w-full px-4">
        {projects.map((project) => (
          <Link key={project.path} href={`/projects/${project.path}`} className="text-white no-underline w-full max-w-xl">
            <div className="bg-white bg-opacity-98 text-black rounded-lg p-6 text-center shadow-md backdrop-blur-lg hover:bg-opacity-20 hover:text-white transition duration-300 ease-in-out">
              <Image
                src={`/images/${project.path}.png`}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
              <h2 className="mt-4 text-xl">{project.title}</h2>
              <p className="mt-2"><strong>Date:</strong> {project.date}</p>
              <p className="mt-2">{project.descript}</p>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
