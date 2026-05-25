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

  const defaultStyle = {
    borderColor: "var(--border-color)",
    backgroundColor: "var(--bg-secondary)",
    color: "var(--text-secondary)",
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* ALL */}
      <button
        onClick={() => handleFilter("Semua")}
        className="
          px-5
          py-2
          rounded-lg
          border
          text-sm
          font-medium
          transition
        "
        style={
          selectedFilter === "Semua"
            ? {
                borderColor: "#bfdbfe",
                backgroundColor: "#eff6ff",
                color: "#2563eb",
              }
            : defaultStyle
        }
      >
        Semua ({total})
      </button>

      {/* MEMBANTAH */}
      <button
        onClick={() => handleFilter("Membantah")}
        className="
          px-5
          py-2
          rounded-lg
          border
          text-sm
          font-medium
          transition
        "
        style={
          selectedFilter === "Membantah"
            ? {
                borderColor: "#fecaca",
                backgroundColor: "#fef2f2",
                color: "#ef4444",
              }
            : defaultStyle
        }
      >
        Membantah ({membantahCount})
      </button>

      {/* MENDUKUNG */}
      <button
        onClick={() => handleFilter("Mendukung")}
        className="
          px-5
          py-2
          rounded-lg
          border
          text-sm
          font-medium
          transition
        "
        style={
          selectedFilter === "Mendukung"
            ? {
                borderColor: "#bbf7d0",
                backgroundColor: "#f0fdf4",
                color: "#16a34a",
              }
            : defaultStyle
        }
      >
        Mendukung ({mendukungCount})
      </button>
    </div>
  );
}

export default NewsFilter;
