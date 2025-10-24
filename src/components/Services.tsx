"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HalftonePatternComponent from "./HalftonePatternComponent";
import DitherPatternComponent from "./DitherPatternComponent";

export default function Services() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0.5]);
  const display = useTransform(scrollYProgress, (pos) => {
    return pos < 0.3 ? `block` : `none`;
  });
  const borderWidth = useTransform(scrollYProgress, (pos) => {
    return pos < 0.3 ? `2px` : `0px`;
  });
  const opacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.55],
    [0.5, 1, 0.5]
  );
  const display2 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.3 && pos < 0.55 ? `block` : `none`;
  });
  const borderWidth2 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.3 && pos < 0.55 ? `2px` : `0px`;
  });
  const opacity3 = useTransform(
    scrollYProgress,
    [0.55, 0.75, 0.8],
    [0.5, 1, 0.5]
  );
  const display3 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.55 && pos < 0.8 ? `block` : `none`;
  });
  const borderWidth3 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.55 && pos < 0.8 ? `2px` : `0px`;
  });
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.95, 1], [0.5, 1, 0.5]);
  const display4 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.8 && pos < 1 ? `block` : `none`;
  });
  const borderWidth4 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.8 && pos < 1 ? `2px` : `0px`;
  });

  const opacity5 = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);

  const opacity6 =  useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.55],
    [0, 1, 0]
  )

  const opacity7 = useTransform(scrollYProgress, [0.55, 0.75, 0.8], [0, 1, 0]);
  const opacity8 = useTransform(scrollYProgress, [0.8, 0.95, 1], [0, 1, 1]);


  return (
    <div ref={targetRef} className="h-[500vh] bg-white ">
      <motion.div
        style={{ placeContent: "center" }}
        className=" sticky top-0 py-20 px-12 text-black min-h-[100vh]"
      >
        <div className="grid grid-cols-12">
          <div id="serv" className="col-span-6 border-r border-[#E1E1E1]">
            <span className="text-[#007EFC]">
              Building integrated data and AI systems across all solutions
            </span>
            <div className="mt-12">
              <motion.div
                style={{
                  opacity,
                  borderInlineEndWidth: borderWidth,
                  borderRight: 2,
                  borderRightStyle: "solid",
                  borderColor: "#007EFC",
                }}
                className=" text-5xl flex"
              >
                <motion.div
                  style={{ display }}
                  className="text-black text-2xl pe-4 pt-1"
                >
                  ■
                </motion.div>{" "}
                Real-Time Data Systems
              </motion.div>
              <motion.div
                style={{
                  opacity: opacity2,
                  borderInlineEndWidth: borderWidth2,
                  borderRight: 2,
                  borderRightStyle: "solid",
                  borderColor: "#007EFC",
                }}
                className=" text-5xl my-5 flex"
              >
                <motion.div
                  style={{ display: display2 }}
                  className="text-black text-2xl pe-4 pt-1"
                >
                  ■
                </motion.div>{" "}
                Low-Latency Architectures
              </motion.div>
              <motion.div
                style={{
                  opacity: opacity3,
                  borderInlineEndWidth: borderWidth3,
                  borderRight: 2,
                  borderRightStyle: "solid",
                  borderColor: "#007EFC",
                }}
                className=" text-5xl flex my-5"
              >
                <motion.div
                  style={{ display: display3 }}
                  className="text-black text-2xl pe-4 pt-1"
                >
                  ■
                </motion.div>{" "}
                Scalable Backend
              </motion.div>
              <motion.div
                style={{
                  opacity: opacity4,
                  borderInlineEndWidth: borderWidth4,
                  borderRight: 2,
                  borderRightStyle: "solid",
                  borderColor: "#007EFC",
                }}
                className=" text-5xl flex my-5"
              >
                <motion.div
                  style={{ display: display4 }}
                  className="text-black text-2xl pe-4 pt-1"
                >
                  ■
                </motion.div>{" "}
                Custom AI Integration
              </motion.div>
            </div>
          </div>
          <div
            style={{ placeItems: "center" }}
            className="col-span-6 items-center justify-center self-center px-10 relative"
          >
            <div className="relative">
              <motion.div style={{ placeItems: "center", opacity:opacity5 }} className="  ">
                <div className="rounded-full overflow-hidden w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                  <HalftonePatternComponent
                    density={100}
                    size={20}
                    intensity={50}
                    speed={1.5}
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    isAnimated={true}
                    mouseInteractive={true}
                  />
                </div>
                <div className="mt-12">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-12" style={{ justifySelf: "left" }}>
                  <div className="text-blue-500 underline cursor-pointer">
                    Book a Call
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ placeItems: "center" , opacity:opacity6 }} className=" absolute top-0 ">
                <div className="rounded-full overflow-hidden w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                  <DitherPatternComponent
                    density={100}
                    size={15}
                    intensity={70}
                    speed={1.5}
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    isAnimated={true}
                    pattern="noise"
                    threshold={0.4}
                    mouseInteractive={true}
                  />
                </div>
                <div className="mt-12">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-12" style={{ justifySelf: "left" }}>
                  <div className="text-blue-500 underline cursor-pointer">
                    Book a Call
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ placeItems: "center" , opacity:opacity7 }} className=" absolute top-0 ">
                <div className="rounded-full overflow-hidden w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                  <DitherPatternComponent
                    density={100}
                    size={15}
                    intensity={70}
                    speed={1.5}
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    isAnimated={true}
                    pattern="fractal"
                    threshold={0.4}
                    mouseInteractive={true}
                  />
                </div>
                <div className="mt-12">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-12" style={{ justifySelf: "left" }}>
                  <div className="text-blue-500 underline cursor-pointer">
                    Book a Call
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ placeItems: "center" , opacity:opacity8 }} className=" absolute top-0 ">
                <div className="rounded-full overflow-hidden w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                  <DitherPatternComponent
                    density={100}
                    size={15}
                    intensity={70}
                    speed={1.5}
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    isAnimated={true}
                    pattern="waves"
                    threshold={0.4}
                    mouseInteractive={true}
                  />
                </div>
                <div className="mt-12">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-12" style={{ justifySelf: "left" }}>
                  <div className="text-blue-500 underline cursor-pointer">
                    Book a Call
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
