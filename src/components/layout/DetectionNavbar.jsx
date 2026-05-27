import { Link } from "react-router-dom";

import ThemeToggle from "../ThemeToggle";

function DetectionNavbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b
        border-white/10

        backdrop-blur-xl
      "
      style={{
        backgroundColor: "var(--card-bg)",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6

          py-3
          sm:py-4

          flex
          items-center
          justify-between
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* LOGO */}
          <img
            src="/icon.png"
            alt="Logo"
            className="
              w-9
              h-9

              sm:w-10
              sm:h-10
            "
          />

          {/* TEXT */}
          <div>
            <h1
              className="
                text-sm
                sm:text-base

                font-bold
                leading-tight
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              Trusted News AI
            </h1>

            <p
              className="
                text-[10px]
                sm:text-xs
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              AI Detection System
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* BACK BUTTON */}
          <Link
            to="/"
            className="
    flex
    items-center
    justify-center

    px-5
    py-2.5

    rounded-xl

    text-[11px]
    sm:text-sm
    font-semibold
    text-white

    bg-linear-to-r
    from-blue-500
    to-cyan-400

    shadow-lg
    shadow-cyan-500/20

    hover:scale-105
    hover:shadow-cyan-500/40

    transition-all
    duration-300
  "
          >
            Kembali Ke Beranda
          </Link>

          {/* THEME */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default DetectionNavbar;
