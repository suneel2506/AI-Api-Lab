function Card({
    children,
    title,
    className = "",
  }) {
    return (
      <div
        className={`
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          p-6
          shadow-lg
          ${className}
        `}
      >
        {title && (
          <h2 className="mb-5 text-xl font-semibold">
            {title}
          </h2>
        )}
  
        {children}
      </div>
    );
  }
  
  export default Card;