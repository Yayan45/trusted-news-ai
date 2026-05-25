function ActionButton({
  children,
  type = "button",
  variant = "primary",
  onClick,
}) {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${variants[variant]}

        text-white
        font-medium

        rounded-xl

        px-5
        py-2.5

        sm:px-6
        sm:py-3

        transition-all
        duration-200

        active:scale-[0.98]

        flex
        items-center
        justify-center

        w-full
        lg:w-auto
      `}
    >
      {children}
    </button>
  );
}

export default ActionButton;
