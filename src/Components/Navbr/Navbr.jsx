import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LockOpenIcon from '@mui/icons-material/LockOpen';
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const menuItems = token
    ? [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/profile", label: "Profile" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/Calculators", label: "Calculators" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
      ];

  return (
    <nav className="bg-yellow-50 border-b border-orange-200 shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-orange-600 tracking-wide">
          Divy<span className="text-yellow-500">Numerology</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-lg px-4 py-2 font-medium text-gray-800 hover:text-orange-600 transition-colors hover:bg-orange-100 rounded-xl"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to={token ? "/profile" : "/login"}
            className="ml-4 inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl font-semibold shadow-sm transition"
          >
            <LockOpenIcon/>
            <span>{token ? user?.userName : "Login"}</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-orange-700" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 pt-4 pb-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-lg text-gray-800 hover:text-orange-600 transition-colors"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={token ? "/profile" : "/login"}
              className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl font-semibold shadow transition"
              onClick={closeMobileMenu}
            >
              {/* <img src="/user.svg" alt="User" className="w-5 h-5" /> */}
              <LockOpenIcon/>
              <span>{token ? user?.userName : "Login"}</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
