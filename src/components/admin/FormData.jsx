import { useState, useEffect } from "react";


export default function FormData({ initialData = null, onSubmit }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Default empty state
  const defaultForm = {
    title: "",
    category: "",
    date: "",
    price: "",
    location: "",
    image: "",
    description: "",
  };

  const [form, setForm] = useState(defaultForm);

  // Update form state when initialData changes (important for Edit mode)
  useEffect(() => {
    if (initialData) {
      setForm((prev) => ({
        ...prev,
        ...initialData,
        // Ensure date is formatted correctly for input type="date" if needed
        // Assuming initialData.date is YYYY-MM-DD or comparable
        date: initialData.date ? initialData.date.split("T")[0] : "",
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.category || !form.date || !form.price) {
      alert("Semua field wajib diisi");
      return;
    }

    setLoading(true);

    try {
      await onSubmit(form);
      setSuccess(true);
      if (!initialData) {
        setForm(defaultForm); // Reset form only on add
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Music",
    "Art",
    "Sports",
    "Technology",
    "Education",
    "Other"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Price</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded h-32"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white transition-all duration-300
       ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
     `}
      >
        {loading ? "Menyimpan..." : "Simpan Event"}
      </button>
    </form>
  );
}
