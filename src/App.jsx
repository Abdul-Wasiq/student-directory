import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import StudentCard from "./components/StudentCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Students from "./components/Students"
import Courses from "./components/Courses"
import Directory from "./components/Directory"

const ALL_STUDENTS = [
  { id: 101, name: "Abdul Wasiq", major: "Computer Science", year: 2, gpa: 3.8 },
  { id: 102, name: "Ali Khan", major: "Software Engineering", year: 3, gpa: 3.5 },
  { id: 103, name: "Sara Lee", major: "Data Science", year: 1, gpa: 3.9 },
  { id: 104, name: "Mia Chen", major: "Cybersecurity", year: 2, gpa: 3.7 },
  { id: 105, name: "Tom Ray", major: "Computer Science", year: 4, gpa: 3.2 },
  { id: 106, name: "Nour Ali", major: "Software Engineering", year: 1, gpa: 4.0 },
  { id: 107, name: "Zara Fox", major: "Data Science", year: 2, gpa: 3.4 },
  { id: 108, name: "Sam Park", major: "Computer Science", year: 4, gpa: 3.1 },
];

const PER_PAGE = 4;

function MainContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAlert, setShowAlert] = useState(true);

  const totalPages = Math.ceil(ALL_STUDENTS.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const currentStudents = ALL_STUDENTS.slice(start, start + PER_PAGE);

  return (
    <main className="container my-4 flex-grow-1">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Page Header</h4>
        <button className="btn btn-primary">Add New Student</button>
      </div>
      <div className="row g-3 mb-4">
        {currentStudents.map(student => (
          <div className="col-12 col-sm-6 col-md-3" key={student.id}>
            <StudentCard
              name={student.name}
              program={student.major}
              semester={student.year}
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
      {showAlert && (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          Student records have been successfully updated.
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)} />
        </div>
      )}
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Directory" element={<Directory />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
