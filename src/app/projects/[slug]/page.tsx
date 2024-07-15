import { getProject } from '@/service/projects';
import CustomImage from '../../../components/customImage';
import { notFound } from 'next/navigation';


type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
    return null;
  }

  const imagePath = project.path;

  return (
    <div className="container">
      <h1>{project.title}</h1>
      <div className="projectImage">
        {imagePath ? (
          <CustomImage
            imageData={{
              src: `/images/${project.path}`, 
              alt: project.title,
              width: 600,
              height: 400,
            }}
          />
        ) : (
          <div className="h-64 w-full flex items-center justify-center bg-gray-700 rounded-lg">
            <span className="text-white">이미지 없음</span>
          </div>
        )}
      </div>
      <p>{project.descript}</p>
    </div>
  );
}
