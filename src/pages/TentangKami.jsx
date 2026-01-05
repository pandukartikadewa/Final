import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";

import { Card, CardContent } from "../components/ui/card";

export default function TentangKami() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Tentang Kami</h1>
          <p className="text-gray-500 mt-2">
            Mengenal lebih dekat platform TixApps
          </p>
        </div>

        {/* DESKRIPSI */}
        <Card className="mb-8">
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Apa itu TixApps?</h2>
            <p className="text-gray-700 leading-relaxed">
              TixApps adalah platform pemesanan tiket event yang membantu pengguna menemukan dan membeli tiket konser, seminar, dan
              festival dengan mudah dan cepat. Aplikasi ini dikembangkan sebagai proyek pembelajaran untuk
              menerapkan konsep React, React Router, dan Shadcn UI dalam
              membangun aplikasi web modern.
            </p>
          </CardContent>
        </Card>

        {/* VISI & MISI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="space-y-3">
              <h2 className="text-xl font-semibold">Visi</h2>
              <p className="text-gray-700">
                Menjadi platform pemesanan tiket event yang mudah digunakan
                dan dipercaya oleh pengguna.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3">
              <h2 className="text-xl font-semibold">Misi</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Menyediakan informasi event yang lengkap</li>
                <li>Memudahkan proses pencarian dan pemesanan tiket</li>
                <li>Menghadirkan pengalaman pengguna yang nyaman</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* TIM (OPSIONAL, NILAI PLUS) */}
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Tim Pengembang</h2>
            <p className="text-gray-700">
              Aplikasi ini dikembangkan oleh tim mahasiswa sebagai bagian
              dari tugas Final Project mata kuliah Teknologi Web.
            </p>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Pandu Kartika Dewa (Frontend User)</li>
              <li>Mohammed Rasheed (Frontend Admin)</li>
              <li>M. Raihan Najwa (Logic & API Integrator)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </>
  );
}
