import { Header } from "@/components/Nav";
import { Hero } from "@/components/Sagar";
import { AboutM, AboutMe } from "@/components/AboutM";
import Experience from "@/components/Experience";
import { Skills } from "@/components/SSkills";
import { Work } from "./Work";

export default function Home() {
  return (
    <main className="px-16 bg-slate-50 dark:bg-slate-800 dark:text-slate-white lg:p-12">
      <Header />

      <section>
        <Hero name="Sagar" age={35} />
        <AboutMe />
        <Skills />
        
      </section>
      <section>
        <Experience />
        <Work />
      </section>
    </main>
  );
}
