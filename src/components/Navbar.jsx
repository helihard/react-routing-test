import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <Link to="/">startsida</Link>&nbsp;
      <Link to="/form">form</Link>&nbsp;
      <Link to="/functionality">funktion</Link>&nbsp;
      <Link to="/content">innehåll</Link>
    </>
  )
}

export default Navbar
