function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-sm text-gray-600">{event.description}</p>
      <p className="text-xs text-gray-500 mt-2">
        📍 {event.location} | 📅 {new Date(event.date).toLocaleDateString()}
      </p>
    </div>
  );
}

export default EventCard;
