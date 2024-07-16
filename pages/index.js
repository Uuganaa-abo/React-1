import { Header } from "@/components/Nav";
import { Hero } from "@/components/Sagar";
import { AboutM, AboutMe } from "@/components/AboutM";
import Link from "next/link";
import Experience from "@/components/Experience";
import { Skills } from "@/components/SSkills";

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-slate-800 dark:text-slate-white m-auto lg:p-12">
      <Header />
      <section className="p-10">
        <Hero name="Sagar" age={35} />
        <AboutMe />
        <Skills />
        <Experience />
        <Link href="/categories/politics"> Next Link</Link>
      </section>
    </main>
  );
}
