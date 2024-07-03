import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // console.log("changed theme");
    const currentTheme =
      (document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark") || "light";
    // console.log("current theme: ", currentTheme);
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    // console.log("theme change clicked");
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
