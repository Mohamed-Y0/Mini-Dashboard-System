import { NavLink } from "react-router-dom";

function ButtonLink({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex h-fit items-center gap-5 px-5 py-2 text-2xl font-semibold tracking-wide text-black duration-200 ${isActive ? "bg-blue-400 hover:bg-blue-500" : "hover:bg-blue-300"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default ButtonLink;
