import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Calenderwidget from "./calenderwidget";

const ReactGridLayout = WidthProvider(RGL);

const CalendarGridWidget = ({ x, y, w, h }) => {
  return (
    <div key="calendarWidget" data-grid={{ x, y, w, h }}>
      <Calenderwidget />
    </div>
  );
};

export default CalendarGridWidget;
