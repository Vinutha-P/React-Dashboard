import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Select from "react-select";
import TeacherList from "../TeacherList/TeacherList";
import NonTeaching from "../NonTeaching/nonTeaching";
import StudentList from "../StudentList/StudentList";
import Header from "../Header/Header";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { RiLayout4Fill } from "react-icons/ri";
import Calenderwidget from "../Sidebar/calenderwidget";
import Sidebar from "../Sidebar/Sidebar";
import CalendarGridWidget from "../Sidebar/CalendarGridWidget";

const availableWidgets = [
  // Define your available widget components here
  // { id: "weather", name: "Weather Widget", component: Calenderwidget },
  // { id: "news", name: "News Widget", component: Calenderwidget },
  { id: "calendar", name: "Calendar Widget", component: Calenderwidget },
];

const Dashboard = () => {
  const initialLayout1 = [
    { i: "widget1", x: 0, y: 2, w: 2, h: 2 },
    { i: "widget2", x: 2, y: 0, w: 2, h: 2 },
    { i: "widget3", x: 0, y: 2, w: 2, h: 2 },
    { i: "widget4", x: 2, y: 0, w: 2, h: 2 },
  ];

  const initialLayout2 = [
    { i: "widget1", x: 2, y: 2, w: 2, h: 2 },
    { i: "widget2", x: 0, y: 0, w: 2, h: 6 },
    { i: "widget3", x: 2, y: 2, w: 2, h: 6 },
    { i: "widget4", x: 0, y: 4, w: 2, h: 2 },
  ];

  const initialLayout3 = [
    { i: "widget1", x: 0, y: 2, w: 2, h: 4 },
    { i: "widget2", x: 3, y: 0, w: 2, h: 6 },
    { i: "widget3", x: 0, y: 2, w: 2, h: 2 },
    { i: "widget4", x: 1, y: 6, w: 4, h: 4 },
  ];

  const initialLayout4 = [
    { i: "widget1", x: 0, y: 0, w: 4, h: 4 },
    { i: "widget2", x: 0, y: 4, w: 4, h: 4 },
    { i: "widget3", x: 4, y: 0, w: 4, h: 4 },
    { i: "widget4", x: 4, y: 4, w: 4, h: 4 },
  ];

  const savedLayout = JSON.parse(localStorage.getItem("dashboardLayout"));
  const initialLayout = savedLayout || initialLayout1;

  const [layout, setLayout] = useState(initialLayout);
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(0);
  const [resizingEnabled, setResizingEnabled] = useState(false);
  const [draggableEnabled, setDraggableEnabled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dashboardWidgets, setDashboardWidgets] = useState([]);

  const onAddWidget = (widget) => {
    setDashboardWidgets([...dashboardWidgets, widget]);
  };

  const layouts = [
    initialLayout1,
    initialLayout2,
    initialLayout3,
    initialLayout4,
  ];

  const resetLayout = () => {
    setLayout(layouts[currentLayoutIndex]);
  };

  const switchLayout = (layoutIndex) => {
    setCurrentLayoutIndex(layoutIndex);
    setLayout(layouts[layoutIndex]);
  };

  const imagePaths = [
    require("../../images/school.jpeg"),
    require("../../images/classroom.jpeg"),
    require("../../images/student.jpeg"),
    require("../../images/teacher.jpeg"),
    require("../../images/students.jpeg"),
  ];

  const layoutOptions = [
    { value: 0, label: <RiLayoutGridFill /> },
    { value: 1, label: <RiLayoutMasonryFill /> },
    { value: 2, label: <RiLayout4Fill /> },
    { value: 3, label: <TfiLayoutMenuV /> },
  ];

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  const updateImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImage, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSaveLayout = () => {
    localStorage.setItem("dashboardLayout", JSON.stringify(layout));
    alert("Layout saved successfully!");
  };

  return (
    <div>
      <Header />
      <h1>Admin Dashboard</h1>
      <button onClick={() => setResizingEnabled(!resizingEnabled)}>
        {resizingEnabled ? "Disable Resize" : "Enable Resize"}
      </button>
      <button onClick={() => setDraggableEnabled(!draggableEnabled)}>
        {draggableEnabled ? "Disable Draggable" : "Enable Draggable"}
      </button>
      <button onClick={resetLayout}>Reset Layout</button>
      <button onClick={handleSaveLayout}>Save Layout</button>
      <div>
        <Select
          options={layoutOptions}
          value={layoutOptions[currentLayoutIndex]}
          onChange={(selectedOption) => switchLayout(selectedOption.value)}
          isSearchable={false}
        />
      </div>
      <Sidebar widgets={availableWidgets} onAddWidget={onAddWidget} />
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={100}
        width={1430}
        onLayoutChange={onLayoutChange}
        draggableCancel={
          draggableEnabled ? "" : "input,textarea,.react-resizable-handle"
        }
        isResizable={resizingEnabled}
        isDraggable={draggableEnabled}
      >
        <div key="widget1" style={{ backgroundColor: "lightblue" }}>
          <img src={imagePaths[currentImageIndex]} alt="Widget 1" />
        </div>
        <div key="widget2" style={{ backgroundColor: "lightcoral" }}>
          <NonTeaching />
        </div>
        <div key="widget3" style={{ backgroundColor: "lightpink" }}>
          <TeacherList />
        </div>
        <div key="widget4" style={{ backgroundColor: "lightyellow" }}>
          <StudentList />
        </div>
        {dashboardWidgets.map((widget) => (
          <div key={widget.id}>
            {/* Render the widget component here */}
            <CalendarGridWidget {...widget} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Dashboard;
