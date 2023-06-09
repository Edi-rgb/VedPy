import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DemoApp from "./pages/DemoApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/demoapp" element={<DemoApp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
