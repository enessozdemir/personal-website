import { PiGithubLogo } from "react-icons/pi";
import { RxSlash } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
const HeaderActions = () => {
  return (
    <div className="flex items-center low-opacity">
      {/* Theme Toggle Button */}
      <ThemeToggle />
      {/* Slash Icon */}
      <RxSlash className="h-6 w-6" />
      {/* GitHub Icon */}
      <a href="https://github.com/enessozdemir" target="_blank">
        <PiGithubLogo className="h-6 w-6 hover:opacity-60 transition-opacity duration-200" />
      </a>
    </div>
  );
};

export default HeaderActions;
