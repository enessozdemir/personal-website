import { useEffect } from "react";
import {useThemeStore} from "../../app/store/themeStore";

export default function useTheme() {
    const {theme, toggleTheme} = useThemeStore();

    const handleToggleTheme = () => {
        toggleTheme();

    };

    useEffect(() => {
        const html = document.documentElement;

        if (theme === "dark") {
            html.classList.add("scheme-dark");
            html.classList.remove("scheme-light");
        } else {
            html.classList.add("scheme-light");
            html.classList.remove("scheme-dark");
        }

    }, [theme]);


    return {theme, toggleTheme: handleToggleTheme};
}
