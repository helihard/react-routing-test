import { NavLink } from "react-router-dom"
import "../css/Navbar.css"

function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
        <span className="logo" id="index-tab">
          glitch.
        </span>
      </NavLink>
      &nbsp;
      <NavLink to="/content">
        <h1 className="nav__tab" id="content-tab">
          content
        </h1>
      </NavLink>
      &nbsp;
      <NavLink to="/form">
        <h1 className="nav__tab" id="form-tab">
          form
        </h1>
      </NavLink>
      &nbsp;
      <NavLink to="/function">
        <h1 className="nav__tab" id="function-tab">
          function
        </h1>
      </NavLink>
    </nav>
  )
}

export default Navbar
