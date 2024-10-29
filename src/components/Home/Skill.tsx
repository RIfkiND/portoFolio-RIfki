import { 
  FaReact, FaNode, FaLaravel, FaPhp 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiPrisma, 
  SiExpress, SiVuedotjs, SiMongodb, SiPostgresql, SiMysql, SiDocker, SiGit, 
  SiLinux 
} from "react-icons/si"; 
import { TbBrandGolang } from "react-icons/tb"; 

export default function Skill() {
  return (
    <section id="skills" className="mt-24 w-full">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard title="Frontend Technologies">
          <SkillItem icon={<SiJavascript color="#F7DF1E" />} name="JavaScript" />
          <SkillItem icon={<SiTypescript color="#3178C6" />} name="TypeScript" />
          <SkillItem icon={<FaReact color="#61DAFB" />} name="React.js" />
          <SkillItem icon={<SiNextdotjs color="#000000" />} name="Next.js" />
          <SkillItem icon={<SiVuedotjs color="#42B883" />} name="Vue.js" />
          <SkillItem icon={<SiTailwindcss color="#38B2AC" />} name="Tailwind CSS" />
        </SkillCard>

        <SkillCard title="Backend Technologies">
          <SkillItem icon={<FaNode color="#83CD29" />} name="Node.js" />
          <SkillItem icon={<SiExpress color="#404D59" />} name="Express.js" />
          <SkillItem icon={<FaPhp color="#777BB4" />} name="PHP" />
          <SkillItem icon={<FaLaravel color="#FF2D20" />} name="Laravel" />
          <SkillItem icon={<SiPrisma color="#0C344B" />} name="Prisma" />
          <SkillItem icon={<TbBrandGolang color="#00ADD8" />} name="Go" />
        </SkillCard>

        <SkillCard title="Database Technologies">
          <SkillItem icon={<SiMongodb color="#47A248" />} name="MongoDB" />
          <SkillItem icon={<SiPostgresql color="#336791" />} name="PostgreSQL" />
          <SkillItem icon={<SiMysql color="#00758F" />} name="MySQL" />
        </SkillCard>

        <SkillCard title="Other">
          <SkillItem icon={<SiDocker color="#2496ED" />} name="Docker" />
          <SkillItem icon={<SiLinux color="#FCC624" />} name="Linux" />
          <SkillItem icon={<SiGit color="#F05032" />} name="Git" />
        </SkillCard>
      </div>
    </section>
  );
}

interface SkillItemProps {
  icon: JSX.Element;
  name: string;
}

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
}

function SkillCard({ title, children }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg font-mono animate-fadeIn transform transition duration-300">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{children}</div>
    </div>
  );
}

function SkillItem({ icon, name }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center font-mono">
      <div className="text-5xl mb-2">{icon}</div>
      <h4 className="text-lg font-semibold">{name}</h4>
    </div>
  );
}
