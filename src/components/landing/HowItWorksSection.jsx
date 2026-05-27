import {
  FaSearch,
  FaNewspaper,
  FaBrain,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

import { MdOutlineAnalytics } from "react-icons/md";

function HowItWorksSection() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Input Headline Berita",
      description:
        "Pengguna memasukkan headline berita yang ingin dianalisis ke dalam sistem. Headline akan digunakan sebagai dasar proses scraping dan analisis Artificial Intelligence.",
    },

    {
      icon: <FaNewspaper />,
      title: "Scraping Artikel Terkait",
      description:
        "Sistem secara otomatis mencari dan mengambil artikel terkait dari berbagai sumber berita digital untuk dijadikan data pembanding dalam proses analisis.",
    },

    {
      icon: <FaBrain />,
      title: "Stance Detection",
      description:
        "Model AI menganalisis apakah artikel yang ditemukan mendukung atau membantah headline berita menggunakan pendekatan Natural Language Processing.",
    },

    {
      icon: <MdOutlineAnalytics />,
      title: "Clickbait Detection",
      description:
        "Sistem mendeteksi indikasi clickbait dan pola bahasa provokatif untuk mengurangi artikel yang berpotensi menyebarkan informasi manipulatif.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Trusted Domain & Similarity",
      description:
        "Sistem melakukan pengecekan domain terpercaya serta menghitung cosine similarity untuk mengukur tingkat kemiripan antar artikel berita.",
    },

    {
      icon: <FaCheckCircle />,
      title: "Hasil Analisis AI",
      description:
        "Sistem menampilkan hasil analisis berupa status berita, confidence score AI, tingkat validitas informasi, dan rekomendasi sumber berita terpercaya.",
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="
        relative
        overflow-hidden

        py-24
        px-6
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-175
          h-175

          rounded-full

          blur-3xl

          opacity-10
        "
        style={{
          background: "linear-gradient(to right, #3B82F6, #06B6D4)",
        }}
      />

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24">
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
            "
            style={{
              borderColor: "rgba(34,211,238,0.2)",
              background:
                "linear-gradient(to right, rgba(59,130,246,0.08), rgba(34,211,238,0.08))",
              color: "#22d3ee",
            }}
          >
            Cara Kerja Sistem
          </div>

          {/* TITLE */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl

              font-black

              mt-6
              leading-tight
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            Alur Analisis
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
              Trusted News AI
            </span>
          </h1>

          {/* DESC */}
          <p
            className="
              max-w-3xl
              mx-auto

              mt-6

              text-base
              sm:text-lg

              leading-8
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Trusted News AI menggunakan kombinasi Artificial Intelligence,
            Natural Language Processing, scraping berita, dan cosine similarity
            analysis untuk membantu proses verifikasi berita digital secara
            otomatis dan real-time.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative">
          {/* CENTER LINE */}
          <div
            className="
              hidden
              lg:block

              absolute
              left-1/2
              top-0
              bottom-0

              w-0.5
              -translate-x-1/2
            "
            style={{
              background: "linear-gradient(to bottom, #3B82F6, #06B6D4)",
            }}
          />

          {/* ITEMS */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                    relative

                    flex
                    flex-col
                    lg:flex-row

                    items-center

                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                  `}
                >
                  {/* CARD */}
                  <div
                    className="
                      relative

                      w-full
                      lg:w-[45%]

                      rounded-4xl

                      border

                      p-8
                      sm:p-10

                      overflow-hidden

                      transition-all
                      duration-500

                      hover:-translate-y-2
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
                        background:
                          "linear-gradient(to right, #3B82F6, #06B6D4)",
                      }}
                    />

                    {/* CONTENT */}
                    <div className="relative z-10">
                      {/* ICON */}
                      <div
                        className="
                          w-20
                          h-20

                          rounded-3xl

                          flex
                          items-center
                          justify-center

                          text-3xl

                          border

                          mb-8
                        "
                        style={{
                          background:
                            "linear-gradient(to right, rgba(59,130,246,0.12), rgba(34,211,238,0.12))",
                          borderColor: "rgba(34,211,238,0.15)",
                          color: "#22d3ee",
                        }}
                      >
                        {step.icon}
                      </div>

                      {/* STEP */}
                      <p
                        className="
                          text-sm
                          font-semibold
                          uppercase
                          tracking-widest
                        "
                        style={{
                          color: "#22d3ee",
                        }}
                      >
                        Step 0{index + 1}
                      </p>

                      {/* TITLE */}
                      <h2
                        className="
                          text-2xl
                          sm:text-3xl

                          font-black

                          mt-4
                          leading-tight
                        "
                        style={{
                          color: "var(--text-primary)",
                        }}
                      >
                        {step.title}
                      </h2>

                      {/* DESC */}
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
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div
                    className="
                      hidden
                      lg:flex

                      absolute
                      left-1/2
                      -translate-x-1/2

                      w-16
                      h-16

                      rounded-full

                      items-center
                      justify-center

                      text-xl
                      font-bold
                      text-white

                      border-4
                    "
                    style={{
                      background: "linear-gradient(to right, #3B82F6, #06B6D4)",
                      borderColor: "var(--bg-primary)",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
