import { LuMoon, LuSun } from "react-icons/lu";
import useTheme from "../../shared/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title="Change Theme"
      className="p-1 rounded cursor-pointer hover:animate-spin"
      style={{ animationDuration: "1.5s" }}
    >
      {theme === "dark" ? (
        <LuSun data-testid="sun-icon" className="w-4 h-4 sm:w-6 sm:h-6" />
      ) : (
        <LuMoon data-testid="moon-icon" className="w-4 h-4 sm:w-6 sm:h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
