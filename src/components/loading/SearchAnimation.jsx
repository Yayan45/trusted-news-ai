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
            flex
            items-center
            justify-center
            animate-pulse
          "
          style={{
            borderColor: "rgba(59,130,246,0.35)",
            backgroundColor: "var(--bg-secondary)",
          }}
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
            animate-ping
          "
          style={{
            borderColor: "rgba(59,130,246,0.45)",
          }}
        />
      </div>
    </div>
  );
}

export default SearchAnimation;
