import ScoreGauge from "./ScoreGauge";

import VerdictSection from "./VerdictSection";

import InterpretationLegend from "./InterpretationLegend";

function TopResultCard({ result }) {
  // ===============================
  // SAFE FALLBACK FROM API
  // ===============================

  const safeResult = {
    headline: result?.headline || "-",

    score: Number(result?.score || 0),

    verdict: result?.verdict || "Tidak Diketahui",

    confidence: result?.confidence || "sedang",

    theme: result?.theme || "blue",
  };

  return (
    <div
      className="shadow rounded-xl px-6 py-5 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[210px_300px_1fr]
          items-center
          gap-4
        "
      >
        {/* LEFT */}
        <div className="flex justify-center">
          <ScoreGauge score={safeResult.score} />
        </div>

        {/* CENTER */}
        <VerdictSection
          headline={safeResult.headline}
          verdict={safeResult.verdict}
          confidence={safeResult.confidence}
          theme={safeResult.theme}
        />

        {/* RIGHT */}
        <InterpretationLegend />
      </div>
    </div>
  );
}

export default TopResultCard;
