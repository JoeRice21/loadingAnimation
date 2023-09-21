import { motion } from "framer-motion";

const imageDimensions = [
  [0, 0, 375, 250],
  [101, 173, 200, 300],
  [-147, -135, 200, 300],
  [-200, 43, 300, 200],
  [224, 65, 200, 300],
  [73, -220, 300, 200],
];

export default function Loader({ setLoading }) {
  const container = {
    exit: {
      top: "-100%",
      filter: "brightness(20%)",
      transition: { duration: 1.3, ease: [0.95, 0, 0.3, 1] },
    },
  };

  const imageParent = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      exit="exit"
      className="absolute z-10 top-0 left-0 w-screen h-screen bg-[#ebe6d7]"
    >
      <motion.div
        variants={imageParent}
        initial="initial"
        animate="animate"
        onAnimationComplete={() => setLoading(false)}
      >
        <ImageBlock id={0} />
        <ImageBlock id={1} />
        <ImageBlock id={2} />
        <ImageBlock id={3} />
        <ImageBlock id={4} />
        <ImageBlock id={5} />
      </motion.div>
    </motion.div>
  );
}

function ImageBlock({ id }) {
  const imageBlock = {
    initial: {
      top: "50%",
      left: "50%",
      x: `calc(${imageDimensions[id][0]}px - 50%)`,
      y: `calc(${imageDimensions[id][1]}px - 50%)`,
      width: 0,
      height: 0,
    },
    animate: {
      width: imageDimensions[id][2],
      height: imageDimensions[id][3],
      transition: { duration: 1.5, ease: [0, 0, 0, 1] },
    },
  };

  const image = {
    initial: {
      scale: 1.6,
      width: imageDimensions[id][2],
      height: imageDimensions[id][3],
    },
    animate: {
      scale: 1,
      transition: { duration: 1.5, ease: [0, 0, 0, 1] },
    },
  };

  return (
    <motion.div
      variants={imageBlock}
      className="absolute overflow-hidden  origin-center"
    >
      <motion.img
        variants={image}
        className="object-cover"
        src={`image${id}.webp`}
      ></motion.img>
    </motion.div>
  );
}
