import Navbar from "./components/utils/Navbar";
import MainContent from "./components/MainContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DemoApp from "./pages/DemoApp";
import Downloads from "./pages/Downloads";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/demo" element={<DemoApp />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
