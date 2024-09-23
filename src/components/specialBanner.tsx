// import Image from "next/image";
// import { Project } from "../types/project";

// export default function BannerGrid({ projects }: { projects: Project[] }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-8">
//       {projects.map((item, idx) => (
//         <div
//           key={idx}
//           className={`relative overflow-hidden ${idx === 0 ? "col-span-2 row-span-2" : ""}`}
//         >
//           <Image
//             src={projects.path}
//             alt={projects.path}
//             layout="fill"
//             objectFit="cover"
//             className="w-full h-full rounded-lg"
//           />
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
//             <h3 className="text-lg font-bold">{item.title}</h3>
//             <p className="text-sm">{item.subtitle}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
