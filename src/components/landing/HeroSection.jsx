import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
function HeroSection() {
  return (
    <section
      id="beranda"
      className=" relative overflow-hidden min-h-[85vh] flex items-center "
    >
      {/* BACKGROUND GLOW */}
      <div
        className=" absolute  right-50 w-125 h-125 rounded-full blur-3xl opacity-20 hidden sm:hidden lg:block"
        style={{ background: "linear-gradient(to right, #3B82F6, #06B6D4)" }}
      />
      {/* CONTAINER */}
      <div className=" max-w-7xl mx-auto px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
        {/* LEFT */}
        <div>
          {/* SMALL BADGE */}
          <div
            className=" mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/20 mb-6 "
            style={{
              backgroundColor: "rgba(6,182,212,0.08)",
              color: "#06B6D4",
            }}
          >
            ✨ Teknologi AI Untuk Verifikasi Berita
          </div>
          {/* TITLE */}
          <h1
            className=" text-2xl sm:text-5xl lg:text-5xl font-black leading-tight "
            style={{ color: "var(--text-primary)" }}
          >
            Sistem Deteksi
            <span className=" block bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
              Headline Berita
            </span>
            dan Rekomendasi Sumber Berita Terpercaya
          </h1>
          {/* SUBTITLE */}
          <p
            className=" mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl text-justify"
            style={{ color: "var(--text-secondary)" }}
          >
            Sistem berbasis Natural Language Processing dan Deep Learning untuk
            melakukan scraping berita, klasifikasi konten, serta memberikan
            rekomendasi sumber berita terpercaya secara otomatis dan real-time.
          </p>
          {/* BUTTON */}
          <div className="flex flex-wrap gap-4 mt-10">
            {/* PRIMARY */}
            <Link
              to="/detection"
              className=" inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-white font-semibold bg-linear-to-r from-blue-500 to-cyan-400 shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 "
            >
              <span>Coba Deteksi Sekarang</span> <FaArrowRight />
            </Link>
            {/* SECONDARY */}
            <a
              href="#tentang"
              className=" inline-flex items-center justify-center px-7 py-4 rounded-2xl border font-semibold hover:border-cyan-400 transition-all duration-300 "
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
        {/* RIGHT */}
        <div className="relative hidden lg:flex justify-center">
          {/* GLOW */}
          <div
            className=" absolute w-112.5 h-112.5 rounded-full blur-3xl opacity-20 "
            style={{
              background: "linear-gradient(to right, #3B82F6, #06B6D4)",
            }}
          />
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* BACKGROUND GLOW */}
            <div
              className=" absolute w-96 h-96 rounded-full blur-3xl opacity-30 "
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              }}
            />
            {/* IMAGE CARD */}
            <div
              className=" relative w-full max-w-xl rounded-4xl overflow-hidden border shadow-2xl backdrop-blur-xl p-3 "
              style={{
                backgroundColor: "rgba(15,23,42,0.75)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <img
                src="/images/hero.png"
                alt="Deteksi Hoax AI"
                className=" w-full h-105 object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
