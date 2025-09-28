"use client";
import LogoutButton from "../components/LogoutButton";
import { useState, useEffect } from "react";

export default function TripsPage() {
  const [trips, setTrips] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [editingTripId, setEditingTripId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    fetch("/api/trips")
      .then((res) => res.json())
      .then(setTrips);
  }, []);

  const addTrip = async () => {
    const res = await fetch("/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, date }),
    });
    const newTrip = await res.json();
    setTrips([...trips, newTrip]);
    setTitle("");
    setDescription("");
    setDate("");
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this trip?");
    if (!confirmDelete) return;

    await fetch(`/api/trips/${id}`, { method: "DELETE" });
    setTrips(trips.filter((trip) => trip._id !== id));
  };

  const startEdit = (trip: any) => {
    setEditingTripId(trip._id);
    setEditTitle(trip.title);
    setEditDescription(trip.description);
    setEditDate(trip.date.split("T")[0]);
  };

  const saveEdit = async () => {
    if (!editingTripId) return;

    const res = await fetch(`/api/trips/${editingTripId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: editTitle,
        description: editDescription,
        date: editDate,
      }),
    });

    const updatedTrip = await res.json();
    setTrips(trips.map((t) => (t._id === updatedTrip._id ? updatedTrip : t)));

    setEditingTripId(null);
    setEditTitle("");
    setEditDescription("");
    setEditDate("");
  };

  const cancelEdit = () => {
    setEditingTripId(null);
    setEditTitle("");
    setEditDescription("");
    setEditDate("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      {/* Header with Logout */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Your Trips</h2>
        <LogoutButton />
      </div>

      {/* Add new trip */}
      <div className="mb-4 flex flex-wrap gap-2">
        <input
          className="border p-2 rounded w-60"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 rounded w-60"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="border p-2 rounded w-60"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          onClick={addTrip}
        >
          Add Trip
        </button>
      </div>

      {/* Trips list */}
      <ul className="mt-4 space-y-2">
        {trips.map((trip) => (
          <li key={trip._id} className="bg-white border p-2 rounded shadow-md">
            {editingTripId === trip._id ? (
              <div className="flex flex-col gap-2">
                <input
                  className="border p-2 rounded"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  className="border p-2 rounded"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  className="border p-2 rounded"
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>
                  <strong>{trip.title}</strong> - {trip.description} (
                  {new Date(trip.date).toDateString()})
                </span>
                <div className="flex gap-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => startEdit(trip)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(trip._id)}
                  >
                    Delete
                  </button>
                </div>  
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
