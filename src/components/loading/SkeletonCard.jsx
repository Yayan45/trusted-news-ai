import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div
      className="shadow rounded-2xl p-5 mt-5 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <Skeleton
        height={40}
        baseColor="var(--bg-secondary)"
        highlightColor="rgba(255,255,255,0.06)"
      />

      <Skeleton
        height={20}
        className="mt-4"
        baseColor="var(--bg-secondary)"
        highlightColor="rgba(255,255,255,0.06)"
      />

      <Skeleton
        height={20}
        className="mt-2"
        baseColor="var(--bg-secondary)"
        highlightColor="rgba(255,255,255,0.06)"
      />

      <Skeleton
        height={200}
        className="mt-6"
        baseColor="var(--bg-secondary)"
        highlightColor="rgba(255,255,255,0.06)"
      />
    </div>
  );
}

export default SkeletonCard;
