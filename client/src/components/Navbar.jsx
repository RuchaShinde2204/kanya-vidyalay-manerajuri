import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { schoolInfo } from "../utils/constants";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Events", "/events"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Admission", "/admission"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? "bg-school-green text-white" : "text-slate-700 hover:bg-school-mist"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-school-green text-lg font-bold text-white">KV</div>
          <div>
            <p className="text-sm font-bold leading-tight text-school-ink sm:text-base">{schoolInfo.name}</p>
            <p className="hidden text-xs text-slate-500 sm:block">Manerajuri</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/admin/login" className="btn-secondary ml-2">Admin</NavLink>
        </nav>
        <button className="rounded-md p-2 text-school-ink lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="container-page grid gap-2 border-t border-slate-100 py-3 lg:hidden">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/admin/login" onClick={() => setOpen(false)} className="btn-secondary">Admin</NavLink>
        </nav>
      )}
    </header>
  );
}
