import SearchAnimation from "./SearchAnimation";
import ProgressLine from "./ProgressLine";
import SourceItem from "./SourceItem";

function LoadingAnalysis({ sources, progress }) {
  return (
    <div
      className="shadow rounded-2xl p-4 sm:p-6 mt-5 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-lg sm:text-xl font-bold">
          Sedang Menganalisis Berita
        </h2>

        <p
          className="text-sm mt-2"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Kami sedang mengambil data dari berbagai sumber terpercaya
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* LEFT */}
        <div className="h-40 sm:h-48 flex justify-center items-center">
          <SearchAnimation />
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-center">
          <ProgressLine progress={progress} />
        </div>

        {/* RIGHT */}
        <div>
          {sources.map((source, index) => (
            <SourceItem
              key={index}
              image={source.image}
              title={source.title}
              subtitle={source.subtitle}
              status={source.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingAnalysis;
