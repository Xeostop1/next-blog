'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Project } from '../types/project';  // 기존에 정의된 Project 인터페이스 import
import Image from 'next/image';
import Link from 'next/link';

// 반응형 설정
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  }
};

// 캐러셀 설정 컴포넌트
type CarouselSetup = {
  children: React.ReactNode;
};

const CarouselSetup = ({ children }: CarouselSetup) => {
  return (
    <Carousel 
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      partialVisible={true}
    >
      {children}
    </Carousel>
  );
};

// 프로젝트 아이템 컴포넌트
type ProjectItemProps = {
  project: Project;  // 기존에 정의된 Project 인터페이스 사용
};

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="text-white no-underline p-2">
      <Link href={`/projects/${project.path}`}>
        <div className="bg-white bg-opacity-98 text-black rounded-lg p-6 text-center shadow-md backdrop-blur-lg hover:bg-opacity-20 hover:text-white transition duration-300 ease-in-out">
          {project.path ? (             
            <Image
              src={`/images/${project.path}.jpg`}
              alt={project.title}
              width={300}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          ) : (
            <div className="h-64 w-full flex items-center justify-center bg-gray-700 rounded-lg">
              <span className="text-white">이미지 없음</span>
            </div>
          )}
          <h2 className="mt-4 text-xl">{project.title}</h2>
          <p><strong>Date:</strong> {project.date}</p>
          <p>{project.descript}</p>
        </div>
      </Link>
    </div>
  );
};

// MyCarousel 컴포넌트
type MyCarouselProps = {
  projects: Project[];  // 기존에 정의된 Project 인터페이스의 배열 사용
};

const MyCarousel = ({ projects }: MyCarouselProps) => {
  return (
    <CarouselSetup>
      {projects.map((project) => (
        <ProjectItem key={project.path} project={project} />
      ))}
    </CarouselSetup>
  );
};

export default MyCarousel;