import { useNavigate } from "react-router-dom";
import FormData from "../../components/admin/FormData";
import { createEvent } from "../../services/eventService";

export default function AddEvent() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await createEvent(data);
      // Wait a bit or show toggle/toast if needed, then navigate
      navigate("/admin/events");
    } catch (error) {
      console.error("Failed to create event:", error);
      alert("Failed to create event. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Add Event</h1>
      <FormData onSubmit={handleCreate} />
    </div>
  );
}
