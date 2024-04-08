import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

// Import all projects done and in process..
import { projects } from "./data/projects.data.ts";

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Projects</h2>
      <ul className="grid grid-cols-1 gap-3 p-1">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
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
                  <project.icon
                    size={50}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                    {project.title}
                  </h3>
                  <span className="text-sm opacity-50 text-neutral-10">
                    {project.isDone ? "Done" : "In process..."}
                  </span>
                  <div className="transition duration-300 group-hover:translate-x-px text-pretty text-neutral-11 group-hover:text-neutral-11 text-sm">
                    {project.description}
                  </div>
                </div>
              </div>

              <div className="m-2 flex flex-row gap-3">
                <IconButton
                  as="a"
                  role="button"
                  href={project.github}
                  className="group/icon"
                  target="_blank"
                  aria-label="Open"
                >
                  <Lucide.IconGitHub
                    aria-label="Open"
                    className="transition text-neutral-10 group-focus-visible/icon:text-primary-11"
                  />
                </IconButton>
                {project.isDone && project.site ? (
                  <IconButton
                    as="a"
                    role="button"
                    href={project.github}
                    className="group/icon"
                    target="_blank"
                    aria-label="Open"
                  >
                    <Lucide.IconExternalLink
                      aria-label="Open"
                      className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                    />
                  </IconButton>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
