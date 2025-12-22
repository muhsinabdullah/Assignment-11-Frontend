import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaTint,
  FaHandHoldingMedical,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Aside = () => {
  const { role } = useContext(AuthContext)

  const handleLogout = () => {
    signOut(auth)
  }


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
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        <NavLink
          to={role === 'admin' ? "/admin/dashboard" : "/dashboard"}
          className={linkClass}
        >
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/my-request" className={linkClass}>
          <FaRegQuestionCircle /> My Requests
        </NavLink>

        {
          role == 'donar' && (<NavLink to="/dashboard/add-request" className={linkClass}>
            <FaHandHoldingMedical /> Blood Requests
          </NavLink>)
        }

        {
          role == 'admin' && (<NavLink to="/dashboard/all-users" className={linkClass}>
            <FaUsers /> All Users
          </NavLink>)
        }
      </nav>

      <div className="p-4 border-t mt-auto">
        <NavLink to='/' className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-blue-600 hover:bg-blue-50">
          <FaHome /> Home
        </NavLink>
      </div>
      <div className="p-4 border-t mt-auto">
        <NavLink onClick={handleLogout} to='/' className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-red-600 hover:bg-red-100">
          <FaSignOutAlt /> Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
