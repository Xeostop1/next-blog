import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { Project } from '../types/project';
import { ReactNode } from 'react';

const CarouselSetup = ({responsive, children,}: {responsive: ResponsiveType; children: ReactNode;}) => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      showDots
      partialVisible
    >
      {children}
    </Carousel>
  );
};

const generateImageSlides = (projects: Project[]) => {
  return projects.map((project) => (
    <div key={project.path}>
      <Image
        src={project.path}
        alt={project.path}
        width={1920}
        height={600}
      />
    </div>
  ));
};

const responsive: ResponsiveType = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, partialVisibilityGutter: 100 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, partialVisibilityGutter: 50 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 30 },
};

const Slider = ({ projects }: { projects: Project[] }) => {
  return (
    <CarouselSetup responsive={responsive}>
      {generateImageSlides(projects)}
    </CarouselSetup>
  );
};

export default Slider;
