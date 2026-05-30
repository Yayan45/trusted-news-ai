function AboutSection() {
  const points = [
    {
      title: "Tujuan Projek",
      desc: "Membangun sistem berbasis Artificial Intelligence untuk membantu pengguna mendeteksi headline berita hoax dan memperoleh rekomendasi sumber berita terpercaya secara otomatis dan real-time.",
    },

    {
      title: "Permasalahan Hoax",
      desc: "Penyebaran berita palsu di media sosial terjadi sangat cepat dan sering kali sulit diverifikasi. Banyak pengguna menerima informasi tanpa mengetahui tingkat kredibilitas sumber berita yang dibaca.",
    },

    {
      title: "Mengapa Menggunakan AI",
      desc: "Sistem memanfaatkan teknologi Natural Language Processing (NLP), scraping berita, dan Deep Learning untuk melakukan analisis teks secara otomatis, cepat, dan lebih efisien dibanding pengecekan manual.",
    },

    {
      title: "Manfaat Sistem",
      desc: "Membantu pengguna memperoleh informasi yang lebih terpercaya, meningkatkan literasi digital, serta mengurangi penyebaran berita hoax di lingkungan digital.",
    },
  ];

  const stats = [
    {
      value: "Real-Time",
      label: "Scraping & analisis artikel otomatis",
    },

    {
      value: "Deep Learning",
      label: "NLP model untuk klasifikasi berita",
    },

    {
      value: "Cosine Similarity",
      label: "Analisis kemiripan headline berita",
    },
  ];

  return (
    <section
      id="tentang"
      className="
        relative
        overflow-hidden

        py-24
        px-6
      "
    >
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-16
            items-start
          "
        >
          {/* ====================== */}
          {/* LEFT */}
          {/* ====================== */}
          <div>
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                px-5
                py-2
                rounded-full
                text-sm
                font-medium
                border
                mb-6
              "
              style={{
                borderColor: "rgba(34,211,238,0.2)",
                background:
                  "linear-gradient(to right, rgba(59,130,246,0.08), rgba(34,211,238,0.08))",
                color: "#22d3ee",
              }}
            >
              Tentang Sistem
            </div>

            {/* TITLE */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-black

                leading-tight
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              Sistem AI Untuk
              <span
                className="
                  block

                  bg-linear-to-r
                  from-blue-500
                  to-cyan-400

                  bg-clip-text
                  text-transparent
                "
              >
                Analisis Kredibilitas Berita
              </span>
            </h1>

            {/* DESC */}
            <p
              className="
                mt-8

                text-base
                sm:text-lg

                leading-8
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Trusted News AI merupakan sistem berbasis Artificial Intelligence
              yang dikembangkan untuk mendeteksi headline berita, melakukan
              scraping artikel terkait, menganalisis kredibilitas konten, dan
              memberikan rekomendasi sumber berita terpercaya secara otomatis
              dan real-time.
            </p>

            {/* DESC 2 */}
            <p
              className="
                mt-6

                text-base
                sm:text-lg

                leading-8
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Sistem melakukan proses clickbait detection,stance detection,
              cosine similarity analysis, serta trusted domain verification
              untuk membantu menentukan tingkat kredibilitas berita secara lebih
              akurat.
            </p>

            {/* STATS */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3

                gap-5

                mt-12
              "
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl

                    border

                    p-5
                  "
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <h2
                    className="
                      text-xl
                      sm:text-2xl

                      font-black
                    "
                    style={{
                      color: index % 2 === 0 ? "#3B82F6" : "#06B6D4",
                    }}
                  >
                    {item.value}
                  </h2>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-6
                    "
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ====================== */}
          {/* RIGHT */}
          {/* ====================== */}
          <div className="space-y-6">
            {points.map((item, index) => (
              <div
                key={index}
                className="
                  relative

                  rounded-4xl

                  border

                  p-7

                  overflow-hidden

                  transition-all
                  duration-300

                  hover:-translate-y-1
                "
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    top-0
                    right-0

                    w-40
                    h-40

                    rounded-full

                    blur-3xl

                    opacity-10
                  "
                  style={{
                    background: "linear-gradient(to right, #3B82F6, #06B6D4)",
                  }}
                />

                {/* NUMBER */}
                <div
                  className="
                    absolute
                    top-5
                    right-5

                    text-6xl
                    font-black

                    opacity-10
                  "
                  style={{
                    color: "#06B6D4",
                  }}
                >
                  0{index + 1}
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      text-base
                      leading-8
                    "
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
