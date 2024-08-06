// components/MyCarousel.tsx
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'; 
import Link from 'next/link';
import { Project } from '../types'; 

// 반응형 설정
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1 
  }
};

// 슬라이더 타입 설정
interface MyCarouselProps {
  projects: Project[];
}

// MyCarousel 컴포넌트 정의
const MyCarousel = ({ projects }: MyCarouselProps) => {
  return (
    <Carousel responsive={responsive}>
      {projects.map((project) => (
        <div key={project.path} className="text-white no-underline p-2">
          <Link href={`/projects/${project.path}`}>
            <div className="bg-white bg-opacity-98 text-black rounded-lg p-6 text-center shadow-md backdrop-blur-lg hover:bg-opacity-20 hover:text-white transition duration-300 ease-in-out">
              {project.path ? (
                <Image
                  src={`/images/${project.path}`}
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
      ))}
    </Carousel>
  );
};

export default MyCarousel; // MyCarousel 컴포넌트 내보내기
