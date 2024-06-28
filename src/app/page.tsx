import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../service/projects';
import styles from './home.module.css';
import { Project } from '../types';

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project 공통 소개</h1>
      <nav className={styles.nav}>
        {projects.map((project) => (
          <Link key={project.path} href={`/projects/${project.path}`} className={styles.link}>
            <div className={styles.projectCard}>
              <Image
                src={`/images/${project.path}.png`}
                alt={project.title}
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <h2>{project.title}</h2>
              <p><strong>Date:</strong> {project.date}</p>
              <p>{project.descript}</p>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
