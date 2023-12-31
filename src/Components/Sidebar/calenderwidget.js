import React from "react";

const calenderwidget = () => {
  // Hardcoded calendar data
  const calendarData = [
    { id: 1, title: "Meeting with Team A", date: "2023-09-25" },
    { id: 2, title: "Conference Call", date: "2023-09-27" },
    { id: 3, title: "Project Deadline", date: "2023-10-05" },
  ];


  return (
    <div>
      {/* Map over calendarData */}
      {calendarData.map((item) => (
        // Render each item
        <div key={item.id} >
          <strong>{item.title}</strong> on {item.date}
        </div>
      ))}
    </div>
  );
};

export default calenderwidget;
