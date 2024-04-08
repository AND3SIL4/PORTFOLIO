import type { Project as Projects } from "./interfaces";

export const projects: Projects[] = [
  {
    title: "NODE WHATSAPP API",
    description:
      "Our project connects with customers via WhatsApp, ensuring they're informed throughout the entire process, fostering transparency and satisfaction.",
    github: "https://github.com/AND3SIL4/NODE-WHATSAPP-API",
    isDone: false,
    img: '/img/node_project.webp'
  },
  {
    title: "PANDEMISSION",
    description:
      "Welcome to the Codicon project repository, version 2024. Created for the Codicon-2024 international competition, our software clinched 4th place with an honorable mention. This game revolves around word transmission",
    site: "https://codicon-2024.vercel.app/",
    github: "https://github.com/AND3SIL4/codicon-2024",
    isDone: true,
    img: '/img/pandemission_project.webp'
  },
  {
    title: "ASISTE PROJECT",
    description:
      "This project consists of a backend built in Django and a frontend developed in Angular 16 to automate the process of call for assistance, registration of news. Deployment is via Docker and Docker Compose",
    github: "https://github.com/flamrdevs/astrobuckt",
    isDone: true,
    img: '/img/asiste_project.webp'
  },
];
