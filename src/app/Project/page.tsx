"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Project 1",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/1",
    link: "https://example.com/project1",
    tags: ["Laravel", "Next.js"],
  },
  {
    title: "Project 2",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/2",
    link: "https://example.com/project2",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Project 3",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/3",
    link: "https://example.com/project3",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Project 4",
    image: "https://tools-api.webcrumbs.org/image-placeholder/300/200/doodle/4",
    link: "https://example.com/project4",
    tags: ["MongoDB", "GraphQL"],
  },
];

export default function Projects() {
  return (
    <div className="p-6">
      <Header />
      <div className="grid mt-20 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="w-full border border-black rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <CardContent className="flex flex-col items-center">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <hr className="my-4 w-full border-t border-black" />
              </CardContent>

              <CardFooter className="flex flex-col items-start p-4">
                <CardTitle className="text-lg font-semibold mb-2">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 text-sm text-white bg-black border border-white rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </a>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
