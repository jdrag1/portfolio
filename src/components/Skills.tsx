import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssLine, RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt, FaPhp, FaMicrosoft } from "react-icons/fa";
import { SiTypescript, SiMysql } from "react-icons/si";

const iconVariants = (duration: number) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10], 
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const
    },
  },
});

const Skills = () => {
  return (
    <div className="pb-24">
      <h2 className="my-16 text-center font-bold text-[#E0168E] text-5xl uppercase">
        Skills
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
        
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
        </motion.div>

        
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <RiTailwindCssLine className="text-7xl text-cyan-500" />
          </div>
        </motion.div>

        
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <RiHtml5Line className="text-7xl text-orange-600" />
          </div>
        </motion.div>

       
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <FaCss3Alt className="text-7xl text-blue-800" />
          </div>
        </motion.div>

      
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <SiTypescript className="text-7xl text-blue-800" />
          </div>
        </motion.div>

       
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <FaPhp className="text-7xl text-violet-500" />
          </div>
        </motion.div>

        
        <motion.div
          variants={iconVariants(3.9)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <SiMysql className="text-7xl text-blue-800" />
          </div>
        </motion.div>

       
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-xl p-2"
        >
          <div className="absolute inset-0 rounded-xl p-[3px] bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
            <div className="h-full w-full rounded-xl bg-neutral-900"></div>
          </div>
          <div className="relative flex items-center justify-center bg-neutral-900 rounded-xl p-3">
            <FaMicrosoft className="text-7xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
