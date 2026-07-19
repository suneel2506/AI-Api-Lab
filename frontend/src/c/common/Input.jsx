function Input({
    label,
    placeholder,
    value,
    disabled,
    onChange,
    type = "text",
  }) {
    return (
      <div className="space-y-2">
  
        {label && (
          <label className="text-sm text-slate-300">
            {label}
          </label>
        )}
  
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-4
            py-3
            outline-none
            transition
            focus:border-cyan-400
          "
        />
  
      </div>
    );
  }
  
  export default Input;