import React from "react";
import Link from "next/link"; // Ensure Link is imported
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";

export default function Header() {
  const links = [
    { href: "/", label: "About" },
    { href: "/Skill", label: "Skills" },
    { href: "/Project", label: "Projects" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between py-6    md:rounded-full rounded-none  px-4 ">
        <h1 className="text-4xl font-dancing  text-primary hidden md:block">
          Rifki 
        </h1>

        {/* Dropdown Menu for Mobile */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="md:hidden">
          <CollapsibleTrigger className="flex items-center justify-between space-x-4">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-primary font-semibold hover:bg-neutral-200   dark:hover:bg-neutral-700 "
                onClick={() => setIsOpen(false)} // Close the menu on click
              >
                {link.label}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex flex-col md:flex-row space-x-0 md:space-x-4 md:space-y-0 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${link.href === pathname && "text-blue-600"}  text-lg font-semibold capitalize text-black transition-all duration-200 hover:text-blue-600`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
