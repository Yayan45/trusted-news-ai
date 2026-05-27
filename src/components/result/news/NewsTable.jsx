import NewsRow from "./NewsRow";

function NewsTable({ news = [] }) {
  // ===============================
  // EMPTY STATE
  // ===============================

  const isEmpty = !news || news.length === 0;

  return (
    <div>
      {/* TABLE CONTAINER */}
      <div className="overflow-x-auto">
        <table className="min-w-212.5 w-full mt-3">
          {/* HEAD */}
          <thead>
            <tr
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-primary)",
              }}
            >
              <th className="px-4 py-4 text-sm font-semibold text-left rounded-l-xl">
                No
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-left">
                Judul Berita
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-left">
                Sumber
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-left">
                Similarity
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-left">
                Status
              </th>

              <th className="px-4 py-4 text-sm font-semibold text-left rounded-r-xl">
                Link Ke Artikel Asli
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {isEmpty ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-14 text-center"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    {/* ICON */}
                    <div className="text-5xl mb-4 opacity-60">📰</div>

                    {/* TITLE */}
                    <h2
                      className="text-lg font-semibold"
                      style={{
                        color: "var(--text-primary)",
                      }}
                    >
                      Tidak ada berita ditemukan
                    </h2>
                  </div>
                </td>
              </tr>
            ) : (
              news.map((item, index) => (
                <NewsRow key={index} item={item} index={index} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewsTable;
