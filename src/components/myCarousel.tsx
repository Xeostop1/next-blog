'use client';
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'; 
import Link from 'next/link';
import { Project } from '../types';

// 반응형 설정
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, 
    partialVisibilityGutter: 100, // 양 옆의 아이템이 부분적으로 보이도록 설정
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

// 슬라이더 타입 설정
interface MyCarouselProps {
  projects: Project[];
}

//타입=> 정말 타입을 정의할 때 사용 (타입스크립트에 필요한 타입일때만 사용)
//인터페이스=> 스트렉처일 때 사용 (이것은 좀더 광범위한)
//json 

//재사용 할때 폴더에 사용

// MyCarousel 컴포넌트 정의 지금은 2개의 일을 하고 있음(셋업 / view )
// 왜 1개의 작동만 해야 하나? 셋업에 대한 부분을 찾을 수가 없다 
// 셋업만 따로 만들면 그것만 고치만 된다(지금은 view와 동작이 섞여 있음)
// 여기서도 2개의 구분을 하여서 진행! 
const MyCarousel = ({ projects }: MyCarouselProps) => {
  return (
    <Carousel 
      responsive={responsive}
      showDots={true} 
      infinite={true}
      autoPlay={true} 
      autoPlaySpeed={2000} 
      partialVisible={true} // 양 옆의 항목이 부분적으로 보이도록 설정
    >
      {projects.map((project) => (
        <div key={project.path} className="text-white no-underline p-2">
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
      ))}
    </Carousel>
  );
};

export default MyCarousel; // MyCarousel 컴포넌트 내보내기
