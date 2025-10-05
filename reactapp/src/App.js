import React from 'react';
import './App.css';
import EventList from './components/EventList';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Event Hosting Platform</h1>
      </header>
      <main>
        <EventList />
        <CalendarView events={[]} />
      </main>
    </div>
  );
}

export default App;