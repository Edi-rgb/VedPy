import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DemoApp from "./pages/DemoApp";

function App() {
  const isDemoAppRoute = window.location.pathname === "/demoapp";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/demoapp" element={<DemoApp />} />
        </Routes>
        {!isDemoAppRoute && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
