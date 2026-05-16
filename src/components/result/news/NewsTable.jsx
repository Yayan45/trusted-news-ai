import NewsRow from "./NewsRow";

function NewsTable({ news }) {
  return (
    <div>
      {/* TABLE CONTAINER */}
      <div className="overflow-x-auto">
        <table className="min-w-212.5 w-full mt-3">
          {/* HEAD */}
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-4 text-sm font-semibold rounded-l-xl">
                No
              </th>

              <th className="px-4 py-4 text-sm font-semibold">Judul Berita</th>

              <th className="px-4 py-4 text-sm font-semibold">Sumber</th>

              <th className="px-4 py-4 text-sm font-semibold">Similarity</th>

              <th className="px-4 py-4 text-sm font-semibold">Status</th>

              <th className="px-4 py-4 text-sm font-semibold rounded-r-xl">
                Link Ke Artikel Asli
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {news.map((item, index) => (
              <NewsRow key={index} item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewsTable;
