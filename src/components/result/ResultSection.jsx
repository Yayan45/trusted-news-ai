import { motion } from "framer-motion";

import TopResultCard from "./top-result/TopResultCard";

import AnalysisGrid from "./ComponentAnalysis/AnalysisGrid";

import NewsSection from "./news/NewsSection";

function ResultSection({ result }) {
  // ===============================
  // SAFE API DATA
  // ===============================

  const safeResult = {
    headline: result?.headline || "",

    score: Number(result?.score || 0),

    verdict: result?.verdict || "Tidak Diketahui",

    confidence: result?.confidence || "sedang",

    theme: result?.theme || "blue",

    analysis: result?.analysis || {},

    news: result?.news || [],
  };

  return (
    <motion.div
      className="mt-5"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {/* TOP RESULT */}
      <TopResultCard result={safeResult} />

      {/* ANALYSIS GRID */}
      <AnalysisGrid analysis={safeResult.analysis} news={safeResult.news} />

      {/* NEWS SECTION */}
      <NewsSection news={safeResult.news} />
    </motion.div>
  );
}

export default ResultSection;
