import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { RxSlash } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
const HeaderActions = () => {
  return (
    <div className="flex items-center gap-0.5 low-opacity">
      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/enessozdemir/" target="_blank">
        <PiLinkedinLogo className="w-4 h-4 sm:w-6 sm:h-6 hover:opacity-60 transition-opacity duration-200" />
      </a>
      {/* Slash Icon */}
      <RxSlash className="w-4 h-4 sm:w-6 sm:h-6" />
      {/* GitHub Icon */}
      <a href="https://github.com/enessozdemir" target="_blank">
        <PiGithubLogo className="w-4 h-4 sm:w-6 sm:h-6 hover:opacity-60 transition-opacity duration-200" />
      </a>
      {/* Slash Icon */}
      <RxSlash className="w-4 h-4 sm:w-6 sm:h-6" />
      {/* Theme Toggle Button */}
      <ThemeToggle />
    </div>
  );
};

export default HeaderActions;
