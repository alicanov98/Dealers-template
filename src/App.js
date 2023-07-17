import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import Catalogs from "./pages/Catalogs";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/catalogs" element={<Catalogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
