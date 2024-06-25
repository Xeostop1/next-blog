import Link from 'next/link';
import { getProjects } from '../service/projects';
import customImage from '../components/CustomImage';
import styles from './layout.module.css';
import { Project } from '../types';

export default async function Home() {
  // 서버 측에서 프로젝트 데이터를 가져옴
  const projects: Project[] = await getProjects();

  return (
    <div className={styles.container}>
      <h1>Project 공통 소개</h1>
      <nav className={styles.nav}>
        <div className={styles.projectImage}>
          <customImage
            imageData={{
              src: "/project_intro.png",
              alt: "index_landing",
              width: 150,
              height: 150,
            }}
          />
        </div>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className={styles.link}>
            {project.name}
          </Link>
        ))}
      </nav>
      <h1>Hello</h1>
    </div>
  );
}
