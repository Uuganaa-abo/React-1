import { Header } from "@/components/Nav";
import { Hero } from "@/components/Sagar";
import { AboutM, AboutMe } from "@/components/AboutM";
import Experience from "@/components/Experience";
import { Skills } from "@/components/SSkills";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className=" px-8 w-full">
      <Header />
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
