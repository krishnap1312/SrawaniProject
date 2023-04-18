import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import App from './App';
import AddCourse from './Components/AddCourse';
import AddTeacher from './Components/AddTeacher';
import AddSubject from './Components/AddSubject';
import GenerateTimeTable from './Components/GenerateTimeTable';
import ExportTimeTable from './Components/ExportTimeTable';
import TimeTable from './Components/timetable';
import AboutUs from './Components/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/AddCourse",
    element: <AddCourse/>
  },
  {
    path: "/AddTeacher",
    element: <AddTeacher/>
  },
  {
    path: "/AddSubject",
    element: <AddSubject/>
  },
  {
    path: "/GenerateTimetable",
    element: <GenerateTimeTable/>
  },
  {
    path: "/ExportTimeTable",
    element: <ExportTimeTable/>
  }
  ,
  {
    path: "/TimeTable",
    element: <TimeTable/>
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

