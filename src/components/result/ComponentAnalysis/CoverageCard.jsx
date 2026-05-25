function CoverageCard({ coverage }) {
  return (
    <div
      className="shadow rounded-2xl p-5 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      <div className="flex items-center gap-4">
        {/* ICON */}
        <img
          src="/coverage.png"
          alt="Coverage"
          className="w-28 h-28 object-contain"
        />

        {/* CONTENT */}
        <div>
          <h3 className="font-bold text-lg leading-tight">
            Jangkauan Penelusuran (Search Coverage)
          </h3>

          <div className="flex items-end gap-2 mt-1">
            <h1 className="text-3xl font-bold">{coverage}</h1>

            <p
              className="text-sm mb-1"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Total Artikel Dianalisis
            </p>
          </div>

          <p
            className="text-sm mt-1"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Sumber: DuckDuckGo & Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverageCard;
