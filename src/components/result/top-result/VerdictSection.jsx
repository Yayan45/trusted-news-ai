import { themeColor } from "../../../utils/theme";

function VerdictSection({ headline, verdict, confidence, theme }) {
  const selectedTheme = themeColor[theme] || themeColor.orange;

  return (
    <div className="border-l border-r border-gray-300 px-5 py-1">
      {/* HEADLINE */}
      <div className="mb-8">
        <p className="text-xs text-gray-500">Headline yang dicek</p>

        <h1
          className="
            text-2xl
            font-bold
            leading-tight
            mt-1
          "
        >
          {headline}
        </h1>
      </div>

      {/* VERDICT */}
      <div>
        <p className="text-xs uppercase text-gray-500">VERDICT</p>

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
          <p className="text-sm text-gray-600">Keyakinan</p>

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
