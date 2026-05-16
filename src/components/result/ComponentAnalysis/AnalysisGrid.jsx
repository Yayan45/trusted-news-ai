import StanceCard from "./StanceCard";
import FactCheckCard from "./FactCheckCard";
import SemanticCard from "./SemanticCard";
import CoverageCard from "./CoverageCard";

function AnalysisGrid({ analysis }) {
  return (
    <div className="mt-6">
      {/* TITLE */}
      <h2 className="text-xl font-bold mb-4">Komponen Analisis</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <StanceCard support={analysis.support} against={analysis.against} />

        <FactCheckCard factCheck={analysis.factCheck} />

        <SemanticCard semanticTags={analysis.semanticTags} />

        <CoverageCard coverage={analysis.coverage} />
      </div>
    </div>
  );
}

export default AnalysisGrid;
