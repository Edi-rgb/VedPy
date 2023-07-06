import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="h-[100vh] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900 via-gray-900 to-cyan-900">
        <h1 className="text-center p-16 font-extrabold text-[2rem] text-green-200 underline ">
          VedPy-CLI
        </h1>
        <div className="flex items-center flex-col justify-evenly sm:flex-row ">
          <div className="relative overflow-hidden">
            <iframe
              className=" w-[50vh]  h-[30vh] lg:w-[60vh] lg:h-[40vh] xl:w-[70vh] xl:h-[45vh] 2xl:w-[80vh] 2xl:h-[60vh]"
              width="250"
              height="200"
              src="https://www.youtube.com/embed/IDDmrzzB14M"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            ></iframe>
          </div>

          <div className=" text-center p-9">
            <Link
              to="/downloads"
              className="border-4  text-lg font-semibold p-3 rounded-lg border-cyan-950 hover:bg-cyan-950 "
            >
              Download
            </Link>
            <br />
            <br />
            <button className="border-4  text-lg font-semibold p-3 rounded-lg border-cyan-950  hover:bg-cyan-950 mt-2  ">
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
