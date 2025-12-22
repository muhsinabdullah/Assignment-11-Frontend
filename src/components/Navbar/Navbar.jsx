import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [color, setColor] = useState('#00224D');
  const navigate = useNavigate();

  const signOut = () => {
    logout()
      .then(() => {
        toast.success('Logout successful');
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
    setColor(theme === 'dark' ? "#ffff" : "#00224D");
  }, [theme]);

  const handleThemeToggle = (e) => setTheme(e.target.checked ? 'dark' : 'light');
  const handleHamburger = () => setHamburger(!hamburger);

  const links = (
    <>
      <li><NavLink onClick={handleHamburger} to="/" style={({ isActive }) => ({ color: isActive ? "#FF204E" : color, fontSize: '18px', background: "transparent" })}>Home</NavLink></li>
      <li><NavLink onClick={handleHamburger} to="/search" style={({ isActive }) => ({ color: isActive ? "#FF204E" : color, fontSize: '18px', background: "transparent" })}>Search</NavLink></li>
      <li><NavLink onClick={handleHamburger} to="/donate" style={({ isActive }) => ({ color: isActive ? "#FF204E" : color, fontSize: '18px', background: "transparent" })}>Donate</NavLink></li>
    </>
  );

  return (
    <div>
      <nav className={`bg-[#eee] ${theme === 'dark' && 'dark:bg-[#313b47]'} shadow-lg`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="w-16" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FF204E]">BloodBridge</span>
          </Link>

          <div className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            {!user &&
              <div className="md:block space-x-3 gap-4 hidden">
                <Link to="/login">
                  <button type="button" className="text-[#fff] bg-[#00224D] hover:bg-[#ffd310] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Login</button>
                </Link>
              </div>
            }

            {user &&
              <div className="flex items-center space-x-3 gap-4">
                <div className="dropdown z-50 dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="m-1">
                    <div className="tooltip tooltip-left avatar cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content={''}>
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li>
                      <button className="md:flex text-white bg-[#FF6D60] hover:bg-[#ff988f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                        onClick={signOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            }

            <div className="md:pl-8 md:block hidden">
              <label className="cursor-pointer grid place-items-center">
                <input onChange={handleThemeToggle} checked={theme === 'dark'} type="checkbox" className="toggle theme-controller bg-base-content" />
              </label>
            </div>

            <button onClick={handleHamburger} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className="navbar items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul className="menu menu-horizontal flex flex-col font-medium lg:p-0 border rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
              {links}
            </ul>
          </div>
        </div>

        <div className={`lg:hidden fixed p-6 z-[99] duration-500 md:w-[50%] w-[70%] h-screen top-0 text-white bg-[#eee] ${hamburger ? "right-0" : "right-[-350px] md:right-[-700px]"}`}>
          <button onClick={handleHamburger} className="text-2xl text-[#2D3250]"><IoMdClose /></button>
          <ul className="font-semibold space-y-3 mt-6">{links}</ul>
          {!user &&
            <div className="md:hidden flex gap-4 mt-6">
              <Link onClick={handleHamburger} to="/login">
                <button type="button" className="text-[#111] bg-[#FDDE55] hover:bg-[#FDDE55] px-2 py-1 rounded-lg font-semibold">Login</button>
              </Link>
            </div>
          }
        </div>
      </nav>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
