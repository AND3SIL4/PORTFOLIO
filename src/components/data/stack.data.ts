import { Lucide } from "./../icons";
import type { StackFrameworkTool } from "./interfaces.ts";

export const stacks: StackFrameworkTool[] = [
  {
    id: 1,
    name: "Python",
    category: "Process Automatization",
    icon: Lucide.IconPython,
  },
  {
    id: 2,
    name: "Java Script",
    category: "Web Development",
    icon: Lucide.IconNodeJS,
  },
  {
    id: 3,
    name: "MySQL",
    category: "Database Management",
    icon: Lucide.IconMySQL,
  },
];

export const frameworks: StackFrameworkTool[] = [
  {
    id: 1,
    name: "React",
    category: "Frontend development",
    icon: Lucide.IconReact,
  },
  {
    id: 2,
    name: "Angular",
    category: "Frontend development",
    icon: Lucide.IconAngular,
  },
  {
    id: 3,
    name: "Astro",
    category: "Frontend development",
    icon: Lucide.IconAstro,
  },
  {
    id: 4,
    name: "Express",
    category: "Backend development",
    icon: Lucide.IconExpress,
  },
  {
    id: 5,
    name: "Django",
    category: "Backend development",
    icon: Lucide.IconDjango,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    category: "CSS framework",
    icon: Lucide.IconTailwind,
  },
];

export const tools: StackFrameworkTool[] = [
  {
    id: 1,
    name: "GitHub",
    category: "Version control",
    icon: Lucide.IconGitHub,
  },
  {
    id: 2,
    name: "Docker",
    category: "Devops solutions",
    icon: Lucide.IconDocker,
  },
  {
    id: 3,
    name: "Azure",
    category: "Cloud compute/AI",
    icon: Lucide.IconAzure,
  },
  {
    id: 4,
    name: "Neovim",
    category: "Typing/Coding efficacy",
    icon: Lucide.IconNeovim,
  },
];
