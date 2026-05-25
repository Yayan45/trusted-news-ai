import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative
        w-16
        h-9
        rounded-full
        transition-all
        duration-300
        flex
        items-center
        px-1
      "
      style={{
        backgroundColor:
          theme === "dark" ? "rgba(59,130,246,0.18)" : "rgba(148,163,184,0.18)",

        border: "1px solid var(--border-color)",
      }}
    >
      {/* THUMB */}
      <div
        className={`
          absolute
          w-7
          h-7
          rounded-full
          flex
          items-center
          justify-center
          transition-all
          duration-300
          shadow-md
          ${theme === "dark" ? "translate-x-7" : "translate-x-0"}
        `}
        style={{
          backgroundColor: "var(--card-bg)",
          color: theme === "dark" ? "#60a5fa" : "#f59e0b",
        }}
      >
        {theme === "dark" ? <FiMoon size={15} /> : <FiSun size={15} />}
      </div>
    </button>
  );
}
