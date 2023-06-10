import Hero from "./utils/Hero";
import Footer from "./utils/Footer";

function MainContent() {
  return (
    <>
      <div id="section1">
        <Hero />
      </div>

      <div id="section2">
        <h1>Hello from main content</h1>
      </div>

      <div id="section3">
        <Footer />
      </div>
    </>
  );
}

export default MainContent;
