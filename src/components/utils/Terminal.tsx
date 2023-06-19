import { TbCircleFilled } from "react-icons/tb";
import Typewriter from "./Typewriter";

function Terminal() {
  return (
    <>
      <div className="buttons-menu flex bg-slate-300 w-2/3 sm:w-2/3 md:w-2/1 lg:2/3 xl:w-[45%] p-1 pl-1 rounded-t-[5px]  items-center">
        <TbCircleFilled className="text-red-500  " />
        <TbCircleFilled className="text-yellow-500" />
        <TbCircleFilled className="text-green-500 " />
      </div>

      <div className="terminal-body  bg-SpecialGray w-2/3 sm:w-2/3 md:w-2/3 lg:2/1 xl:w-[45%] p-2 px-2 rounded-b-[5px] font-medium h-2/4 ">
        <p> $ Welcome to the VedPy!</p>
        <br />

        <Typewriter
          textToType={"An open source cross platform Password Manager"}
        />
        <Typewriter
          textToType={
            "Feel free to contribute, give it a star or use it for your own purpose"
          }
        />
        <Typewriter textToType={"made with ❤️ by Our Team"} />
        <br />
        <Typewriter textToType={"exit()"} />
      </div>
    </>
  );
}

export default Terminal;
