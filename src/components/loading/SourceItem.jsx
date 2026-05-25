import { FaCheckCircle, FaClock, FaExclamationCircle } from "react-icons/fa";

function SourceItem({ image, title, subtitle, status }) {
  const renderStatus = () => {
    switch (status) {
      case "loading":
        return (
          <div
            className="
              w-7
              h-7
              border-4
              rounded-full
              animate-spin
            "
            style={{
              borderColor: "var(--border-color)",
              borderTopColor: "#3b82f6",
            }}
          />
        );

      case "success":
        return <FaCheckCircle className="text-3xl text-green-500" />;

      case "error":
        return <FaExclamationCircle className="text-3xl text-red-500" />;

      default:
        return (
          <FaClock
            className="text-2xl"
            style={{
              color: "var(--text-secondary)",
            }}
          />
        );
    }
  };

  return (
    <div
      className="
        shadow
        rounded-xl
        p-4
        flex
        items-center
        justify-between
        gap-4
        mb-4
        transition-all
        duration-300
        border
      "
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img src={image} alt={title} className="w-12 h-12 object-contain" />

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* STATUS */}
      {renderStatus()}
    </div>
  );
}

export default SourceItem;
