import React from "react";
import { cn } from "./ui/utils.ts";

//Import data to be render on screen
import { stacks, frameworks, tools } from "./data/stack.data.ts";

//Import interfaces
import type { Props } from "./data/interfaces.ts";

export default () => {
  //Dictionary of information about technical skills
  const skills: Props[] = [
    {
      title: "Stacks",
      content: stacks,
    },
    {
      title: "Frameworks",
      content: frameworks,
    },
    {
      title: "Tools",
      content: tools,
    },
  ];

  return (
    <>
      {skills.map((skill) => (
        <BaseStack content={skill.content} title={skill.title} />
      ))}
    </>
  );
};

const BaseStack: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="mb-5">
      <h2 className="font-medium text-xl">{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 p-1">
        {content.map((content) => {
          return (
            <li
              key={content.name}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <content.icon
                    size={40}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-secondary-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm group-hover:text-secondary-11">
                    {content.name}
                  </h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {content.category}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
