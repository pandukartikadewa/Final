import { useParams } from "react-router-dom";
import FormData from "../../components/admin/FormData";

export default function EditEvent() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Edit Event #{id}
      </h1>
      <FormData />
    </div>
  );
}
