import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar-logo">
          <a href="">
            <img src="./ROV.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu">
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Products</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </nav>
          <button className="navbar-btn">Get in Touch</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
