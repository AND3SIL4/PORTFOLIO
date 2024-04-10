import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

const socials = [
  {
    href: "https://www.linkedin.com/in/and3sil4/",
    name: "LinkedIn",
    icon: Lucide.IconLinkedIn,
  },
  {
    href: "mailto:and3felipe@gmail.com",
    name: "Email",
    icon: Lucide.IconMail,
  },
  {
    href: "https://github.com/AND3SIL4",
    name: "GitHub",
    icon: Lucide.IconGitHub,
  },
  {
    href: "https://x.com/AFelipe_Silva3",
    name: "X",
    icon: Lucide.IconX,
  },
  {
    href: "https://medium.com/@and3felipe",
    name: "Medium",
    icon: Lucide.IconMedium,
  },
];

export default () => {
  return (
    <div id="socials">
      <h2 className="font-medium text-xl mb-3">Socials</h2>
      <ul className="flex items-center justify-center gap-3 p-1">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.href}
                className={cn(
                  "group",
                  "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Social"
              >
                <social.icon className="transition size-1/2 text-neutral-10 group-hover:text-primary-11 group-hover:scale-110 group-focus-visible:text-neutral-11 group-focus-visible:scale-110" />
                <span className="hidden">basketball videos</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
