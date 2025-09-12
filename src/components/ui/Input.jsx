function Input({
  id,
  label,
  type = "text",
  register,
  rules,
  disabled = false,
  error,
}) {
  return (
    <div className="container grid grid-cols-2 items-center font-semibold tracking-wide">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <div className="flex w-full flex-col">
        <input
          id={id}
          type={type}
          placeholder={label}
          disabled={disabled}
          {...(register ? register(id, rules) : {})}
          className={`${!disabled ? "bg-white" : "bg-neutral-100 text-gray-400"} rounded-lg border border-neutral-300 bg-neutral-200 px-5 py-2.5 text-neutral-700`}
        />
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}

export default Input;
