import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ x: -1000, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="font-bold md:text-4xl sm:text-3xl mx-auto flex items-center justify-center md:h-[70vh] flex-col bg-gradient-to-r
       from-teal-200 to-violet-500 text-transparent bg-clip-text text-center h-[50vh]"
      >
        <h1>Be in safe and secure with with Vedpy</h1>
        <h3>Open source project for manage in secure your password</h3>
      </motion.div>
    </>
  );
}

export default Hero;
