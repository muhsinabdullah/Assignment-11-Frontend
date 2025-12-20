import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaTint,
  FaHandHoldingMedical,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Aside = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-white"
      : "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-base-200";

  return (
    <aside className="w-64 min-h-screen bg-base-100 border-r">
      {/* Logo / Title */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-primary">
          🩸 Blood Admin
        </h1>
        <p className="text-sm text-gray-500">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/manage-request" className={linkClass}>
          <FaUsers /> Donor Management
        </NavLink>

        <NavLink to="/dashboard/add-request" className={linkClass}>
          <FaHandHoldingMedical /> Blood Requests
        </NavLink>

        <NavLink to="/admin/blood-stock" className={linkClass}>
          <FaTint /> Blood Stock
        </NavLink>

        <NavLink to="/admin/reports" className={linkClass}>
          <FaChartBar /> Reports
        </NavLink>

        <NavLink to="/admin/settings" className={linkClass}>
          <FaCog /> Settings
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t mt-auto">
        <button className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-red-600 hover:bg-red-50">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Aside;
