import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <img src="./ROV1.png" alt="R.O. Valerio Dairy Farm Logo" />
        </a>

        <button
          className={`menu-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isOpen ? "nav active" : "nav"}>
          <ul className="nav-links">
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Our Products
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <button className="btn-primary nav-cta">Get in Touch</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
