import { useEffect, useState } from "react";

import { HiMenuAlt3, HiX } from "react-icons/hi";

import { Link } from "react-router-dom";

import ThemeToggle from "../ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState("beranda");

  // NAV ITEMS
  const navItems = [
    {
      label: "Beranda",
      id: "beranda",
    },

    {
      label: "Tentang",
      id: "tentang",
    },

    {
      label: "Fitur",
      id: "fitur",
    },

    {
      label: "Cara Kerja",
      id: "cara-kerja",
    },

    {
      label: "Tim",
      id: "tim",
    },
  ];

  // ACTIVE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActive(item.id);

          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
      "
    >
      {/* CONTAINER */}
      <div className="w-full">
        {/* NAVBAR */}
        <div
          className="
            flex
            items-center
            justify-between

            px-5
            py-4

            backdrop-blur-xl

            border-b
            border-white/10

            transition-all
            duration-300
          "
          style={{
            backgroundColor: "var(--card-bg)",
          }}
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* LOGO */}
            <div
              className="
                w-15
                h-15
                flex
                items-center
                justify-center
              "
            >
              <img
                src="/icon.png"
                alt="Logo"
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* TEXT */}
            <div>
              <h1
                className="
                  text-sm
                  sm:text-base
                  font-bold
                  leading-none
                "
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Trusted News AI
              </h1>

              <p
                className="
                  text-[11px]
                  sm:text-xs
                  mt-1
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                AI Hoax Detection System
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = active === item.id;

              return (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={`
                    relative

                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    ${isActive ? "text-cyan-400" : "hover:text-cyan-400"}
                  `}
                  style={{
                    color: isActive ? "#22d3ee" : "var(--text-secondary)",
                  }}
                >
                  {item.label}

                  {/* ACTIVE LINE */}
                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-1

                      h-0.5

                      bg-cyan-400

                      rounded-full

                      transition-all
                      duration-300

                      ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* TOGGLE */}
            <ThemeToggle />

            {/* CTA */}
            <Link
              to="/detection"
              className="
                hidden
                sm:flex

                items-center
                justify-center

                px-5
                py-2.5

                rounded-xl

                text-sm
                font-semibold
                text-white

                bg-linear-to-r
                from-blue-500
                to-cyan-400

                shadow-lg
                shadow-cyan-500/20

                transition-all
                duration-300
              "
            >
              Coba Deteksi
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                lg:hidden

                w-10
                h-10

                rounded-xl

                flex
                items-center
                justify-center

                border
                border-white/10
              "
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-primary)",
              }}
            >
              {isOpen ? (
                <HiX className="text-xl" />
              ) : (
                <HiMenuAlt3 className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
              lg:hidden

              p-5

              backdrop-blur-xl

              border-b
              border-white/10

              flex
              flex-col
              gap-4
            "
            style={{
              backgroundColor: "var(--card-bg)",
            }}
          >
            {navItems.map((item, index) => {
              const isActive = active === item.id;

              return (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActive(item.id);

                    setIsOpen(false);
                  }}
                  className={`
                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    ${isActive ? "text-cyan-400" : "hover:text-cyan-400"}
                  `}
                  style={{
                    color: isActive ? "#22d3ee" : "var(--text-secondary)",
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            {/* MOBILE CTA */}
            <Link
              to="/detection"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                justify-center

                py-3
                mt-2

                rounded-xl

                text-sm
                font-semibold
                text-white

                bg-linear-to-r
                from-blue-500
                to-cyan-400
              "
            >
              Coba Deteksi
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
