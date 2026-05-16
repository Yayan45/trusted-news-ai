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
      <p className="text-sm text-gray-500">
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
            bg-gray-200
            flex
            items-center
            justify-center
            disabled:opacity-50
          "
        >
          <FaChevronLeft />
        </button>

        {/* PAGE */}
        <button
          className="
            w-9
            h-9
            rounded-md
            bg-blue-500
            text-white
            font-medium
          "
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
            bg-gray-200
            flex
            items-center
            justify-center
            disabled:opacity-50
          "
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
