import { useEffect, useState } from "react";
import { fetchEvents } from "../utils/api";
import EventCard from "../components/EventCard";
import GridLayout from "../utils/GridLayout";

function Home() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((err) => setError("Could not load events"));
  }, []);

  // uses GridLayout.js util to display events in a grid format
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      {error && <p className="text-red-600">{error}</p>}

      <GridLayout>
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </GridLayout>
    </div>
  );
}

export default Home;
