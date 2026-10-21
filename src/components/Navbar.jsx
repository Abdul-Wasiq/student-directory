import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-dark" href="#">StudentPortal</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item"><a className="nav-link" href="/Directory">Reports</a></li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Settings</a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Preferences</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
              </ul>
            </div>
            <div className="input-group" style={{ width: "200px" }}>
              <input type="text" className="form-control form-control-sm" placeholder="Search" />
              <button className="btn btn-primary btn-sm">Search</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
