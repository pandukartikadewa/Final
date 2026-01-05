import { Link } from "react-router-dom";
import { deleteEvent } from "../../services/eventService";

export default function DataTable({ events, onDelete }) {
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus event?");
    if (!confirmDelete) return;

    try {
      await deleteEvent(id);
      onDelete(id);
    } catch (error) {
      alert("Gagal menghapus event");
    }
  };

  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2 text-center">Nama</th>
          <th className="border p-2 text-center">Harga</th>
          <th className="border p-2 text-center">Aksi</th>
        </tr>
      </thead>

      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td className="border p-2 text-center">
              {event.title}
            </td>

            <td className="border p-2 text-center">
              Rp {Number(event.price).toLocaleString("id-ID")}
            </td>

            <td className="border p-2 text-center space-x-2">
              <Link
                to={`/admin/events/edit/${event.id}`}
                className="inline-block bg-blue-600 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(event.id)}
                className="inline-block bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
