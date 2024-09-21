import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../service/projects';
import { Project } from '../types/project';
import dynamic from 'next/dynamic';
import Header from '../components/header';  // Header 컴포넌트 추가
import Footer from '../components/footer';  // Footer 컴포넌트 추가

const MyCarousel = dynamic(() => import('../components/myCarousel'), { ssr: false });

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-black">
      <Header />  
      <main className="flex flex-col items-center w-full flex-1">
        <div className="w-full mt-8">
          <MyCarousel projects={projects} />
        </div>

        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.path} className="bg-white shadow-md rounded-lg p-6">
              <Image
                src={project.path}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
              <h2 className="text-xl font-bold mt-4">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.descript}</p>
              <Link href={`/projects/${project.path}`} className="text-primary mt-4 block">
                View More
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer /> 
    </div>
  );
}
