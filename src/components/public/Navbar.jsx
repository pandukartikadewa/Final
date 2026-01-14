import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import { Button } from "../ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">

      {/* LOGO */}
      <h1 className="text-xl font-bold">
        <Link to="/">TixApps</Link>
      </h1>

      {/* MENU */}
      <ul className="flex items-center space-x-6 text-sm">
        <li>
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/kontak" className="hover:text-green-400">
            Kontak
          </Link>
        </li>
        <li>
          <Link to="/tentang-kami" className="hover:text-green-400">
            Tentang Kami
          </Link>
        </li>

        {/* AUTH BUTTON */}
        <li>
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-400 font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-green-400">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
