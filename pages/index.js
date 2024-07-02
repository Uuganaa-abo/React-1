
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
export default function Home() {
  return (
    <main className="w-[1440px] m-auto p-4-">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
    </main>
  );
}
