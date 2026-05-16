function CoverageCard({ coverage }) {
  return (
    <div className="bg-white shadow rounded-2xl p-5">
      <div className="flex items-center gap-4">
        {/* ICON */}
        <img
          src="/coverage.png"
          alt="Coverage"
          className="w-28 h-28 object-contain"
        />

        {/* CONTENT */}
        <div>
          <h3 className="font-bold text-lg leading-tight">
            Jangkauan Penelusuran (Search Coverage)
          </h3>

          <div className="flex items-end gap-2 mt-1">
            <h1 className="text-3xl font-bold">{coverage}</h1>

            <p className="text-sm text-gray-500 mb-1">
              Total Artikel Dianalisis
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Sumber: DuckDuckGo & Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverageCard;
