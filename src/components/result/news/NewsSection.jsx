import { useMemo, useState } from "react";

import NewsFilter from "./NewsFilter";
import NewsTable from "./NewsTable";
import Pagination from "./Pagination";

function NewsSection({ news }) {
  // =========================
  // STATE
  // =========================
  const [selectedFilter, setSelectedFilter] = useState("Semua");

  const [sortType, setSortType] = useState("highest");

  const [currentPage, setCurrentPage] = useState(1);

  // =========================
  // PAGINATION
  // =========================
  const itemsPerPage = 5;

  // =========================
  // FILTER DATA
  // =========================
  const filteredNews = useMemo(() => {
    let data = [...news];

    // FILTER
    if (selectedFilter !== "Semua") {
      data = data.filter((item) => item.status === selectedFilter);
    }

    // SORT
    data.sort((a, b) => {
      if (sortType === "highest") {
        return b.similarity - a.similarity;
      }

      return a.similarity - b.similarity;
    });

    return data;
  }, [news, selectedFilter, sortType]);

  // =========================
  // PAGINATION DATA
  // =========================
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // =========================
  // COUNT
  // =========================
  const membantahCount = news.filter(
    (item) => item.status === "Membantah",
  ).length;

  const mendukungCount = news.filter(
    (item) => item.status === "Mendukung",
  ).length;

  return (
    <div
      className="shadow rounded-2xl p-5 mt-6 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
        {/* TITLE + FILTER */}
        <div>
          <h2 className="text-2xl font-bold">Daftar Berita Terkait</h2>

          <div className="mt-4">
            <NewsFilter
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              total={news.length}
              membantahCount={membantahCount}
              mendukungCount={mendukungCount}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        {/* SORT */}
        <div>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="
              border
              rounded-lg
              px-4
              py-2
              text-sm
              outline-none
              min-w-62.5
            "
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <option value="highest">Urutkan : Similarity (Tertinggi)</option>

            <option value="lowest">Urutkan : Similarity (Terendah)</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <NewsTable news={paginatedNews} />

      {/* PAGINATION */}
      <Pagination
        total={filteredNews.length}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default NewsSection;
