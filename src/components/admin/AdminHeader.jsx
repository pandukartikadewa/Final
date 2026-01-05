import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">Admin Panel</h1>

      <nav className="flex gap-6">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/events"
          end
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/admin/events/add"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Add Event
        </NavLink>
      </nav>
    </header>
  );
}
