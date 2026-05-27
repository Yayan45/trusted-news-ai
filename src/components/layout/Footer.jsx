function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        mt-10

        border-t

        px-6
        py-10
      "
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2

          w-75
          h-75

          rounded-full

          blur-3xl

          opacity-10
        "
        style={{
          background: "linear-gradient(to right, #3B82F6, #06B6D4)",
        }}
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-6
        "
      >
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2
            className="
              text-xl
              font-bold
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            Trusted News AI
          </h2>

          <p
            className="
              mt-2

              text-sm
              leading-7
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Sistem Deteksi Headline Berita dan Rekomendasi Sumber Berita
            Terpercaya berbasis Artificial Intelligence.
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right">
          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            © 2026 Trusted News AI
          </p>

          <p
            className="
              mt-1
              text-sm
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
