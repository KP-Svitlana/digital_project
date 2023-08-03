import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MainTasks } from "@/components/MainTasks";
import { OurPprojects } from "@/components/OurProjects";
import { ContactUs } from "@/components/ContactUs";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MainTasks />
      <OurPprojects />
      <ContactUs />
     
    </main>
  );
}
