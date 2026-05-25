function SemanticCard({ semanticTags }) {
  // TAG COLOR
  const getTagColor = (index) => {
    const colors = [
      "bg-red-100 text-red-500",
      "bg-green-100 text-green-600",
      "bg-purple-100 text-purple-600",
      "bg-blue-100 text-blue-600",
      "bg-orange-100 text-orange-500",
    ];

    return colors[index % colors.length];
  };

  return (
    <div
      className="shadow rounded-2xl p-5 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      <div className="flex items-start gap-4">
        {/* ICON */}
        <img
          src="/semantic.png"
          alt="Semantic"
          className="w-28 h-28 object-contain"
        />

        {/* CONTENT */}
        <div className="flex-1">
          {/* TITLE */}
          <h3 className="font-bold text-lg mb-4">
            Analisis Semantik & Gaya Bahasa
          </h3>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {semanticTags.map((tag, index) => (
              <div
                key={index}
                className={`
                  px-3
                  py-1
                  rounded-md
                  text-sm
                  font-medium
                  ${getTagColor(index)}
                `}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SemanticCard;
