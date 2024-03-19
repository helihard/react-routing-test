import { Link } from "react-router-dom"
import "../css/Navbar.css"

function Navbar() {
  return (
    <>
      <Link to="/">
        <span className="nav__tab logo" id="index-tab">
          glitch.
        </span>
      </Link>
      &nbsp;
      <Link to="/content">
        <span className="nav__tab">content</span>
      </Link>
      &nbsp;
      <Link to="/form">
        <span className="nav__tab">form</span>
      </Link>
      &nbsp;
      <Link to="/functionality">
        <span className="nav__tab">function</span>
      </Link>
    </>
  )
}

export default Navbar
