import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./views/Navbar";
import smallTownTumbler from "./static/images/stt_overlay_gdual.png";
import NewOrder from "./components/NewOrder";
import PendingOrders from "./components/PendingOrders";
import Home from "./views/Home";
import Gallerytest from "./views/Gallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <img className="mt-4" src={smallTownTumbler} alt="Small Town Tumbler" />
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/tumbler" element={<Gallerytest />} />
          <Route path="/tumbler/new" element={<NewOrder />} />
          <Route path="/tumbler/pending" element={<PendingOrders />} />
          <Route path="/tumbler/pending/:id" element={<PendingOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
