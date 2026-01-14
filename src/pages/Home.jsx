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
  const [sort, setSort] = useState("default");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
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

  // 🔃 SORT
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sort === "name-asc") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <>
      <Navbar />
      <HeroSection />

{/* SEARCH FILTER SORT */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-8">
    <div className="bg-gray-50 border rounded-xl p-5 shadow-sm flex flex-col md:flex-row gap-4">
      
      <Input
        placeholder="Cari event..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white"
      />

      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua Kategori</SelectItem>
          <SelectItem value="Music">Music</SelectItem>
          <SelectItem value="Seminar">Seminar</SelectItem>
          <SelectItem value="Workshop">Workshop</SelectItem>
        </SelectContent>
      </Select>

      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Urutkan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="price-asc">Harga Termurah</SelectItem>
          <SelectItem value="price-desc">Harga Termahal</SelectItem>
          <SelectItem value="date-asc">Tanggal Terdekat</SelectItem>
          <SelectItem value="name-asc">Nama A–Z</SelectItem>
        </SelectContent>
      </Select>

    </div>
  </div>
</section>

      {/* EVENT LIST */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="col-span-full text-center">Loading event...</p>
        ) : sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
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


