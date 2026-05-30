import { FaBrain, FaNewspaper, FaSearch, FaShieldAlt } from "react-icons/fa";

import { MdOutlineAnalytics } from "react-icons/md";

import { TbBinaryTree2 } from "react-icons/tb";

function FeatureSection() {
  const features = [
    {
      icon: <FaNewspaper />,
      title: "Headline Scraping",
      description:
        "Sistem melakukan scraping artikel berita dari berbagai sumber digital berdasarkan headline yang dimasukkan pengguna.",
    },

    {
      icon: <MdOutlineAnalytics />,
      title: "Clickbait Detection",
      description:
        "Sistem mendeteksi indikasi clickbait pada artikel untuk mengurangi penyebaran informasi provokatif dan manipulatif.",
    },
    {
      icon: <FaBrain />,
      title: "Stance Detection",
      description:
        "Model AI menganalisis apakah artikel mendukung atau membantah headline berita menggunakan dataset stance classification.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Domain Check",
      description:
        "Artikel diverifikasi menggunakan daftar domain media terpercaya untuk meningkatkan kredibilitas hasil analisis.",
    },

    {
      icon: <FaSearch />,
      title: "Cosine Similarity Analysis",
      description:
        "Menggunakan cosine similarity untuk mengukur tingkat kemiripan antara headline pengguna dan artikel hasil scraping.",
    },

    {
      icon: <TbBinaryTree2 />,
      title: "AI Confidence Score",
      description:
        "Sistem menampilkan persentase keyakinan hasil analisis berita berdasarkan proses NLP dan Deep Learning.",
    },
  ];

  return (
    <section
      id="fitur"
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
          right-30

          w-100
          h-100

          rounded-full

          blur-3xl

          opacity-10
        "
      />

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
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
            Teknologi Sistem AI
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
            Teknologi Yang
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
              Mendukung Sistem
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
            Trusted News AI didukung berbagai teknologi AI, NLP, scraping
            berita, dan Deep Learning untuk melakukan analisis serta verifikasi
            berita secara otomatis.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-8
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                relative

                overflow-hidden

                rounded-3xl

                border

                p-8

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
                  background: "linear-gradient(to right, #3B82F6, #06B6D4)",
                }}
              />

              {/* ICON */}
              <div
                className="
                  relative

                  w-16
                  h-16

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  text-2xl

                  mb-8
                "
                style={{
                  background:
                    "linear-gradient(to right, rgba(59,130,246,0.15), rgba(34,211,238,0.15))",
                  color: "#22d3ee",
                }}
              >
                {feature.icon}
              </div>

              {/* TITLE */}
              <h2
                className="
                  text-2xl
                  font-bold
                  leading-tight
                "
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {feature.title}
              </h2>

              {/* DESC */}
              <p
                className="
                  mt-5

                  text-base
                  leading-8
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
