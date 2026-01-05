import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export default function Kontak() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pesan dikirim");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Hubungi Kami</h1>
          <p className="text-gray-500 mt-2">
            Ada pertanyaan atau butuh bantuan? Silakan hubungi kami.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* INFO KONTAK */}
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Informasi Kontak</h2>

              <p><strong>Email:</strong> support@tixapps.com</p>
              <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
              <p><strong>Alamat:</strong> Yogyakarta, Indonesia</p>

              <p className="text-sm text-gray-500">
                Kami siap membantu Anda setiap hari kerja.
              </p>
            </CardContent>
          </Card>

          {/* FORM KONTAK */}
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">
                Kirim Pesan
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <Label>Nama</Label>
                  <Input placeholder="Nama lengkap" />
                </div>

                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input type="email" placeholder="email@example.com" />
                </div>

                <div className="space-y-1">
                  <Label>Pesan</Label>
                  <Textarea
                    placeholder="Tulis pesan Anda..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </>
  );
}
