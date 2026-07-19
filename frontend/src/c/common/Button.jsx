function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    className = "",
  }) {
    const variants = {
      primary:
        "bg-cyan-500 hover:bg-cyan-400 text-black",
  
      secondary:
        "bg-slate-700 hover:bg-slate-600 text-white",
  
      danger:
        "bg-red-600 hover:bg-red-500 text-white",
    };
  
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`
          w-full
          rounded-xl
          px-5
          py-3
          font-semibold
          transition-all
          duration-200
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${variants[variant]}
          ${className} || "w-full"
        `}
      >
        {children}
      </button>
    );
  }
  
  export default Button;