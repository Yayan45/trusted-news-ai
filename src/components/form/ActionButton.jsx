function ActionButton({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  // VARIANT STYLE
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",

    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-xl
        font-medium
        transition
        duration-200
        shadow-sm
        whitespace-nowrap
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default ActionButton;
