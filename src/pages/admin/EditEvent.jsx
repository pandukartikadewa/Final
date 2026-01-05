import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById, updateEvent } from "../../services/eventService";
import FormData from "../../components/admin/FormData";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEventById(id)
      .then((data) => {
        setInitialData(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Gagal mengambil data event");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Edit Event</h1>
      <FormData
        initialData={initialData}
        onSubmit={(data) => updateEvent(id, data).then(() => navigate("/admin/events"))}
      />
    </div>
  );
}
