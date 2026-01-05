import { Link } from "react-router-dom";

export default function DataTable({ events }) {
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
              {event.name}
            </td>

            <td className="border p-2 text-center">
              Rp {event.price.toLocaleString()}
            </td>

            <td className="border p-2 text-center">
              <Link
                to={`/admin/events/edit/${event.id}`}
                className="inline-block bg-red-600 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
