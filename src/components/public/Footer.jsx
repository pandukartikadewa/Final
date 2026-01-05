import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            TixApps
          </h2>
          <p className="text-sm">
            Platform pemesanan tiket event seperti konser, seminar,
            dan festival dengan mudah dan cepat.
          </p>
        </div>

        {/* MENU NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Menu
          </h3>
          <ul className="space-y-2 text-sm">
             <li>
              <Link to="/login" className="hover:text-green-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Kontak" className="hover:text-white">
                Kontak
              </Link>
            </li>
            <li>
              <Link to="/tentang-kami" className="hover:text-white">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Kontak
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@tixapps.com</li>
            <li>WhatsApp: +62 812-3456-7890</li>
            <li>Yogyakarta, Indonesia</li>
          </ul>
        </div>
        
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 TixApps. All rights reserved.
      </div>

    </footer>
  );
}
