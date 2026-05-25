import "../../../styles/theme.css";

const interpretations = [
  {
    color: "bg-red-500",
    range: "75 - 100%",
    text: "Sangat Mungkin Hoax",
  },

  {
    color: "bg-orange-400",
    range: "55 - 74%",
    text: "Kemungkinan Hoax",
  },

  {
    color: "bg-yellow-400",
    range: "40 - 54%",
    text: "Tidak Pasti (Perlu Verifikasi)",
  },

  {
    color: "bg-blue-500",
    range: "20 - 39%",
    text: "Kemungkinan Benar",
  },

  {
    color: "bg-green-500",
    range: "0 - 19%",
    text: "Sangat Mungkin Benar",
  },
];

function InterpretationLegend() {
  return (
    <div
      className="pl-1"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <h2 className="text-sm font-bold mb-4">Skala Interpretasi Skor Hoax</h2>

      <div className="space-y-3">
        {interpretations.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* COLOR */}
            <div
              className={`
                w-3
                h-3
                rounded-sm
                mt-0.5
                shrink-0
                ${item.color}
              `}
            />

            {/* RANGE */}
            <p
              className="w-20 text-xs font-medium shrink-0"
              style={{
                color: "var(--text-primary)",
              }}
            >
              {item.range}
            </p>

            {/* TEXT */}
            <p
              className="text-xs"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterpretationLegend;
