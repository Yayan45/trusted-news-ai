import ScoreGauge from "./ScoreGauge";
import VerdictSection from "./VerdictSection";
import InterpretationLegend from "./InterpretationLegend";

function TopResultCard({ result }) {
  return (
    <div className="bg-white shadow rounded-xl px-6 py-5">
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
          <ScoreGauge score={result.score} />
        </div>

        {/* CENTER */}
        <VerdictSection
          headline={result.headline}
          verdict={result.verdict}
          confidence={result.confidence}
          theme={result.theme}
        />

        {/* RIGHT */}
        <InterpretationLegend />
      </div>
    </div>
  );
}

export default TopResultCard;
