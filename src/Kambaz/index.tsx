import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const addNewCourse = async (course: any) => {
    try {
      const newCourse = await courseClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Failed to add course:", error);
    }
  };

 const deleteCourse = async (courseId: string) => {
   const status = await courseClient.deleteCourse(courseId);
   setCourses(courses.filter((course) => course._id !== courseId));
 };


  const updateCourse = async (course: any) => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) =>
      c._id === course._id ? course : c
    ));
  };


  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={
            <ProtectedRoute>
              <Dashboard courses={courses} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse}/>
            </ProtectedRoute>
          } />
          <Route path="/Courses/:cid/*" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
