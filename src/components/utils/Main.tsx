function Main() {
  return (
    <>
      <div className="h-[88vh] bg-slate-500">
        <h1 className="text-center p-24">VedPy-CLI</h1>
        <div className="flex items-center flex-col justify-evenly sm:flex-row ">
          <div>
            <iframe
              width="330"
              height="150"
              src="https://www.youtube.com/embed/VyN1WSv7-Sc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className=" text-center p-9">
            <button>Download</button>
            <br />
            <br />
            <button>Donate</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
