import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  interface TypingEffectProps {
    text: string;
  }

  const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const typingSpeed = 100;

    useEffect(() => {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(timeoutId);
      }
    }, [index, text]);

    return <span>{displayedText}</span>;
  };

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-start justify-between gap-8 mt-16"
    >
      {/* Left Section: Text */}
      <div className="w-full md:w-3/5 p-4 relative">
        <h2 className="text-4xl leading-[50px] font-bold mb-4">
          <TypingEffect text="Hi, I am a Backend Developer and a Tech Enthusiast" />
          <Image
            src="https://tools-api.webcrumbs.org/image-placeholder/600/400/doodle/134"
            alt="Doodle"
            width={30}
            height={30}
            className="inline h-[30px] ml-2"
          />
          <span className="typing-cursor">|</span>
        </h2>
        <p className="text-lg mb-6">
          Welcome to my portfolio! I specialize in creating amazing and
          functional web experiences with JavaScript, React, and Node.js. I
          focus on building scalable web applications and enjoy writing clean,
          efficient code.
        </p>

        {/* Quote Section */}
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-6">
          &quot;Good code is its own best documentation.&quot; - Steve McConnell
        </blockquote>
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-6">
          &quot;The Hardest Thing I do is write CSS.&quot; - 😥
        </blockquote>

        <div className="flex space-x-4">
          <button className="bg-primary text-white py-3 px-6 rounded-md font-bold text-lg">
            See My Work
          </button>
          <a href="/path/to/your/resume.pdf" download>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md font-bold text-lg hover:bg-gray-400">
              Download Resume
            </button>
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Personal Stats & Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem title="Years of Experience" value="3+ Years" />
            <StatItem title="Technologies Used" value="15+" />
            <StatItem title="Code Commits" value="5000+" />
            <StatItem title="Projects Completed" value="25+" />
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end">
        <Image
          src="https://tools-api.webcrumbs.org/image-placeholder/500/500/person/1"
          alt="Developer"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
}

interface StatItemProps {
  title: string;
  value: string;
}

function StatItem({ title, value }: StatItemProps) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-700 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-lg font-semibold text-primary">{value}</p>
    </div>
  );
}
