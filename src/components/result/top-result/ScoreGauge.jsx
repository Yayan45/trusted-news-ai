function ScoreGauge({ score = 0 }) {
  // ===============================
  // NORMALIZE SCORE FROM API
  // ===============================

  const normalizedScore = Number(score) || 0;

  // ===============================
  // DYNAMIC COLOR FROM API SCORE
  // ===============================

  const getColor = () => {
    if (normalizedScore >= 75) return "#ef4444";

    if (normalizedScore >= 55) return "#f97316";

    if (normalizedScore >= 40) return "#eab308";

    if (normalizedScore >= 20) return "#3b82f6";

    return "#22c55e";
  };

  const color = getColor();

  // ===============================
  // ARC ANGLE
  // ===============================

  const angle = (normalizedScore / 100) * 270;

  return (
    <div className="relative w-44 h-44">
      {/* OUTER ARC */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            conic-gradient(
              from 135deg,
              ${color} ${angle}deg,
              var(--border-color) ${angle}deg 270deg,
              transparent 270deg
            )
          `,
        }}
      />

      {/* CENTER */}
      <div
        className="
          absolute
          inset-4
          rounded-full
          flex
          flex-col
          items-center
          justify-center
          shadow-inner
        "
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--text-primary)",
        }}
      >
        {/* SCORE */}
        <h1
          className="
            text-4xl
            font-bold
            leading-none
            mb-2
          "
        >
          {normalizedScore}%
        </h1>

        {/* SMALL LINE */}
        <div
          className="w-8 h-1 rounded-full mb-3"
          style={{
            backgroundColor: color,
          }}
        />

        {/* LABEL */}
        <p
          className="text-base"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Skor Hoax
        </p>
      </div>

      {/* INNER BORDER */}
      <div
        className="
          absolute
          inset-2
          rounded-full
          border-4
        "
        style={{
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />
    </div>
  );
}

export default ScoreGauge;
