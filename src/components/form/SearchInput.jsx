function SearchInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        flex-1
        border
        border-gray-300
        rounded-xl
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-blue-200
        text-sm
        sm:text-base
      "
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    />
  );
}

export default SearchInput;
