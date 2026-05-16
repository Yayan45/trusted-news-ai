import { motion } from "framer-motion";

import TopResultCard from "./top-result/TopResultCard";

import AnalysisGrid from "./ComponentAnalysis/AnalysisGrid";

import NewsSection from "./news/NewsSection";

function ResultSection({ result }) {
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
      <TopResultCard result={result} />

      {/* ANALYSIS GRID */}
      <AnalysisGrid analysis={result.analysis} />

      {/* NEWS SECTION */}
      <NewsSection news={result.news} />
    </motion.div>
  );
}

export default ResultSection;
