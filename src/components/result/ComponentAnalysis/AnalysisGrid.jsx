import StanceCard from "./StanceCard";
import FactCheckCard from "./FactCheckCard";
import SemanticCard from "./SemanticCard";
import CoverageCard from "./CoverageCard";

function AnalysisGrid({ analysis, news }) {
  // ===============================
  // SAFE DATA FROM API
  // ===============================

  const safeAnalysis = {
    factCheck: analysis?.factCheck || "",

    semanticTags: analysis?.semanticTags || [],

    coverage: Number(analysis?.coverage || 0),
  };

  return (
    <div className="mt-6">
      {/* TITLE */}
      <h2
        className="text-xl font-bold mb-4"
        style={{
          color: "var(--text-primary)",
        }}
      >
        Komponen Analisis
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* STANCE DARI BERITA_TERKAIT */}
        <StanceCard news={news} />

        <FactCheckCard factCheck={safeAnalysis.factCheck} />

        <SemanticCard semanticTags={safeAnalysis.semanticTags} />

        <CoverageCard coverage={safeAnalysis.coverage} />
      </div>
    </div>
  );
}

export default AnalysisGrid;
