function ErrorState({ message }) {
  return (
    <div
      className="
        bg-white
        shadow
        rounded-2xl
        p-10
        mt-5
        text-center
      "
    >
      {/* ICON */}
      <div className="text-6xl">⚠️</div>

      {/* TITLE */}
      <h2 className="text-2xl font-bold mt-4">Terjadi Kesalahan</h2>

      {/* MESSAGE */}
      <p className="text-gray-500 mt-3">{message}</p>
    </div>
  );
}

export default ErrorState;
