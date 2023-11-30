import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/sections/hero";
import { Collaboration } from "@/sections/collaboration";
import { Experience } from "@/sections/experience";
import { Features } from "@/sections/features";
import { NoLockin } from "@/sections/no-lock";
import { MoreFeatures } from "@/sections/more-feature";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
        <Experience />
        <MoreFeatures />
        <Features />
        <NoLockin />
      </div>
    </main>
  );
}
