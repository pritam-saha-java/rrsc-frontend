import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Red Riders</Link>
      </div>
      <div className="dropdown">
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>Choose Section ▾</button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <button onClick={() => handleSelect("/club")}>🏆 Sports Club</button>
            <button onClick={() => handleSelect("/managements")}>📊 Managements</button>
            <button onClick={() => handleSelect("/complex")}>🏟️ Sports Complex</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
