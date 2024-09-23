"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Project } from "../types/project";

// 슬라이더 컴포넌트
export default function Carousel({ projects }: { projects: Project[] }) {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => {
    setIdx((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prev = useCallback(() => {
    setIdx((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  const getIdx = (offset: number) => (idx + offset) % projects.length;
  // 슬라이드 높이 조정
  return (
    <div className="relative mb-8 overflow-hidden h-[570px] w-[80%] mx-auto">
      <div className="flex gap-2 h-full">
        {[0, 1, 2].map((offset) => {
          const project = projects[getIdx(offset)];
          return (
            <div
              key={project.path}
              className={`w-1/3 flex-shrink-0 relative overflow-hidden ${
                offset === 0 ? "rounded-bl-3xl" : offset === 2 ? "rounded-tr-2xl" : ""
              }`}
            >
              <div className="overflow-hidden w-full h-full">
                <Image
                  src={`/images/${project.path}.jpg`}
                  alt={project.title}
                  width={500}
                  height={800}
                  objectFit="cover"
                  className={`w-full h-full object-cover ${
                    offset === 0 ? "rounded-bl-3xl" : offset === 2 ? "rounded-tr-3xl" : ""
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-3 text-white">
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
