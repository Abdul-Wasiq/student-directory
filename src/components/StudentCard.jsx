import { useState } from 'react'

function StudentCard({ name, program, semester }) {
  const [views, setViews] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  function handleView() {
    setViews(views + 1)
  }

  return (
    <div className="card h-100 shadow-sm">
      <div className="bg-secondary d-flex align-items-center justify-content-center" style={{ height: "160px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#aaa" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path d="M8 9a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z"/>
        </svg>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-1 text-muted small">Program: {program}</p>
        <p className="card-text mb-1 text-muted small">Semester: {semester}</p>
        <p className="card-text mb-3 text-muted small">Profile Views: {views}</p>
        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-outline-primary btn-sm" onClick={handleView}>View Profile</button>
          <button className="btn btn-outline-danger btn-sm">Delete</button>
        </div>
        <button className="btn btn-outline-secondary btn-sm w-100" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="mt-2">
            <p className="mb-1 small">Email: student@example.com</p>
            <p className="mb-0 small">Phone: 0300-1234567</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentCard
