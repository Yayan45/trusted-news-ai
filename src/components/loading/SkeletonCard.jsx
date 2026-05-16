import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div className="bg-white shadow rounded-2xl p-5 mt-5">
      <Skeleton height={40} />

      <Skeleton height={20} className="mt-4" />

      <Skeleton height={20} className="mt-2" />

      <Skeleton height={200} className="mt-6" />
    </div>
  );
}

export default SkeletonCard;
