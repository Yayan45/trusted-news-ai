import { FaRegClock } from "react-icons/fa";

import { useEffect, useState } from "react";

import ThemeToggle from "../ThemeToggle";

function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const isMobile = window.innerWidth < 640;

      const formatted = now.toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",

        ...(isMobile
          ? {
              hour: "2-digit",
              minute: "2-digit",
            }
          : {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
      });

      setCurrentTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    window.addEventListener("resize", updateTime);

    return () => {
      clearInterval(interval);

      window.removeEventListener("resize", updateTime);
    };
  }, []);

  return (
    <div
      className="
        rounded-2xl
        p-4
        sm:p-6
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
        border
        shadow-md
        backdrop-blur-sm
      "
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* TOP */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* LOGO */}
        <img
          src="/icon.png"
          alt="Logo"
          className="
            w-12
            h-12
            sm:w-14
            sm:h-14
            object-contain
            shrink-0
          "
        />

        {/* TEXT */}
        <div>
          <h1
            className="
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-bold
              leading-tight
            "
          >
            SISTEM DETEKSI HOAX BERITA
          </h1>

          <p
            className="text-sm sm:text-base mt-1"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Sistem Deteksi Hoax berbasis NLP
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          flex
          items-center
          justify-between
          w-full
          lg:w-auto
          gap-4
        "
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {/* TIME */}
        <div className="flex items-center gap-2 text-sm">
          <FaRegClock className="shrink-0" />

          <span>{currentTime}</span>
        </div>

        {/* TOGGLE */}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
