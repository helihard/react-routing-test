import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startpage from "../pages/Startpage.jsx";
import Form from "../pages/Form.jsx";
import Function from "../pages/Function";
import Content from "../pages/Content.jsx";
import Navbar from "../components/Navbar.jsx";
import Hero from "./Hero.jsx";

function Router() {
  return (
    <BrowserRouter>
      <header>
        <Hero />
        <Navbar />
      </header>
      <Routes>
        <Route path="/react-routing-test" element={<Startpage />} />
        <Route path="/react-routing-test/form" element={<Form />} />
        <Route path="/react-routing-test/function" element={<Function />} />
        <Route path="/react-routing-test/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
