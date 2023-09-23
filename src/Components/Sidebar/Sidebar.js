import React from "react";

const Sidebar = ({ widgets, onAddWidget }) => {
  return (
    <div>
      <h2>Available Widgets</h2>
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>
            {widget.name}
            <button onClick={() => onAddWidget(widget)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
