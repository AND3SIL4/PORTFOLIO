import type React from "react";
//import experience data
import { ExperienceData as EXPERIENCE } from "./data/experience.data.ts";
import { Lucide } from "./icons/index.ts";

const Experience: React.FC = () => {
  return (
    <article className="mt-20">
      <h2 className="font-medium text-xl mb-14">Experience</h2>
      <ol className="items-start sm:flex-row flex flex-col-reverse">
        {EXPERIENCE.map((e) => (
          <li
            key={e.title}
            className="opacity-70 relative mb-12 border border-neutral-10 sm:border-none group hover:-translate-y-4 transition-all duration-300 hover:opacity-100 flex flex-row sm:flex-col py-5 px-5 rounded-lg gap-6 w-full sm:p-0 sm:gap-0"
          >
            <div className="flex items-center">
              <Lucide.IconBriefCase className="size-8 text-secondary-11 group-hover:font-bold" />
              <div className="hidden sm:flex w-full bg-secondary-11/50 h-0.5 group-hover:bg-secondary-11"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {e.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-11/80">
                {e.date}
              </time>
              <p className="text-base font-normal text-pretty mt-6">
                {e.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Experience;
