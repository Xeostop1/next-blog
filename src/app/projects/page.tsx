import Link from 'next/link'
import styles from './layout.module.css'
import { getProjects } from '@/service/projects'
import AboutCats from '@/components/aboutCats'
import CustomImage from '@/components/customImage';


export default async function Projects() {
  const projects = await getProjects()

  return (
    <>
      <h1>Project 공통 소개</h1>
      <nav className={styles.deNav}>  
      <div style={{width: "30%"}}> 
        <CustomImage
          imageData={{
            src: "/project_intro.png",
            alt: "index_landing",
            width: 150 ,
            height: 150,
          }}
          />
          </div>
        {projects.map((project, index) => (
          <>
<<<<<<< HEAD
            {/* <Link href={`/projects/${project.id}`}>{project.name}</Link> */}
            <Link href={`/projects/images/${project.id}`}>{project.name}</Link>
=======
            <Link href={`/projects/${project.id}`}>{project.name}</Link>
>>>>>>> d4829b31ad79005fc8ddd3231696e6e19b80f2c8
          </>
        ))}
      </nav>
      {/* <AboutCats /> CSR */}
    </>
  )
}
