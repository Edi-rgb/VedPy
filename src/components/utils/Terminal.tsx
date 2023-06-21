import { TbCircleFilled } from "react-icons/tb";
import Typewriter from "./Typewriter";

function Terminal() {
  const text = `> An open source Password Manager
> Feel free to give it a star 🌟
> Use it for your own purpose
> Made with ❤️ by Our Team

> exit()`;

  return (
    <div className="w-3/4 sm:w-2/4 md:w-2/3 lg:2/4 xl:w-[45%]  full-terminal-window h-[40%] flex-col  ">
      <div className="buttons-menu flex bg-slate-300 p-1 pl-1 rounded-t-[5px] items-center">
        <TbCircleFilled className="text-red-500" />
        <TbCircleFilled className="text-yellow-500" />
        <TbCircleFilled className="text-green-500" />
      </div>

      <div className="terminal-body overflow-y-auto bg-SpecialGray p-2 px-2 rounded-b-[5px] font-medium">
        <p className="mb-4"> $ Welcome to the VedPy!</p>

        <div className="text-wrapper">
          <Typewriter textToType={text} />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
