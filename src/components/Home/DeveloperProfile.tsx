import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-go";
import "prismjs/components/prism-python";
import "prismjs";
import Image from "next/image";
import Go from "/public/logo/Go-Logo.png"
import Python from "/public/logo/Python-Logo.png"
export default function DeveloperProfile() {
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab, Prism]);

  return (
    <Card className="w-full md:w-2/5 bg-[#1e1e1e] text-[#d4d4d4] border border-[#3c3c3c] p-4">
  <Tabs defaultValue="experience" onValueChange={setActiveTab} className="w-full">
  <TabsList className="flex gap-4 border-b border-[#3c3c3c] pb-2 bg-[#1e1e1e] justify-start rounded-none">
  <TabsTrigger value="experience" className="text-white flex items-center gap-2 rounded-none">
    <Image src={Go} alt="Go Logo" width={20} height={20} /> experience.go
  </TabsTrigger>
  <TabsTrigger value="skills" className="text-white flex items-center gap-2 rounded-none">
    <Image src={Python} alt="Python Logo" width={20} height={20} /> skills.py
  </TabsTrigger>
</TabsList>
    <TabsContent value="experience" className="mt-4 relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/go-logo.png')] bg-no-repeat bg-center"></div>
      <pre className={cn("w-full text-base p-6 rounded-md overflow-x-auto border border-[#3c3c3c] !bg-transparent")}>
        <code className="language-go">
          {`// Developer Experience
type Experience struct {
  Company   string
  Position  string
  Years     int
}

var experiences = []Experience{
  {"Tech Corp", "Software Engineer", 3},
  {"Web Solutions", "Frontend Developer", 2},
  {"InnovateX", "Backend Developer", 4},
}`}
        </code>
      </pre>
    </TabsContent>
    
    <TabsContent value="skills" className="mt-4 relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/python-logo.png')] bg-no-repeat bg-center"></div>
      <pre className={cn("w-full text-base p-6 rounded-md overflow-x-auto border border-[#3c3c3c] !bg-transparent")}>
        <code className="language-python">
          {`# Developer Skills
class Developer:
    def __init__(self, name, skills):
        self.name = name
        self.skills = skills

    def display_skills(self):
        for skill in self.skills:
            print(skill)

developer = Developer("Rifki Nauval Dzaki", ["Go", "Python", "JavaScript"])
developer.display_skills()`}
        </code>
      </pre>
    </TabsContent>
  </Tabs>
</Card>

  );
}