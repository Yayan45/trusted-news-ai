function ScoreGauge({ score }) {
  // =========================
  // DETERMINE COLOR
  // =========================
  const getColor = () => {
    if (score >= 75) return "#ef4444"; // red
    if (score >= 55) return "#f97316"; // orange
    if (score >= 40) return "#eab308"; // yellow
    if (score >= 20) return "#3b82f6"; // blue

    return "#22c55e"; // green
  };

  const color = getColor();

  // =========================
  // CONVERT SCORE TO ANGLE
  // =========================
  const angle = (score / 100) * 270;

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
              #ececec ${angle}deg 270deg,
              transparent 270deg
            )
          `,
        }}
      />

      {/* WHITE CENTER */}
      <div
        className="
          absolute
          inset-4
          bg-white
          rounded-full
          flex
          flex-col
          items-center
          justify-center
          shadow-inner
        "
      >
        {/* SCORE */}
        <h1
          className="
            text-4xl
            font-bold
            text-gray-800
            leading-none
            mb-2
          "
        >
          {score}%
        </h1>

        {/* SMALL LINE */}
        <div
          className="w-8 h-1 rounded-full mb-3"
          style={{
            backgroundColor: color,
          }}
        />

        {/* LABEL */}
        <p className="text-gray-500 text-base">Skor Hoax</p>
      </div>

      {/* INNER SOFT BORDER */}
      <div
        className="
          absolute
          inset-2
          rounded-full
          border-4
          border-white/40
        "
      />
    </div>
  );
}

export default ScoreGauge;
