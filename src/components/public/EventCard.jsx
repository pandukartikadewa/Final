import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function EventCard({ event }) {
  return (
    <Card className="h-full overflow-hidden">

      {/* IMAGE — LANGSUNG DI CARD */}
      <div className="-mt-6">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-t-xl"
        />
      </div>

      {/* CONTENT */}
      <CardContent className="flex flex-col">
        <Badge variant="secondary" className="w-fit mb-2">
          {event.category}
        </Badge>

        <h2 className="text-lg font-semibold">
          {event.title}
        </h2>

        <p className="text-sm text-gray-500">
          {event.location}
        </p>

        <p className="font-bold text-green-600 mt-1">
          Rp {event.price.toLocaleString("id-ID")}
        </p>

        <div className="mt-auto pt-4">
          <Button asChild className="w-full">
            <Link to={`/event/${event.id}`}>
              Lihat Detail
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
