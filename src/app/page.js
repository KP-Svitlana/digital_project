import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MainTasks } from "@/components/MainTasks";
import { OurPprojects } from "@/components/OurProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MainTasks />
      <OurPprojects />
    </main>
  );
}
