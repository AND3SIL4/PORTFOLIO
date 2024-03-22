import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      {/* Introduction  */}
      <div className="flex flex-row items-center gap-4">
        <Avatar src="https://github.com/AND3SIL4.png" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">Felipe Silva</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">
            Software Developer
          </h2>
        </div>
      </div>

      {/* About  */}
      <div>
        I am a{" "}
        <span className="font-bold text-primary-11">software developer</span>{" "}
        from <span className="font-bold">Colombia</span>, specializing in
        creating user-centric software applications giving good digital
        experiences. With a focus on seamless, enjoyable and useful products, I
        aim to improve the general user experience and usage through strategic{" "}
        <span className="font-bold text-secondary-9">
          development solutions
        </span>
        .
      </div>

      {/* GitHub profile */}
      <div className="flex self-stretch justify-end gap-3">
        <Button
          as="a"
          href="https://github.com/AND3SIL4"
          target="_blank"
          aria-label="GitHub"
        >
          <Simple.IconGitHub />
          GitHub
        </Button>
      </div>
    </div>
  );
};
