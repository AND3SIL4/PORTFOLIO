import { Lucide, Simple } from "./../icons";
import type { StackFrameworkTool } from "./interfaces.ts";

export const stacks: StackFrameworkTool[] = [
  {
    name: "Python",
    category: "Process Automatization",
    icon: Lucide.IconPython,
  },
  {
    name: "Java Script",
    category: "Web Development",
    icon: Lucide.IconNodeJS,
  },
  {
    name: "MySQL",
    category: "Database Management",
    icon: Lucide.IconMySQL,
  },
];

export const frameworks: StackFrameworkTool[] = [
  {
    name: "React",
    category: "Frontend development",
    icon: Lucide.IconReact,
  },
  {
    name: "Angular",
    category: "Frontend development",
    icon: Lucide.IconAngular,
  },
  {
    name: "Astro",
    category: "Frontend development",
    icon: Lucide.IconAstro,
  },
  {
    name: "Express",
    category: "Backend development",
    icon: Lucide.IconAngular, //TODO:: ICON
  },
  {
    name: "Django",
    category: "Backend development",
    icon: Lucide.IconDjango,
  },
  {
    name: "Tailwind CSS",
    category: "CSS framework",
    icon: Lucide.IconTailwind,
  },
];

export const tools: StackFrameworkTool[] = [
  {
    name: "GitHub",
    category: "Version control",
    icon: Simple.IconGitHub,
  },
  {
    name: "Docker",
    category: "Devops solutions",
    icon: Lucide.IconDocker,
  },
  {
    name: "Azure",
    category: "Cloud compute/AI",
    icon: Lucide.IconAzure,
  },
  {
    name: "Neovim",
    category: "Typing/Coding efficacy",
    icon: Lucide.IconNeovim,
  },
];
