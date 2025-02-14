"use client";

// import Skill from "@/components/Home/Skill";
import About from "@/components/Home/About";
// import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div id="webcrumbs" className="p-6  overflow-x-hidden">
      <div className="flex flex-col space-y-8 ">
        <About />
      </div>
    </div>
  );
}
