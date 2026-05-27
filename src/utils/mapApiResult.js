export const mapApiResult = (headline, apiResponse) => {
  const data = apiResponse;

  const berita = data.berita_terkait || [];

  // =========================
  // THEME
  // =========================

  let theme = "green";

  if (data.skor_hoax >= 75) {
    theme = "red";
  } else if (data.skor_hoax >= 55) {
    theme = "orange";
  } else if (data.skor_hoax >= 40) {
    theme = "yellow";
  } else if (data.skor_hoax >= 20) {
    theme = "blue";
  }

  return {
    // =========================
    // TOP RESULT
    // =========================

    headline,

    score: Number(data.skor_hoax || 0),

    verdict: data.verdict || "Tidak Diketahui",

    confidence: data.keyakinan || "sedang",

    theme,

    // =========================
    // ANALYSIS
    // =========================

    analysis: {
      support: data.komponen_analisis?.rasio_konfirmasi?.mendukung || 0,

      against: data.komponen_analisis?.rasio_konfirmasi?.membantah || 0,

      factCheck:
        data.komponen_analisis?.cek_fakta_resmi ||
        "Tidak ada cek fakta resmi ditemukan",

      semanticTags: data.komponen_analisis?.analisis_semantik || [],

      coverage: data.komponen_analisis?.jangkauan_penelusuran || berita.length,
    },

    // =========================
    // NEWS TABLE
    // =========================

    news: berita.map((item) => ({
      id: item.id,

      title: item.judul,

      source: item.sumber,

      similarity: Number(item.similarity || 0),

      status: item.status,

      url: item.url,

      hoaxScore: item.skor_hoax_artikel,

      trusted: item.trusted_source,

      clickbait: item.clickbait,
    })),
  };
};
