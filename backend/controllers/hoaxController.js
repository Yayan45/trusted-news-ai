exports.checkHeadline = async (req, res) => {
  try {
    const { headline } = req.body;

    if (!headline) {
      return res
        .status(400)
        .json({ status: "error", message: "Headline tidak boleh kosong!" });
    }

    // Data Dummy untuk Front-End
    const dummyResponse = {
      headline: headline,
      skor_hoax: 20,
      verdict: "KEMUNGKINAN BENAR",
      keyakinan: "tinggi",
      komponen_analisis: {
        rasio_konfirmasi: { membantah: 10, mendukung: 2 },
        cek_fakta_resmi: "Tidak ada cek fakta resmi ditemukan",
        analisis_semantik: ["Provokatif", "Clickbait", "Narasi Berulang"],
        jangkauan_penelusuran: 14,
      },
      berita_terkait: [
        {
          id: 1,
          judul: "Google Berita 6",
          sumber: "Kompas",
          similarity: 91.21,
          status: "Mendukung",
          url: "https://kompas.com",
        },
      ],
    };

    res.status(200).json({ status: "success", data: dummyResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Kesalahan server" });
  }
};
