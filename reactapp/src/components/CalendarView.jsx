import React, { useMemo } from 'react';
import './CalendarView.css';

const CalendarView = ({ events = [] }) => {
  const month = "August 2025";
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  
  const august2025 = [
    [28, 29, 30, 31, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7]
  ];

  const eventDates = useMemo(() => {
    try {
      return events.map(event => {
        const date = new Date(event.dateTime);
        return isNaN(date.getTime()) ? null : date.getDate();
      }).filter(Boolean);
    } catch (error) {
      console.error('Error processing event dates:', error);
      return [];
    }
  }, [events]);

  return (
    <div className="calendar-view">
      <h2>Event Calendar</h2>
      <div className="calendar-month">{month}</div>
      <div className="calendar">
        <div className="week-days">
          {weekDays.map(day => (
            <div key={day} className="week-day">{day}</div>
          ))}
        </div>
        {august2025.map((week, weekIndex) => (
          <div key={weekIndex} className="week">
            {week.map((day, dayIndex) => {
              const isEventDay = eventDates.includes(day);
              const isCurrentMonth = (weekIndex === 0 && day > 20) || 
                                   (weekIndex > 0 && weekIndex < 5) || 
                                   (weekIndex === 5 && day < 8);
              return (
                <div 
                  key={dayIndex} 
                  className={`day ${isEventDay ? 'event-day' : ''} ${!isCurrentMonth ? 'other-month' : ''}`}
                >
                  {day}
                  {isEventDay && <span className="event-indicator">Event</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;