import type { Project as Projects } from "./interfaces";

export const projects: Projects[] = [
  {
    title: "Node WhatsApp API",
    description:
      "The node WhatsApp API project for Comestibles Ricos S.A.S. Focuses on connecting with interested users through WhatsApp, ensuring that they are informed throughout the process that leads the cycle of the sale of the final edible product, from your request by the customer to your delivery by the provider, the main objective is to ensure as many orders as possible, and be able to recover in case they fall into error promoting transparency and satisfaction.",
    github: "https://github.com/AND3SIL4/NODE-WHATSAPP-API",
    isDone: false,
    img: "/img/node_project.webp",
  },
  {
    title: "Pandemission",
    description:
      "The Pandemission project was born due to the realization of the challenge proposed in the Codicon, version 2024. This software was created in 48 hours, this project involved the development of creativity, soft skills and teamwork. The software won fourth place with an honorable mention. The keyword of the contest was 'broadcast'",
    site: "https://codicon-2024.vercel.app/",
    github: "https://github.com/AND3SIL4/codicon-2024",
    isDone: true,
    img: "/img/pandemission_project.webp",
  },
  {
    title: "Asiste Project",
    description:
      "This project consists of a backend built in Django and a frontend developed in Angular 16 to automate the process of the call for assistance in a specific center of SENA, its main purpose is the registration of news, absence, in order to better control. The implementation is done through Docker and Docker Compose. The project was deployed on the SENA datacenter linux machine.",
    github: "https://github.com/flamrdevs/astrobuckt",
    isDone: true,
    img: "/img/asiste_project.webp",
  },
];
