import { useEffect, useState } from "react";
import Loader from "./Loader";
import { AnimatePresence, useAnimationControls, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const controls = useAnimationControls();

  const video = {
    initial: {
      scale: 2.5,
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "calc(-50% + 200px)",
      width: "100vw",
      height: "100vh",
    },
    animate: {
      scale: 1.2,
      y: "-50%",
      transition: {
        duration: 0.7,
        delay: 0.5,
        scale: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
      },
    },
  };

  useEffect(() => {
    if (!loading) {
      controls.start("animate");
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>
      <motion.div
        variants={video}
        animate={controls}
        initial="initial"
        className="fixed transform-origin-center"
      >
        <iframe
          src="https://player.vimeo.com/video/866834156?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&controls=0&muted=1"
          allow="autoplay; fullscreen"
          className="w-full h-full"
        ></iframe>
      </motion.div>
    </>
  );
}

export default App;
