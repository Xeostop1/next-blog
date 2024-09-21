'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { Project } from '../types/project';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, partialVisibilityGutter: 100 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, partialVisibilityGutter: 50 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 30 }
};

// CarouselSetup 컴포넌트
const CarouselSetup = ({ children }: {children: React.ReactNode;}) => {
  return (
    <Carousel 
      responsive={responsive}
      showDots
      infinite
      autoPlay
      autoPlaySpeed={2000}
      partialVisible
    >
      {children}
    </Carousel>
  );
};

// MyCarousel 컴포넌트
const MyCarousel = ({ projects }: {projects: Project[];}) => {
  return (
    <CarouselSetup>
      {projects.map((project) => (
        <div key={project.path} className="carousel-item">
          <Image
            src={`/images/${project.path}.jpg`}
            alt={project.title}
            width={1920}
            height={600}
            className="w-full h-auto"
          />
        </div>
      ))}
    </CarouselSetup>
  );
};

export default MyCarousel;
