import { motion } from "framer-motion";

import video from "../../assets/video.mp4";
import Terminal from "./Terminal";

function Hero() {
  return (
    <>
      <div>
        <video
          className=" shadow-lg blur-none absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          controls={false}
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className=" w-full h-[88vh]">
          <motion.div
            initial={{ x: -1000, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className=" mx-auto flex items-center justify-center md:h-[70vh] flex-col h-[50vh]"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
