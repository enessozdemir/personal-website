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
        <LuSun className="h-6 w-6" />
      ) : (
        <LuMoon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
