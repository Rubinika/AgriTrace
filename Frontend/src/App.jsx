import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Farmer from "./pages/Farmer";
import CollectionCenter from "./pages/CollectionCenter";
import About from "./pages/About";
import Consumer from "./pages/Consumer";
import Transport from "./pages/Transport";
import Login from "./pages/Login";
import { LanguageProvider } from "./LanguageContext";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/farmer"
            element={<Farmer />}
          />

          <Route
            path="/collection"
            element={<CollectionCenter />}
          />

          <Route
            path="/consumer"
            element={<Consumer />}
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/transport"
            element={<Transport />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;