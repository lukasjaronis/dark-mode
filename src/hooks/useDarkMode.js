import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initialState => {
  const [value, setValue] = useLocalStorage("darkMode", initialState);
  useEffect(() => {
    if (value) {
      if (!document.body.classList.contains("dark-mode")) {
        document.body.classList.add("dark-mode");
      }
      const linkSelect = document.querySelectorAll(".navLink");
      linkSelect.forEach(e => {
        e.classList.add("navLinkDark");
      });
    } else {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
      }
      const linkSelect = document.querySelectorAll(".navLink");
      linkSelect.forEach(e => {
        e.classList.remove("navLinkDark");
      });
    }
  }, [value]);

  return [value, setValue];
};