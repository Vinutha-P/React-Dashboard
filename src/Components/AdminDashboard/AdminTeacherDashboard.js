import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Select from "react-select";
import TeacherList from "../TeacherList/TeacherList";
import StudentList from "../StudentList/StudentList";
import Header from "../Header/Header";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { RiLayout4Fill } from "react-icons/ri";
import Calenderwidget from "../Sidebar/calenderwidget";
import Sidebar from "../Sidebar/Sidebar";


const availableWidgets = [
  { id: "calendar", name: "Calendar Widget", component: Calenderwidget },
];

const AdminTeacherDashboard = () => {
  const initialLayout1 = [
    { i: "widget1", x: 0, y: 2, w: 2, h: 4 },
    { i: "widget2", x: 2, y: 0, w: 2, h: 4 },
    { i: "widget3", x: 0, y: 2, w: 2, h: 4 },
    { i: "widget4", x: 2, y: 0, w: 2, h: 4 },
   { i: "widget5", x: 2, y: 0, w: 2, h: 4 },

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

  const savedLayout = JSON.parse(localStorage.getItem("teacherDashboardLayout"));
  const initialLayout = savedLayout || initialLayout1;

  const [layout, setLayout] = useState(initialLayout);
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(0);
  const [resizingEnabled, setResizingEnabled] = useState(false);
  const [draggableEnabled, setDraggableEnabled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dashboardWidgets, setDashboardWidgets] = useState([]);
  const [isCalenderWidget, setIsCalenderWidget] = useState(false);  

  const teacherData = [
    { id: 1, name: 'technician' },
    { id: 2, name: 'PT' },
    { id: 3, name: 'Files'},
    { id: 4, name: 'So on' },
    // Add more teachers here...
  ];

  const onAddWidget = (widget) => {
    // setDashboardWidgets([...dashboardWidgets, widget]);
    setIsCalenderWidget(true)
    localStorage.setItem("calenderWidgetTeacher", JSON.stringify(true));
    console.log("first", widget)
  };

  const layouts = [
    initialLayout1,
    initialLayout2,
    initialLayout3,
    initialLayout4,
  ];

  const resetLayout = () => {
    setLayout(layouts[currentLayoutIndex]);
    localStorage.removeItem("calenderWidgetTeacher")
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
    localStorage.setItem("teacherDashboardLayout", JSON.stringify(layout));
    alert("Layout saved successfully!");
  };

  return (
    <div>
      <Header />
      <h1 >Admin Teacher Dashboard</h1>
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
          <img style={{width:'100%',height:"100%"}} src={imagePaths[currentImageIndex]} alt="Widget 1" />
        </div>
        <div key="widget2" style={{ backgroundColor: "lightcoral" }}>
          {/* <NonTeaching teacherData={teacherData}/> */}
          <img style={{ width: '100%', height: '100%' }} src={require('../../images/chart.png')} alt="Chart" />

        </div>
        <div key="widget3" >
          <TeacherList />
        </div>
        <div key="widget4">
          <StudentList />
        </div>
       {JSON.parse(localStorage.getItem('calenderWidgetTeacher')) ? <div key="widget5">
        <Calenderwidget />
        </div> : null}
      </GridLayout>
    </div>
  );
};

export default AdminTeacherDashboard;
