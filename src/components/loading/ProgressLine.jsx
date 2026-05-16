function ProgressLine({ progress }) {
  return (
    <div className="flex flex-col items-center">
      {/* TOP DOT */}
      <div
        className={`
          w-4
          h-4
          rounded-full
          z-10
          ${progress >= 1 ? "bg-blue-500" : "bg-gray-400"}
        `}
      />

      {/* LINE */}
      <div className="relative w-1 h-32 bg-gray-300">
        {/* ACTIVE LINE */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            bg-blue-500
            transition-all
            duration-500
          "
          style={{
            height: progress === 1 ? "50%" : progress >= 2 ? "100%" : "0%",
          }}
        />
      </div>

      {/* BOTTOM DOT */}
      <div
        className={`
          w-4
          h-4
          rounded-full
          z-10
          transition-all
          duration-500
          ${progress >= 2 ? "bg-blue-500" : "bg-gray-400"}
        `}
      />
    </div>
  );
}

export default ProgressLine;
