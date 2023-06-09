import Footer from "./utils/Footer";

function MainContent() {
  return (
    <>
      <h1>Hello from main content</h1>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {<Footer />}
    </>
  );
}

export default MainContent;
