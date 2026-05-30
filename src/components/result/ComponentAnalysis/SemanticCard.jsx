function SemanticCard() {
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

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center

              px-3
              py-1

              rounded-full

              text-sm
              font-semibold

              mb-4
            "
            style={{
              backgroundColor: "rgba(251,191,36,0.15)",
              color: "#f59e0b",
            }}
          >
            🚧 Upcoming Feature
          </div>

          {/* DESCRIPTION */}
          <p
            className="text-sm leading-7"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Fitur analisis semantik digunakan untuk mendeteksi pola bahasa,
            narasi provokatif, clickbait, serta karakteristik teks berita
            menggunakan teknologi Natural Language Processing (NLP). Fitur ini
            masih dalam tahap pengembangan dan akan tersedia pada versi
            berikutnya.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SemanticCard;
