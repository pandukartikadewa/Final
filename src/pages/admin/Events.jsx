import { useEffect, useState } from "react";
import { getEvents } from "../../services/eventService";
import DataTable from "../../components/admin/DataTable";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
        setError(null); // مهم جدًا
        setLoading(false);
      })
      .catch(() => {
        setError("MockAPI sedang tidak merespons, silakan refresh halaman");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Daftar Event</h1>

      {error && events.length === 0 &&(
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <DataTable
        events={events}
        onDelete={(id) =>
          setEvents((prev) => prev.filter((event) => event.id !== id))
        }
      />
    </div>
  );
}
