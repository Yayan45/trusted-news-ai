import { FaSearch } from "react-icons/fa";

function SearchAnimation() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative">
        {/* Lingkaran */}
        <div
          className="
          w-28
          h-28
          rounded-full
          border-4
          border-blue-200
          flex
          items-center
          justify-center
          animate-pulse
        "
        >
          <FaSearch className="text-4xl text-blue-500" />
        </div>

        {/* Ping Effect */}
        <div
          className="
          absolute
          inset-0
          rounded-full
          border-4
          border-blue-300
          animate-ping
        "
        />
      </div>
    </div>
  );
}

export default SearchAnimation;
