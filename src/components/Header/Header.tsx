"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ModeToggle } from "@/components/theme/ModeToggle"; // Import the toggle
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Header() {
  const links = [
    { href: "/", label: "About" },
    { href: "/Skill", label: "Skills" },
    { href: "/Project", label: "Projects" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between py-6 px-4 md:rounded-full">
      {/* Logo */}
      <h1 className="text-4xl font-bold font-poppins text-primary hidden md:block">
        Rifki Nauval
      </h1>

      {/* Mobile Menu */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="md:hidden">
        <CollapsibleTrigger className="flex items-center space-x-4">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </CollapsibleTrigger>

        {/* Mobile Menu Content */}
        <CollapsibleContent className="space-y-2 mt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-primary font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
          {/* Theme Toggle Inside Mobile Menu */}
          {/* <div className="px-4 py-2">
            <ModeToggle />
          </div> */}
        </CollapsibleContent>
      </Collapsible>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === pathname ? "text-blue-600" : "text-black"
            } text-lg font-semibold transition-all duration-200 hover:text-blue-600 dark:text-white`}
          >
            {link.label}
          </Link>
        ))}
        {/* Theme Toggle for Desktop */}
        {/* <ModeToggle /> */}
      </nav>
    </header>
  );
}
