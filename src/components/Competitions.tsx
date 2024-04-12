import { Lucide } from "./icons/index.ts";
import type { Compe as compe } from "./data/interfaces.ts";
import type React from "react";
//Import data to be render on screen
import Compe from "./data/competitions.data.ts";

const Competitions = () => {
  return (
    <div className="mb-20">
      <h2 className="font-medium text-xl mb-14">Competitions</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        {Compe.map((compe) => (
          <CompeComponent
            description={compe.description}
            title={compe.title}
            key={compe.title}
            siteUrl={compe.siteUrl}
            date={compe.date}
            location={compe.location}
          />
        ))}
      </div>
    </div>
  );
};

const CompeComponent: React.FC<compe> = ({
  title,
  description,
  siteUrl,
  date,
  location,
}) => {
  return (
    <div className="p-6 border border-neutral-8 w-full rounded-lg flex flex-sta flex-col group transition-all duration-500">
      <div className="flex gap-2 items-center group-hover:translate-x-1 transition-all duration-300">
        <Lucide.IconDev className="size-5 " />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <h2 className="text-neutral-9 text-sm group-hover:translate-x-1 transition-all duration-300">
        {date}
      </h2>
      <h3 className="text-neutral-9 mb-3 text-sm group-hover:translate-x-1 transition-all duration-300">
        {location}
      </h3>
      <p className="mb-3 font-normal text-md text-pretty flex-1 text-neutral-11 group-hover:translate-y-1 transition-all duration-100">
        {description}
      </p>
      <a
        href={siteUrl}
        className="inline-flex items-center gap-3 text-md group-hover:text-primary-11 text-neutral-10"
        target="_blank"
        aria-label="Entities"
      >
        <span className="">Find out more about sponsors' information</span>
        <Lucide.IconExternalLink className="size-4" />
      </a>
    </div>
  );
};

export default Competitions;
