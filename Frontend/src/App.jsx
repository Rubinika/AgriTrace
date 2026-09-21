import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Farmer from "./pages/Farmer";
import CollectionCenter from "./pages/CollectionCenter";
import About from "./pages/About";
import Consumer from "./pages/Consumer";
import Transport from "./pages/Transport";
import "./App.css";


function App() {

  return (

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

  );
}

export default App;