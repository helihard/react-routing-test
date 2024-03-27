import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/react-routing-test">
        <span className="logo" id="index-tab">
          glitch.
        </span>
      </NavLink>
      &nbsp;
      <NavLink
        to="/content"
        className={({ isActive }) =>
          isActive ? "nav__tab selected" : "nav__tab content-tab unselected"
        }
        id="content-tab"
      >
        content
      </NavLink>
      &nbsp;
      <NavLink
        to="/form"
        className={({ isActive }) =>
          isActive ? "nav__tab selected" : "nav__tab form-tab unselected"
        }
        id="form-tab"
      >
        form
      </NavLink>
      &nbsp;
      <NavLink
        to="/function"
        className={({ isActive }) =>
          isActive ? "nav__tab selected" : "nav__tab function-tab unselected"
        }
        id="function-tab"
      >
        function
      </NavLink>
    </nav>
  );
}

export default Navbar;
