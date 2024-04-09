import { IconButton } from "./ui";
import { Lucide } from "./icons";

// Import all projects done and in process..
import { projects } from "./data/projects.data.ts";

export default () => {
  return (
    <>
      <h2 className="font-medium text-xl mb-3">Latest Projects</h2>
      {projects.map((project, index) => {
        return (
          <article className="my-10" key={index}>
            <div className="flex flex-col md:flex-row gap-3 group">
              <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl">
                  <img
                    src={project.img}
                    alt={`Image of project ${project.title}`}
                    title={`Image of project ${project.title}`}
                    className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-between">
                <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-lg flex flex-col">
                  {project.title}
                  <span className="text-sm opacity-50 text-neutral-11/90">
                    {project.isDone ? "Done" : "Currently..."}
                  </span>
                </h3>
                <div className="w-full md:w-[600px] transition duration-300 group-hover:translate-x-px text-pretty text-neutral-11 group-hover:text-neutral-11 text-md">
                  {project.description}
                </div>
                <div className=" flex flex-row gap-3">
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
                      className="transition size-6 text-neutral-10 group-focus-visible/icon:text-primary-11 group-hover:text-secondary-11"
                    />
                    <span className="group-hover:text-secondary-11">Code</span>
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
                        className="transition size-6 text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                      />
                      <span className="group-hover:text-primary-11">
                        Preview{" "}
                      </span>
                    </IconButton>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
