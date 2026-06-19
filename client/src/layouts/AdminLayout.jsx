import { BarChart3, CalendarDays, Images, Inbox, LogOut, Megaphone, School, Users } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const links = [
  ["Dashboard", "/admin/dashboard", BarChart3],
  ["Admissions", "/admin/admissions", Users],
  ["Events", "/admin/events", CalendarDays],
  ["Gallery", "/admin/gallery", Images],
  ["Notices", "/admin/notices", Megaphone],
  ["Contacts", "/admin/contacts", Inbox]
];

export default function AdminLayout() {
  const { logout, admin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white p-4 lg:block">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-school-green text-white"><School size={20} /></div>
          <div>
            <p className="font-bold text-school-ink">Admin Panel</p>
            <p className="text-xs text-slate-500">{admin?.name}</p>
          </div>
        </div>
        <nav className="grid gap-2">
          {links.map(([label, to, Icon]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold ${isActive ? "bg-school-green text-white" : "text-slate-700 hover:bg-school-mist"}`}>
              <Icon size={18} /> {label}
            </NavLink>
          ))}
        </nav>
        <button onClick={handleLogout} className="btn-secondary absolute bottom-4 left-4 right-4"><LogOut size={16} />Logout</button>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white p-4 lg:hidden">
          <div className="flex items-center justify-between">
            <p className="font-bold">Admin Panel</p>
            <button onClick={handleLogout} className="btn-secondary"><LogOut size={16} />Logout</button>
          </div>
          <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {links.map(([label, to, Icon]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold ${isActive ? "bg-school-green text-white" : "bg-slate-100 text-slate-700"}`}>
                <Icon size={16} /> {label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main className="container-page py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
