import DataTable from "../../components/admin/DataTable";

export default function Events() {
  const events = [
    { id: 1, name: "Jazz Gunung", price: 750000 },
    { id: 2, name: "Rock Fest", price: 500000 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Events</h1>
      <DataTable events={events} />
    </div>
  );
}
