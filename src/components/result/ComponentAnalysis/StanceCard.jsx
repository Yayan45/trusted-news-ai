function StanceCard({ support, against }) {
  // TOTAL
  const total = support + against;

  // PERCENTAGE
  const supportPercentage = total > 0 ? (support / total) * 100 : 0;

  const againstPercentage = total > 0 ? (against / total) * 100 : 0;

  return (
    <div
      className="shadow rounded-2xl p-5 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* TITLE */}
      <h3 className="font-bold text-lg mb-4">
        Rasio Konfirmasi - Media (Stance Bar)
      </h3>

      {/* BAR */}
      <div
        className="w-full h-5 rounded-full overflow-hidden flex"
        style={{
          backgroundColor: "var(--border-color)",
        }}
      >
        {/* AGAINST */}
        <div
          className="
            bg-red-500
            transition-all
            duration-500
          "
          style={{
            width: `${againstPercentage}%`,
          }}
        />

        {/* SUPPORT */}
        <div
          className="
            bg-green-500
            transition-all
            duration-500
          "
          style={{
            width: `${supportPercentage}%`,
          }}
        />
      </div>

      {/* INFO */}
      <div className="flex items-center gap-6 mt-4 text-sm flex-wrap">
        {/* AGAINST */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />

          <p>{against} Membantah</p>
        </div>

        <p
          style={{
            color: "var(--text-secondary)",
          }}
        >
          ||
        </p>

        {/* SUPPORT */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />

          <p>{support} Mendukung</p>
        </div>
      </div>
    </div>
  );
}

export default StanceCard;
