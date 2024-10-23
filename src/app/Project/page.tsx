"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

const projects = [
  {
    title: "Project 1",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/1",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/2",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/3",
    link: "https://example.com/project3",
  },
  {
    title: "Project 4",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/4",
    link: "https://example.com/project4",
  },
];

export default function Projects() {
  return (
    <div className="p-6 overflow-x-hidden">
      
      <Header />
      <section className="my-16 ">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {projects.map((project, index) => (
            <div key={index} className="max-w-xs mx-auto mb-8">
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 h-20 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
