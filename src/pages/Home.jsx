
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import HeroSection from "../components/public/HeroSection";
import EventCard from "../components/public/EventCard";
import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";

import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";


export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   startHomeAnimation(1500);
  }, []);
  useEffect(() => {
  getEvents()
    .then((data) => {
      setEvents(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Gagal fetch events:", error);
      setLoading(false);
    });
  }, []);


  // 🔍 LOGIC FILTER
  const filteredEvents = events.filter((event) => {
    const matchSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || event.category === category;

    return matchSearch && matchCategory;
  });


  return (
    <>
      <Navbar />
      <HeroSection />

      {/* SEARCH & FILTER */}
      <div className="max-w-7xl mx-auto p-6 flex justify-center gap-4 flex-col md:flex-row">
        <Input
          placeholder="Cari event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-1/2"
        />

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="md:w-60">
            <SelectValue placeholder="Pilih kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Seminar">Seminar</SelectItem>
            <SelectItem value="Workshop">Festival</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* EVENT LIST */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="col-span-full text-center">Loading event...</p>
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Event tidak ditemukan
          </p>
        )}
      </div>


      <Footer />
    </>
  );
}
