import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import { useState } from "react";

const ADMIN_WA = "6283109731796"; 

export default function Kontak() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Halo Admin TixApps

Nama: ${form.nama}
Email: ${form.email}

Pesan:
${form.pesan}
    `;

    const whatsappURL = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-6">
          Hubungi Kami
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Kirim pesan langsung ke WhatsApp kami
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            required
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded"
          />

          <textarea
            name="pesan"
            placeholder="Tulis pesan..."
            required
            rows={4}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded transition"
          >
            Kirim
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
