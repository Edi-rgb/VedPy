import Hero from "./utils/Hero";
import Footer from "./utils/Footer";

function MainContent() {
  return (
    <>
      <div id="section1">
        <Hero />
      </div>

      <div id="section2 " className="root-div">
        <div className="body-div">test</div>
      </div>

      <div id="section3">
        <Footer />
      </div>
    </>
  );
}

export default MainContent;
