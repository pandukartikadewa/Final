import { Link } from "react-router-dom";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Halaman tidak ditemukan
        </p>
        <p className="text-gray-500 mb-8">
          Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        <Button asChild>
          <Link to="/">Kembali ke Beranda</Link>
        </Button>
      </div>

      <Footer />
    </>
  );
}
