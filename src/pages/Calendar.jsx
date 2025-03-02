import React from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

function Calendar({ supplies }) {
  const events = supplies.map(supply => ({
    title: `${supply.name} (Expires)`,
    start: new Date(supply.expirationDate),
    end: new Date(supply.expirationDate),
    allDay: true
  }));

  return (
    <div>
      <h1>Calendar</h1>
      <div style={{ height: 500 }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}

export default Calendar;
