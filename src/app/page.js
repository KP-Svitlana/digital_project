import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MainTasks } from "@/components/MainTasks";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MainTasks />
    </main>
  );
}
