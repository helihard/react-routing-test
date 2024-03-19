import { Link } from "react-router-dom"
import "../css/Navbar.css"

function Navbar() {
  return (
    <>
      <Link to="/">
        <span className="nav__tab" id="index-tab">
          glitch.
        </span>
      </Link>
      &nbsp;
      <Link to="/form">
        <span className="nav__tab">form</span>
      </Link>
      &nbsp;
      <Link to="/content">
        <span className="nav__tab">innehåll</span>
      </Link>
      &nbsp;
      <Link to="/functionality">
        <span className="nav__tab">funktion</span>
      </Link>
    </>
  )
}

export default Navbar
