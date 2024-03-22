import { Lucide } from "../icons";

interface Projects {
  title: string;
  description: string;
  icon: any;
  site?: string;
  github: string;
  isDone: boolean;
}

export const projects: Projects[] = [
  {
    title: "NODE WHATSAPP API",
    description:
      "Our project connects with customers via WhatsApp, ensuring they're informed throughout the entire process, fostering transparency and satisfaction.",
    icon: Lucide.IconWhatsApp,
    github: "https://github.com/AND3SIL4/NODE-WHATSAPP-API",
    isDone: false,
  },
  {
    title: "PANDEMISSION",
    description:
      "Welcome to the Codicon project repository, version 2024. Created for the Codicon-2024 international competition, our software clinched 4th place with an honorable mention. This game revolves around word transmission",
    icon: Lucide.IconVirus,
    site: "https://codicon-2024.vercel.app/",
    github: "https://github.com/AND3SIL4/codicon-2024",
    isDone: true,
  },
  {
    title: "ASISTE PROJECT",
    description:
      "This project consists of a backend built in Django and a frontend developed in Angular 16 to automate the process of call for assistance, registration of news. Deployment is via Docker and Docker Compose",
    icon: Lucide.IconAsisteProject,
    github: "https://github.com/flamrdevs/astrobuckt",
    isDone: true,
  },
  {
    title: "SENASOFT CHALLENGE",
    description:
      "This project contains the software solution developed for Intelligent Training's 2023 Artificial Intelligence challenge. All of these in a national competition called SENASOFT.",
    icon: Lucide.IconAI,
    github: "https://github.com/flamrdevs/astrobuckt",
    isDone: true,
  },
];
