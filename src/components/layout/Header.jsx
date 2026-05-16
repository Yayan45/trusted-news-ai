import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setCurrentTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow rounded-2xl p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      {/* LEFT */}
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
        />

        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
            SISTEM DETEKSI HOAX BERITA
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Sistem Deteksi Hoax berbasis NLP
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 text-sm text-gray-500 lg:self-start">
        <FaRegClock />
        <span>{currentTime}</span>
      </div>
    </div>
  );
}

export default Header;
