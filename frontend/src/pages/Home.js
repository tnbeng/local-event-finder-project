import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from '../components/Event';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('/api/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
