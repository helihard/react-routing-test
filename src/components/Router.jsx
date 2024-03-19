import { BrowserRouter, Routes, Route } from "react-router-dom"
import Startpage from "../pages/Startpage.jsx"
import Form from "../pages/Form.jsx"
import Function from "../pages/Function"
import Content from "../pages/Content.jsx"
import Navbar from "../components/Navbar.jsx"
import Hero from "./Hero.jsx"

function Router() {
  return (
    <BrowserRouter>
      <header>
        <Hero />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="form" element={<Form />} />
        <Route path="function" element={<Function />} />
        <Route path="content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
