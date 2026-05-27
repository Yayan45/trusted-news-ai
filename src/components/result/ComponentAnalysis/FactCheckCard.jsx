import { IoWarningOutline } from "react-icons/io5";

import { MdVerified } from "react-icons/md";

function FactCheckCard({ factCheck }) {
  // ===============================
  // DETECT OFFICIAL FACT CHECK
  // ===============================

  const hasOfficialFactCheck =
    factCheck && factCheck !== "Tidak ada cek fakta resmi ditemukan";

  return (
    <div
      className="shadow rounded-xl p-5 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      <div className="flex items-center gap-4">
        {/* ICON */}
        <img
          src="/fact-check.png"
          alt="Fact Check"
          className="w-28 h-28 object-contain"
        />

        {/* CONTENT */}
        <div>
          {/* TITLE */}
          <h3 className="font-bold text-lg mb-4">
            Status Cek Fakta Resmi (Fact-Check Badge)
          </h3>

          {/* STATUS */}
          <div className="flex items-center gap-2 mt-2">
            {hasOfficialFactCheck ? (
              <>
                {/* VERIFIED */}
                <MdVerified className="text-green-500 text-lg shrink-0" />

                <p
                  className="text-sm"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {factCheck}
                </p>
              </>
            ) : (
              <>
                {/* WARNING */}
                <IoWarningOutline className="text-orange-400 text-lg shrink-0" />

                <p
                  className="text-sm"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Tidak ada cek fakta resmi ditemukan
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactCheckCard;
