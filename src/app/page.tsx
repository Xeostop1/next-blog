import { getProjects } from "../service/projects";
import MainCarousel from "../components/MainCarousel";
import ProductGrid from "../components/projextGrid";
import Banner from "../components/banner";
// import SpecialBanner from "../components/specialBanner";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <MainCarousel projects={projects.slice(0, 3)} />
      <Banner imgSrc="/images/banner1.jpg" width="95%" height="150px" title="광고주세요" />
      <ProductGrid projects={projects} />
      {/* <SpecialBanner projects={projects.slice(3, 9)} /> */}
    </div>
  );
}
