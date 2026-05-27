function TeamSection() {
  const teams = [
    {
      name: "ALVIN GRAND PUTRA",
      role: "Backend Developer",
      image: "/team/member1.png",
      contributions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },

    {
      name: "Yayan Rif'an Awaludin",
      role: "Frontend Developer",
      image: "/images/yayan.jpeg",
      contributions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },

    {
      name: "Johana Oktavia Ramadhani",
      role: "Data Scientist",
      image: "/team/member3.png",
      contributions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },

    {
      name: "Desvita Maharani",
      role: "Data Scientist",
      image: "/team/member4.png",
      contributions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },

    {
      name: "Anugrah Syahputra Sibarani",
      role: "AI Engineer",
      image: "/team/member5.png",
      contributions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },

    {
      name: "Raden Fitzal Bintang Nugraha Wiradikoesoema",
      role: "AI Engineer",
      image: "/team/member6.png",
      contributions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },
  ];

  return (
    <section
      id="tim"
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
          -bottom-37.5
          -right-37.5

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
              gap-2

              px-5
              py-2

              rounded-full

              border

              text-sm
              font-medium
            "
            style={{
              borderColor: "rgba(34,211,238,0.2)",
              background:
                "linear-gradient(to right, rgba(59,130,246,0.08), rgba(34,211,238,0.08))",
              color: "#22d3ee",
            }}
          >
            👨‍💻 Tim Pengembang
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
            Tim Pengembang
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
            Tim capstone CC26-PSU395 terdiri dari Full-Stack Developer, Data
            Scientist, dan AI Engineer yang berkolaborasi membangun sistem
            deteksi headline berita hoax dan rekomendasi sumber berita
            terpercaya berbasis Artificial Intelligence.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-8
          "
        >
          {teams.map((team, index) => (
            <div
              key={index}
              className="
                group

                relative

                rounded-4xl

                border

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
                  background: "linear-gradient(to right, #3B82F6, #06B6D4)",
                }}
              />

              {/* IMAGE */}
              <div className="relative h-105 overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-6">
                {/* ROLE */}
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
                  {team.role}
                </p>

                {/* NAME */}
                <h2
                  className="
                    text-2xl
                    font-bold

                    mt-3
                    leading-snug
                  "
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {team.name}
                </h2>

                {/* CONTRIBUTIONS */}
                <div className="mt-5 space-y-3">
                  {team.contributions.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <div
                        className="
                          w-2
                          h-2

                          rounded-full

                          mt-2
                          shrink-0
                        "
                        style={{
                          background:
                            "linear-gradient(to right, #3B82F6, #06B6D4)",
                        }}
                      />

                      <p
                        className="
                          text-sm
                          leading-7
                        "
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* LINE */}
                <div
                  className="
                    w-16
                    h-1

                    rounded-full

                    mt-7

                    bg-linear-to-r
                    from-blue-500
                    to-cyan-400
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
