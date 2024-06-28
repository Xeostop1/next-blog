import { getProject } from '@/service/projects';
import CustomImage from '@/components/CustomImage';
import { notFound } from 'next/navigation';
import { Project } from '@/types';

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

  return (
    <div className="container">
      <h1>{project.title}</h1>
      <div className="projectImage">
        <CustomImage
          imageData={{
            src: `/images/${project.path}.png`,
            alt: project.title,
            width: 600,
            height: 400,
          }}
        />
      </div>
      <p>{project.descript}</p>
    </div>
  );
}
