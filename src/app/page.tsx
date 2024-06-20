import Link from 'next/link';
import styles from './layout.module.css';
import { getProjects } from '@/service/projects';
import CustomImage from '@/components/customImage';

// 서버 사이드에서 프로젝트 데이터를 가져옵니다.
export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

export default function Home({ projects }) {
  console.log('Server Components*****');

  return (
    <div className={styles.container}>
      <h1>Project 공통 소개</h1>
      <nav className={styles.nav}>
        <div className={styles.projectImage}>
          <CustomImage
            imageData={{
              src: "/project_intro.png",
              alt: "index_landing",
              width: 150,
              height: 150,
            }}
          />
        </div>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            {project.name}
          </Link>
        ))}
      </nav>
      <h1>Hello</h1>
      {/* <Counter /> */}
    </div>
  );
}
