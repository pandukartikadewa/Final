export default function FormData() {
  return (
    <form className="bg-white p-6 rounded shadow space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Event Name
        </label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          placeholder="Event name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Category
        </label>
        <select className="w-full border px-3 py-2 rounded">
          <option>Music</option>
          <option>Seminar</option>
          <option>Workshop</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Date
        </label>
        <input
          type="date"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Price
        </label>
        <input
          type="number"
          className="w-full border px-3 py-2 rounded"
          placeholder="Price"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Image URL
        </label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          placeholder="https://..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          rows="4"
          className="w-full border px-3 py-2 rounded"
          placeholder="Event description"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Event
      </button>
    </form>
  );
}
