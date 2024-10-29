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
    <section id="about" className="flex flex-wrap mt-16 justify-between items-center w-full">
      <div className="w-full p-4 md:w-3/5 relative">
        <h2 className="text-4xl leading-[50px] font-bold mb-4">
          <TypingEffect text="Hi, I am a Backend Developer and a Tech Enthusiast" />
          <Image
            src="https://tools-api.webcrumbs.org/image-placeholder/600/400/doodle/134"
            alt="Doodle"
            width={30}
            height={30}
            className="inline h-[30px] ml-2"
          />
          <span className="typing-cursor">|</span> {/* Optional cursor */}
        </h2>
        <p className="text-lg mb-6">
          Welcome to my portfolio! I specialize in creating amazing and functional web experiences with JavaScript, React, and Node.js. I focus on building scalable web applications and enjoy writing clean, efficient code.
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
            <button className="bg-blue-600 text-white  py-3 px-6 rounded-md font-bold text-lg hover:bg-gray-400">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <div className="w-full p-4 pl-0 md:pl-40 md:w-2/5 relative mt-8 md:mt-0">
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
