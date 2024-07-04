
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";

import Link from "next/link";
 export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-slate-800 dark:text-slate-white">
      <Header />
      <Hero name="Sagar" age={35} />
      <AboutMe />
      <Skills />
      <Link href="/categories/politics"> Next Link</Link>
    </main>
  );
}
