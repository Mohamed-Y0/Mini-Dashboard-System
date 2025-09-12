function Button({ handleClick, children }) {
  return (
    <button
      className="bg-primary flex cursor-pointer items-center gap-2.5 rounded-lg px-5 py-2.5 text-black shadow-lg ring ring-neutral-400"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
