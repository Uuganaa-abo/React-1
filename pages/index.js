import { Header } from "@/components/Header";
import { Hero } from "@/components/Sagar";
import { AboutM, AboutMe } from "@/components/AboutM";
import Experience from "@/components/Experience";
import { Skills } from "@/components/SSkills";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-black px-8 w-full dark:bg-black dark:text-white">
      <Header/>
      <section className="max-w-7xl mx-auto">
        <section>
          <Hero name="Sagar" age={35} />
          <AboutMe />
          <Skills />
        </section>
        <section>
          <Experience />
          <Work />
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </main>
  );
}
