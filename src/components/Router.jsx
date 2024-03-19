import { BrowserRouter, Routes, Route } from "react-router-dom"
import Startpage from "../pages/Startpage.jsx"
import Form from "../pages/Form.jsx"
import Functionality from "../pages/Functionality"
import Content from "../pages/Content.jsx"
import Navbar from "../components/Navbar.jsx"
import Hero from "./Hero.jsx"

function Router() {
  return (
    <BrowserRouter>
      <Hero />
      <Navbar />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="form" element={<Form />} />
        <Route path="functionality" element={<Functionality />} />
        <Route path="content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
