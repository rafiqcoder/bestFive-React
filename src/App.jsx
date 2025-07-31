import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Services from "./pages/Services/Services";
import Details from "./pages/Details/Details";
import FronendLayout from "./Components/Layouts/FronendLayout";
import DashboardRoute from "./Components/Layouts/DashboardRoute";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FronendLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="details/:id" element={<Details />} />
          </Route>
          <Route path="/dashboard" element={<DashboardRoute />}>
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="/dashboard/settings" element={<h1>Settings</h1>} />
            <Route path="/dashboard/profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
