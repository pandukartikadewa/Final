import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents, updateEvent } from "../../services/eventService";
import { getUsers } from "../../services/userService";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Events and Users in parallel
    Promise.all([getEvents(), getUsers()])
      .then(([eventsData, usersData]) => {
        setEvents(eventsData);
        setUsers(usersData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleStatusToggle = async (event) => {
    const newStatus = event.status === 'inactive' ? 'active' : 'inactive';
    try {
      // Optimistic update
      const updatedEvents = events.map(e =>
        e.id === event.id ? { ...e, status: newStatus } : e
      );
      setEvents(updatedEvents);

      await updateEvent(event.id, { status: newStatus });
    } catch (error) {
      console.error("Failed to update status", error);
      // Revert on failure
      setEvents(events);
      alert("Failed to update status");
    }
  };

  if (loading) return <div className="p-8 text-center">Loading Dashboard...</div>;

  // CALCULATE STATS
  const totalEvents = events.length;
  const totalRevenue = events.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const activeUsers = users.length; // Real user count from API

  // Get recent 5 events (assuming API returns them in some order, or just take first 5)
  // Ideally sort by ID desc if ID is auto-increment, or by date.
  // We'll just take the slice for now.
  const recentEvents = events.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {/* STATS CARDS */}
      <div className="grid gap-4 md:grid-cols-3">

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEvents}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Potential Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              Rp {totalRevenue.toLocaleString("id-ID")}
            </div>
            <p className="text-xs text-muted-foreground">+10% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeUsers}</div>
            <p className="text-xs text-muted-foreground">+1 since last month</p>
          </CardContent>
        </Card>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Events Created</h3>
        {recentEvents.length === 0 ? (
          <p className="text-gray-500">No events found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Event Name</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentEvents.map((event) => (
                  <tr key={event.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {event.title}
                    </td>

                    <td className="px-6 py-4">{event.category}</td>
                    <td className="px-6 py-4">Rp {Number(event.price).toLocaleString("id-ID")}</td>
                    <td className={`px-6 py-4 font-semibold ${event.status === 'inactive' ? 'text-red-600' : 'text-green-600'}`}>
                      {event.status === 'inactive' ? 'Inactive' : 'Active'}
                    </td>
                    <td className="px-6 py-4">
                      <Button
                        variant={event.status === 'inactive' ? "default" : "destructive"}
                        size="sm"
                        onClick={() => handleStatusToggle(event)}
                      >
                        {event.status === 'inactive' ? 'Activate' : 'Deactivate'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
