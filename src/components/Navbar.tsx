import React, { useState, useEffect } from "react";
import { Lucide } from "./icons/index.ts";
//State variables for rendering
const OPTIONS = [
  {
    title: "About",
    link: "#",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Socials",
    link: "#socials",
  },
];

//Main component for header
const Navbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full top-0 flex justify-center mb-16">
      <nav
        className={`fixed z-10 rounded-full transition-all duration-200 ease-linear ${
          scrollPosition > 0 ? "bg-neutral-8 shadow-md shadow-neutral-4" : ""
        }`}
      >
        <ul className="flex px-6 py-2 gap-6 items-center justify-center">
          {OPTIONS.map((option) => {
            return (
              <li key={option.title}>
                <LinkToNav
                  link={option.link}
                  key={option.title}
                  title={option.title}
                />
              </li>
            );
          })}

          <ModeComponent />
        </ul>
      </nav>
    </header>
  );
};

interface PropsLink {
  title: string;
  link: string;
}

//Component to Link
const LinkToNav: React.FC<PropsLink> = ({ title, link }) => {
  return (
    <a className="hover:text-primary-11 active:text-primary-11" href={link}>
      {title}
    </a>
  );
};

const ModeComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <button onClick={handleClick}>
      {darkMode ? (
        <Lucide.IconSun className="size-[21px] active:scale-90 hover:scale-105" />
      ) : (
        <Lucide.IconMoon className="size-[21px] active:scale-90 hover:scale-105" />
      )}
    </button>
  );
};

export default Navbar;
