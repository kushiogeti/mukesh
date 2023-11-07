import React from "react";
import img8 from '../assets/LandingPage/image8.png';
import { Link, Outlet } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Navbar.css";
import Footer from "./Footer";

function Navbar() {
  return (
    <div>
      <div className="My-Navbar">
        <div className="My-Navbar-Links">
          {/* Responsive Menu */}
          <input type="checkbox" id="chkbx" />
          <label htmlFor="chkbx" className="chkboxIcon"></label>
          {/* Responsive Menu */}
          <Link
            to="/"
            style={{
              fontFamily: "Baskerville Old Face",
              fontSize: 22,
              fontWeight: "500",
            }}
            className="My-Navbar-Brand"
          >
            <img src={img8} width='40' height='30'></img>
          </Link>
          <div className="My-Navbar-Links-A">
            <Link to="/">Get Started</Link>
            <Link to="/store">Components</Link>
            <Link to="/mac">Foundations</Link>
            <Link to="/ipad">Team Support</Link>
            <Link to="/iphone">Roadmap</Link>
            <Link to="/watch">What's New</Link>
            <button><Link to="/airpods">Search</Link></button>
            <button><Link to="/airpods">Darkmode</Link></button>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navbar;
