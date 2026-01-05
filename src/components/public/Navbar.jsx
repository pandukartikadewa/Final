import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      {/* LOGO */}
      <h1 className="text-xl font-bold">
        <Link to="/">TixApps</Link>
      </h1>

      {/* MENU */}
      <ul className="flex space-x-6 text-sm">
        <li>
          <Link to="/login" className="hover:text-green-400">
            Login
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Kontak" className="hover:text-green-400">
            Kontak
          </Link>
        </li>
        <li>
          <Link to="/tentang-kami" className="hover:text-green-400">
            Tentang Kami
          </Link>
        </li>
      </ul>
    </nav>
  );
}
