function Footer() {
  return (
    <footer
      className="
        mt-12
        bg-white
        shadow
        rounded-2xl
        p-6
      "
    >
      {/* TOP */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-start
          lg:justify-between
          gap-8
        "
      >
        {/* LEFT */}
        <div className="max-w-3xl">
          {/* TITLE */}
          <h2 className="text-2xl font-bold">
            AI-Powered Headline Detection and Trusted News Recommendation System
          </h2>

          {/* DESC */}
          <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
            Sistem berbasis Artificial Intelligence dan Natural Language
            Processing (NLP) untuk mendeteksi headline hoax, clickbait, dan
            berita valid secara realtime. Platform ini membantu pengguna
            memperoleh informasi terpercaya melalui analisis kredibilitas
            berita, confidence score, dan rekomendasi artikel dari sumber
            terpercaya.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-bold text-lg mb-3">Project Information</h3>

          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-black">Tim:</span> CC26-PSU395
            </p>

            <p>
              <span className="font-semibold text-black">Tema:</span>{" "}
              Sustainable Living & Responsible Consumption
            </p>

            <p>
              <span className="font-semibold text-black">Powered by:</span>{" "}
              Coding Camp 2026 x DBS Foundation
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 my-6" />

      {/* BOTTOM */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-3
          text-sm
          text-gray-500
        "
      >
        <p>© 2026 AI Hoax Detection System. All rights reserved.</p>

        <p>Developed by Team CC26-PSU395</p>
      </div>
    </footer>
  );
}

export default Footer;
