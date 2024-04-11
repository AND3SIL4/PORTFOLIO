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
            image={compe.image}
            siteUrl={compe.siteUrl}
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
  image,
}) => {
  return (
    <div
      className={`hover:shadow-md hover:shadow-neutral-11 p-6 border border-neutral-11 rounded-lg shadow w-full flex flex-col group transition-all duration-500 bg-[url(${image})]`}
    >
      <h1 className="mb-2 text-lg font-semibold">{title}</h1>
      <p className="mb-3 font-normal text-md text-pretty flex-1 text-neutral-11">
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
