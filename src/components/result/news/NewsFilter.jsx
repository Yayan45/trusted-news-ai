function NewsFilter({
  selectedFilter,
  setSelectedFilter,
  total,
  membantahCount,
  mendukungCount,
  setCurrentPage,
}) {
  const handleFilter = (filter) => {
    setSelectedFilter(filter);

    setCurrentPage(1);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* ALL */}
      <button
        onClick={() => handleFilter("Semua")}
        className={`
          px-5
          py-2
          rounded-lg
          border
          text-sm
          font-medium
          transition

          ${
            selectedFilter === "Semua"
              ? "border-blue-200 bg-blue-50 text-blue-600"
              : "border-gray-200 bg-white text-gray-500"
          }
        `}
      >
        Semua ({total})
      </button>

      {/* MEMBANTAH */}
      <button
        onClick={() => handleFilter("Membantah")}
        className={`
          px-5
          py-2
          rounded-lg
          border
          text-sm
          font-medium
          transition

          ${
            selectedFilter === "Membantah"
              ? "border-red-200 bg-red-50 text-red-500"
              : "border-gray-200 bg-white text-gray-500"
          }
        `}
      >
        Membantah ({membantahCount})
      </button>

      {/* MENDUKUNG */}
      <button
        onClick={() => handleFilter("Mendukung")}
        className={`
          px-5
          py-2
          rounded-lg
          border
          text-sm
          font-medium
          transition

          ${
            selectedFilter === "Mendukung"
              ? "border-green-200 bg-green-50 text-green-600"
              : "border-gray-200 bg-white text-gray-500"
          }
        `}
      >
        Mendukung ({mendukungCount})
      </button>
    </div>
  );
}

export default NewsFilter;
