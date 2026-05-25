import { themeColor } from "../../../utils/theme";

function VerdictSection({ headline, verdict, confidence, theme }) {
  const selectedTheme = themeColor[theme] || themeColor.orange;

  return (
    <div
      className="border-l border-r px-5 py-1"
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      {/* HEADLINE */}
      <div className="mb-8">
        <p
          className="text-xs"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Headline yang dicek
        </p>

        <h1
          className="
            text-2xl
            font-bold
            leading-tight
            mt-1
          "
          style={{
            color: "var(--text-primary)",
          }}
        >
          {headline}
        </h1>
      </div>

      {/* VERDICT */}
      <div>
        <p
          className="text-xs uppercase"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          VERDICT
        </p>

        <h1
          className="
            text-[22px]
            font-bold
            mt-2
            leading-tight
          "
          style={{
            color: selectedTheme.text,
          }}
        >
          {verdict}
        </h1>

        {/* CONFIDENCE */}
        <div className="flex items-center gap-3 mt-3">
          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Keyakinan
          </p>

          <div
            className="
              px-4
              py-0.75
              rounded-full
              text-xs
              font-semibold
            "
            style={{
              backgroundColor: selectedTheme.bg,
              color: selectedTheme.text,
            }}
          >
            {confidence}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerdictSection;
