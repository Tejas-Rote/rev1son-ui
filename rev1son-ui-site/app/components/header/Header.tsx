"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import switchIcon from "@/assets/images/switch.png";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    console.log(storedTheme);
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_logo}>
        <Image
          className={styles.header_icon}
          src={switchIcon}
          alt="rev1son logo"
        />
        <h3>rev1son-ui</h3>
      </div>

      <div className={styles.header_btns}>
        <button className={styles.header_icon_btns}>
          <FaGithub className={styles.git} />
        </button>
        <button className={styles.header_icon_btns} onClick={toggleTheme}>
          {theme === "light" ? (
            <MdOutlineDarkMode className={styles.theme} />
          ) : (
            <MdOutlineLightMode className={styles.theme} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
