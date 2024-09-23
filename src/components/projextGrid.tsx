import Image from "next/image";
import { Project } from "../types/project";

export default function ProductGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="px-5 sm:px-5 lg:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {projects.map((project) => (
            <div key={project.path} className="bg-white  overflow-hidden flex flex-col">
              {/* 이미지 크기를 줄이기 위해 고정 너비와 높이를 설정 */}
              <div className="relative w-[280px] h-[280px] mb-4">
                <Image
                  src={`/images/${project.path}.jpg`}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {project.descript && project.descript.length > 100
                    ? `${project.descript.substring(0, 100)}...`
                    : project.descript || ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
