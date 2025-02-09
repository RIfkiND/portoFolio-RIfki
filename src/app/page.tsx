"use client";

// import Skill from "@/components/Home/Skill";
import About from "@/components/Home/About";
import Footer from "@/components/Footer/Footer";
// import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div id="webcrumbs" className="p-6  overflow-x-hidden">
      <main className="flex flex-col space-y-8 bg-white dark:bg-black">
        {/* About Section */}
        <About />
        {/* Skills Section */}
        {/* <Skill /> */}
        {/* Contact Section */}
        {/* <Contact /> */}
      </main>
      {/* Footer */}
    </div>
  );
}
