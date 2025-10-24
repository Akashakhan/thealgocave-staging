"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import HalftonePatternComponent from "./HalftonePatternComponent";
import ContactModal from "./ContactModal";

export default function Services() {
  const targetRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0.5]);
  const display = useTransform(scrollYProgress, (pos) => {
    return pos < 0.25 ? `block` : `none`;
  });
  const borderWidth = useTransform(scrollYProgress, (pos) => {
    return pos < 0.25 ? `2px` : `0px`;
  });
  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.45, 0.5],
    [0.5, 1, 0.5]
  );
  const display2 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.25 && pos < 0.5 ? `block` : `none`;
  });
  const borderWidth2 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.25 && pos < 0.5 ? `2px` : `0px`;
  });
  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.75],
    [0.5, 1, 0.5]
  );
  const display3 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.5 && pos < 0.75 ? `block` : `none`;
  });
  const borderWidth3 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.5 && pos < 0.75 ? `2px` : `0px`;
  });
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.95, 1], [0.5, 1, 0.5]);
  const display4 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.75 && pos < 1 ? `block` : `none`;
  });
  const borderWidth4 = useTransform(scrollYProgress, (pos) => {
    return pos > 0.75 && pos < 1 ? `2px` : `0px`;
  });

  const opacity5 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);

  const opacity6 =  useTransform(
    scrollYProgress,
    [0.25, 0.45, 0.5],
    [0, 1, 0]
  )

  const opacity7 = useTransform(scrollYProgress, [0.5, 0.7, 0.75], [0, 1, 0]);
  const opacity8 = useTransform(scrollYProgress, [0.75, 0.95, 1], [0, 1, 1]);


  return (
    <div ref={targetRef} className="h-[500vh] bg-white ">
      <motion.div
        style={{ placeContent: "center" }}
        className=" sticky top-0 py-10 md:py-20 px-4 md:px-12 text-black min-h-[100vh]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div id="serv" className="md:col-span-6 border-r-0 md:border-r border-[#E1E1E1] pb-8 md:pb-0">
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
                className=" text-lg md:text-5xl flex items-center"
              >
                <motion.div
                  style={{ display }}
                  className="text-black text-base md:text-2xl pe-3 md:pe-4 flex items-center"
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
                className=" text-lg md:text-5xl flex items-center"
              >
                <motion.div
                  style={{ display: display2 }}
                  className="text-black text-base md:text-2xl pe-3 md:pe-4 flex items-center"
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
                className=" text-lg md:text-5xl flex items-center"
              >
                <motion.div
                  style={{ display: display3 }}
                  className="text-black text-base md:text-2xl pe-3 md:pe-4 flex items-center"
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
                className=" text-lg md:text-5xl flex items-center"
              >
                <motion.div
                  style={{ display: display4 }}
                  className="text-black text-base md:text-2xl pe-3 md:pe-4 flex items-center"
                >
                  ■
                </motion.div>{" "}
                Custom AI Integration
              </motion.div>
            </div>
          </div>
          <div
            style={{ placeItems: "center" }}
            className="md:col-span-6 items-center justify-center self-center px-4 md:px-10 relative"
          >
            <div className="relative">
              <motion.div style={{ placeItems: "center", opacity:opacity5 }} className="  ">
                <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]">
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
                <div className="mt-8 md:mt-12 text-sm md:text-base">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-8 md:mt-12" style={{ justifySelf: "left" }}>
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 underline cursor-pointer text-sm md:text-base hover:text-blue-700 transition-colors"
                  >
                    Book a Call
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ placeItems: "center" , opacity:opacity6 }} className=" absolute top-0 ">
                <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]">
                <HalftonePatternComponent
                    density={100}
                    size={20}
                    intensity={50}
                    speed={1.5}
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    isAnimated={true}
                    mouseInteractive={true}
                    dotShape="square"
                    animationEffect="orbit"
                  />
                </div>
                <div className="mt-8 md:mt-12 text-sm md:text-base">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-8 md:mt-12" style={{ justifySelf: "left" }}>
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 underline cursor-pointer text-sm md:text-base hover:text-blue-700 transition-colors"
                  >
                    Book a Call
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ placeItems: "center" , opacity:opacity7 }} className=" absolute top-0 ">
                <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]">
                
                    <HalftonePatternComponent
                      density={100}
                      size={20}
                      intensity={50}
                      speed={1}
                      backgroundColor="#ffffff"
                      foregroundColor="#000000"
                      isAnimated={true}
                      dotShape="circle"
                      animationEffect="pulse"
                    />
                </div>
                <div className="mt-8 md:mt-12 text-sm md:text-base">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-8 md:mt-12" style={{ justifySelf: "left" }}>
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 underline cursor-pointer text-sm md:text-base hover:text-blue-700 transition-colors"
                  >
                    Book a Call
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ placeItems: "center" , opacity:opacity8 }} className=" absolute top-0 ">
                <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]">
                 
                  <HalftonePatternComponent
                    density={100}
                    size={20}
                    intensity={50}
                    speed={1}
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    isAnimated={true}
                    dotShape="circle"
                    animationEffect="tornado"
                  />
                </div>
                <div className="mt-8 md:mt-12 text-sm md:text-base">
                  We design high-throughput, event-driven architectures that
                  process and deliver data instantly. Our systems handle massive
                  streams in real time, giving your business the speed and
                  reliability to act without delay.
                </div>
                <div className="mt-8 md:mt-12" style={{ justifySelf: "left" }}>
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 underline cursor-pointer text-sm md:text-base hover:text-blue-700 transition-colors"
                  >
                    Book a Call
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
