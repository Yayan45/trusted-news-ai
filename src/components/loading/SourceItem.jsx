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
              border-gray-300
              border-t-blue-500
              rounded-full
              animate-spin
            "
          />
        );

      case "success":
        return <FaCheckCircle className="text-3xl text-green-500" />;

      case "error":
        return <FaExclamationCircle className="text-3xl text-red-500" />;

      default:
        return <FaClock className="text-2xl text-gray-400" />;
    }
  };

  return (
    <div
      className="
        bg-white
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
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img src={image} alt={title} className="w-12 h-12 object-contain" />

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      {/* STATUS */}
      {renderStatus()}
    </div>
  );
}

export default SourceItem;
