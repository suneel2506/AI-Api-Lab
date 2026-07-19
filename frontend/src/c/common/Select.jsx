function Select({
    label,
    value,
    onChange,
    disabled,
    options = [],
  }) {
    return (
      <div className="space-y-2">
  
        {label && (
          <label className="text-sm text-slate-300">
            {label}
          </label>
        )}
  
        <select
          value={value}
          onChange={onChange}
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
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
  
      </div>
    );
  }
  
  export default Select;