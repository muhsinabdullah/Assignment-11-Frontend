import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const color = "#374151"; // default text color

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="LifeBlood Logo" className="w-12 h-12" />
              <h2 className="text-2xl font-bold text-red-600">
                LifeBlood
              </h2>
            </div>
            <p className="text-base-content/70">
              LifeBlood is a blood donation platform dedicated to saving lives
              by connecting donors with those in urgent need.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#FF204E" : color,
                    fontSize: "18px",
                    background: "transparent",
                  })}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/search"
                  style={({ isActive }) => ({
                    color: isActive ? "#FF204E" : color,
                    fontSize: "18px",
                    background: "transparent",
                  })}
                >
                  Search Donors
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/donate"
                  style={({ isActive }) => ({
                    color: isActive ? "#FF204E" : color,
                    fontSize: "18px",
                    background: "transparent",
                  })}
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-base-content/70 mb-2">
              📞 Emergency Hotline: <br />
              <span className="font-medium">+880 1234 567 890</span>
            </p>
            <p className="text-base-content/70 mb-2">
              📧 Email: <br />
              support@lifeblood.org
            </p>
            <p className="text-base-content/70">
              📍 Sylhet, Bangladesh
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-base-300 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} LifeBlood. All rights reserved.  
          <br />
          Donate blood, save lives ❤️
        </div>

      </div>
    </footer>
  );
};

export default Footer;
