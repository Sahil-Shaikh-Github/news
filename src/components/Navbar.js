
import React from 'react';
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-warning bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/general">Home</Link>
            </li>
            {/* <li className="nav-item"><Link className="nav-link" href="#">About </Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Quick Access
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Weekly Trending</a></li>
                <li><a className="dropdown-item" href="/">Hollywood & Bollywood</a></li>
                <li><a className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Top 10 News Today</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}














