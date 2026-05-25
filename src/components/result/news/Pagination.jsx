import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination({ total, currentPage, totalPages, setCurrentPage }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-5">
      {/* INFO */}
      <p
        className="text-sm"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Menampilkan {(currentPage - 1) * 5 + 1} -
        {Math.min(currentPage * 5, total)} dari {total} berita
      </p>

      {/* BUTTON */}
      <div className="flex items-center gap-3">
        {/* PREV */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="
            w-9
            h-9
            rounded-md
            flex
            items-center
            justify-center
            disabled:opacity-50
          "
          style={{
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-primary)",
          }}
        >
          <FaChevronLeft />
        </button>

        {/* PAGE */}
        <button
          className="
            w-9
            h-9
            rounded-md
            text-white
            font-medium
          "
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          {currentPage}
        </button>

        {/* NEXT */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="
            w-9
            h-9
            rounded-md
            flex
            items-center
            justify-center
            disabled:opacity-50
          "
          style={{
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-primary)",
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
