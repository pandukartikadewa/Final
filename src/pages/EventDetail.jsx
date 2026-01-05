import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import { getEventById } from "../services/eventService";
import { Button } from "../components/ui/button";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEventById(id)
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal fetch detail event:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!event) {
    return <p className="text-center mt-10">Event tidak ditemukan</p>;
  }

    const handleCheckout = () => {
    const message = `Halo, saya ingin memesan tiket event ${event.title}`;
    window.open(
      `https://wa.me/6283109731796?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">
          {event.title}
        </h1>

        <p className="text-gray-600 mb-4">
          {event.description}
        </p>

        <p><strong>Kategori:</strong> {event.category}</p>
        <p><strong>Tanggal:</strong> {event.date}</p>
        <p><strong>Lokasi:</strong> {event.location}</p>
        <p className="font-semibold text-lg mt-2">
          Harga: Rp {event.price.toLocaleString()}
        </p>

            <Button
              onClick={handleCheckout}
              className="mt-6 bg-green-700">
              Beli Tiket
            </Button>
      </div>

      <Footer />
    </>
  );

}
