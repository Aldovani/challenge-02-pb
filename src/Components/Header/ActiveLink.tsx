import { LinkProps, NavLink } from "react-router-dom";

type ActiveLinkProps = { children: React.ReactNode } & LinkProps;
export function ActiveLink({ children, to }: ActiveLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-primary-avacado "
          : "text-primary-lunar-green hover:text-primary-avacado"
      }
    >
      {children}
    </NavLink>
  );
}
