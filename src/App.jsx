import { BrowserRouter, Routes, Route } from "react-router-dom"
import Startpage from "./pages/Startpage.jsx"
import Form from "./pages/Form.jsx"
import Functionality from "./pages/Functionality"
import Content from "./pages/Content.jsx"
import Navbar from "./components/Navbar.jsx"

//import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="form" element={<Form />} />
          <Route path="functionality" element={<Functionality />} />
          <Route path="content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
