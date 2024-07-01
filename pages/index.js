import Image from "next/image";
import { Inter } from "next/font/google";

import { Card } from "@/components/Card";


export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-2 my-0">
      <Card />
      <div className="w-96 bg-gradient-to-r from-indigo-100 to-red-400 font-extralight text-center">This is not html</div>
      <Card />
    </main>
  );
}
