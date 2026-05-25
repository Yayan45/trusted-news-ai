const axios = require("axios"); // Wajib ditambahkan di paling atas untuk melakukan networking calls

exports.checkHeadline = async (req, res) => {
  try {
    const { headline } = req.body;

    // Validasi input dari Front-End
    if (!headline) {
      return res
        .status(400)
        .json({ status: "error", message: "Headline tidak boleh kosong!" });
    }

    // 1. Tembak URL Ngrok asli dari tim AI (Colab)
    const urlAI = "https://swooned-pregame-saline.ngrok-free.dev/predict";

    // 2. axios.post mengirim JSON dengan Header Strict agar Flask Python tidak menolak (Fix 400 Error)
    const responseAI = await axios.post(
      urlAI,
      {
        headline: headline,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    // 3. Tangkap balasan dari AI, dan langsung teruskan (forward) ke Front-End
    return res.status(200).json({
      status: "success",
      data: responseAI.data,
    });
  } catch (error) {
    // REVISI: Deteksi jika server Colab / Flask temanmu yang menolak (misal error 400/500 dari sana)
    if (error.response) {
      console.error(
        "Server AI menolak request:",
        error.response.status,
        error.response.data,
      );
      console.log("Error detail:", error);
      return res.status(error.response.status).json({
        status: "error",
        message: `Ditolak oleh Server AI dengan status ${error.response.status}`,
        detail_dari_python: error.response.data, // Ini bakal nampilin pesan error asli dari Colab temen lu
      });
    }

    // Jika Colab temanmu belum di-run, Ngrok-nya mati, atau internet putus
    console.error("Gagal koneksi ke API AI:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Server AI sedang tidak aktif, Ngrok mati, atau terputus.",
    });
  }
};
