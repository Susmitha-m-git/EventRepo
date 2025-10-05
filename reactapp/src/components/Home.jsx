import React from 'react';
import EventList from './EventList';
import CalendarView from './CalendarView';

const Home = () => {
  return (
    <div>
      <h1>Virtual Event Hosting Platform</h1>
      <EventList />
      <CalendarView events={[]} />
    </div>
  );
};

export default Home;