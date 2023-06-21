import Hero from "./utils/Hero";
import Footer from "./utils/Footer";
import Main from "./utils/Main";

function MainContent() {
  return (
    <>
      <div id="section1">
        <Hero />
      </div>

      <div id="section2 " className="root-div">
        <Main />
      </div>

      <div id="section3">
        <Footer />
      </div>
    </>
  );
}

export default MainContent;
