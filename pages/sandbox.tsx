import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Features } from "@/sections/features";

const CodeSanbox = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2, 0.3, 0.4, 0.45, 1],
    [2.8, 2, 1.9, 1.85, 1.75, 1.65, 0.7, 0]
  );

  //   const scale1 = useTransform(
  //     scrollYProgress,
  //     [0, 0.1, 0.2, 0.3, 0.4, 0.45, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1],
  //     [3, 2.8, 2.65, 2.5, 2, 1.5, 1, 0, 0, 0, 0, 0, 0, 0]
  //   );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.8],
    [0.3, 0.2, 0.1, 0]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.7, 0.71],
    [0, 0.75, 1, 0, 0]
  );

  const squareScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2, 0.3, 0.5, 0.71, 1],
    [2.2, 2, 1.69, 1.6, 1.4, 1.3, 0.94, 1.2]
  );

  const squareOpacity0 = useTransform(
    scrollYProgress,
    [0, 0.09, 0.1],
    [1, 1, 0]
  );

  const squareOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  const squareOpacity2 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.21],
    [1, 1.0, 1.0, 0]
  );
  const squareOpacity3 = useTransform(
    scrollYProgress,
    [0, 0.21, 0.23, 0.24],
    [1, 1, 1, 0]
  );
  const squareOpacity4 = useTransform(
    scrollYProgress,
    [0, 0.26, 0.3],
    [1, 1, 0]
  );
  const squareOpacity5 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    [1, 1, 0]
  );

  const squareOpacity6 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5],
    [1, 1, 0]
  );

  const squareOpacity7 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.55],
    [1, 1, 0]
  );

  const squareOpacity8 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.58],
    [1, 1, 0]
  );

  const squareOpacity9 = useTransform(
    scrollYProgress,
    [0, 0.58, 0.6],
    [1, 1, 0]
  );

  const squareOpacity10 = useTransform(
    scrollYProgress,
    [0, 0.6, 0.64],
    [1, 1, 0]
  );

  const squareOpacity11 = useTransform(
    scrollYProgress,
    [0, 0.64, 0.66],
    [1, 1, 0]
  );

  const squareOpacity12 = useTransform(
    scrollYProgress,
    [0, 0.66, 0.68, 0.7, 0.71, 0.8],
    [1, 1, 1, 1, 0.55, 0]
  );

  const squareOpacity13 = useTransform(
    scrollYProgress,
    [0, 0.7, 0.73, 0.8],
    [0, 0, 1, 0]
  );
  const squareOpacity14 = useTransform(
    scrollYProgress,
    [0, 0.7, 0.73, 0.76, 0.8],
    [0, 0, 0, 1, 0]
  );

  const codeInCloudPartOn1 = useTransform(
    scrollYProgress,
    [0, 0.57, 0.58, 0.6, 0.68, 0.71, 1],
    [0, 0, 0.8, 1, 1, 0, 0]
  );

  const codeInCloudPartOn2 = useTransform(
    scrollYProgress,
    [0, 0.6, 0.64, 0.65, 0.72, 0.73, 0.75],
    [0, 0, 0.9, 1, 1, 0, 0]
  );

  const codeInCloudPartOn3 = useTransform(
    scrollYProgress,
    [0, 0.64, 0.65, 0.65, 0.7, 0.74, 0.75],
    [0, 0, 1, 1, 1, 0.2, 0]
  );
  const codeInCloudPartOn4 = useTransform(
    scrollYProgress,
    [0, 0.67, 0.68, 0.72, 0.74, 0.75],
    [0, 0, 1, 1, 0.2, 0]
  );
  const finalTextScale = useTransform(scrollYProgress, [0.7, 0.9], [1, 0.95]);

  const childDefault = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  // backward
  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.68, 0.7, 0.71, 0.72, 0.75],

    [0, 0.65, 1.0, 1.25, 1.6, 1.9]
  );

  const scale2Opacity = useTransform(
    scrollYProgress,
    [0, 0.68, 0.7, 0.71, 0.72, 0.75, 0.79, 0.8],

    [0, 0.85, 0.5, 0.45, 0.3, 0.2, 0.05, 0]
  );

  const scale3Opacity = useTransform(
    scrollYProgress,
    [0, 0.68, 0.7, 0.71, 0.72, 0.75, 0.79, 0.8],

    [0, 0, 0, 0, 0.1, 0.6, 0.2, 0]
  );

  // scale code image
  const scale4 = useTransform(
    scrollYProgress,
    [0, 0.77, 0.79, 0.82],

    [0, 1.9, 1.9, 1.5]
  );

  const scale4Opacity = useTransform(
    scrollYProgress,
    [0, 0.74, 0.75, 0.79, 0.82, 0.84],

    [0, 0, 0.2, 1, 0.3, 0]
  );

  // scale 5
  const scale5 = useTransform(
    scrollYProgress,
    [0, 0.8, 0.81, 0.81, 0.82, 0.84, 0.855, 0.87, 0.875, 0.88, 0.9, 0.94, 0.95],

    [0, 0, 2, 2.5, 2.6, 2.7, 2.9, 2.5, 2, 1.6, 1, 1, 1]
  );
  const scale5Opacity1 = useTransform(
    scrollYProgress,
    [0, 0.79, 0.8, 0.81, 0.82, 0.84, 0.855, 0.87, 0.875, 0.88, 0.9, 0.94],

    [0, 0, 0, 0.1, 0.35, 0.4, 0.5, 0.6, 0.5, 0.2, 0.1, 0]
  );

  const scale5Opacity2 = useTransform(
    scrollYProgress,
    [0, 0.79, 0.8, 0.81, 0.82, 0.84, 0.855, 0.87, 0.875, 0.88, 0.9],

    [0, 0, 0, 0, 1, 0.9, 0.3, 0.25, 0.23, 0.1, 0]
  );

  const movesparkText = useTransform(
    scrollYProgress,
    [0, 0.8, 0.855, 0.87, 0.9],

    ["0%", "-100%", "-110%", "-120%", "-130%"]
  );

  const movesparkTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.82, 0.85, 0.87, 0.88, 0.889],

    [0, 0, 0, 0.7, 0.8, 1, 0]
  );

  const anytimeOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.88, 0.9, 0.91, 0.92, 0.94, 0.95],

    [0, 0, 0, 0.1, 0.5, 1, 0.8, 0]
  );

  const anyWhereOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9, 0.92, 0.925, 0.93, 0.95, 0.97, 0.98],

    [0, 0, 0, 0.1, 0.5, 1, 1, 0.7, 0]
  );

  const anytimeOpacityText = useTransform(
    scrollYProgress,
    [0, 0.88, 0.93],

    [0, "10px", "20px"]
  );

  const anytimeLineScale = useTransform(
    scrollYProgress,
    [0, 0.88, 0.9, 0.93],

    [0, 0, 0.01, 1]
  );

  const afterAnyWhereScale = useTransform(
    scrollYProgress,
    [0, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1],

    [0.5, 0.6, 1, 1.2, 1.4, 1.5, 1.7, 2, 3.5]
  );

  const afterAnyWhereOpacity = useTransform(
    scrollYProgress,
    [0, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98],

    [0, 0, 0, 0.1, 0.15, 0.2, 0.4]
  );

  const collaborateOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8, 0.97, 0.98, 0.985, 0.99, 1],

    [0, 0, 0, 0, 0, 0.2, 1, 1]
  );

  const collaborateOpacityY = useTransform(
    scrollYProgress,
    [0, 0.985, 0.99, 1],

    ["-20%", "-35%", "-50%", "-95%"]
  );

  const childDefaultP = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };
  return (
    <main className="bg-[#000]">
      <div className="bg-background z-50 h-screen relative">
        <div className="max-w-[123.4rem] mx-auto pt-72 ">
          <motion.div className="max-w-[calc(100%-2rem)]">
            <motion.div
              className="mb-8 "
              initial="initial"
              animate="final"
              transition={{ ease: "easeInOut" }}
              variants={childDefault}
            >
              <AnimatedText
                el="div"
                text={["Instant dev environment"]}
                // text="Instant dev environment"
                className="text-[11.5rem] leading-[12.65rem] font-medium  "
              />
            </motion.div>

            <div className="w-full">
              <motion.h2
                initial="initial"
                animate="final"
                transition={{ ease: "easeInOut" }}
                variants={childDefaultP}
                className="text-[#fff] text-[3.2rem] mb-16 max-w-[calc(100%-300px)] font-normal"
              >
                CodeSandbox keeps you in flow by giving you cloud development
                environments that resume in 1 second.
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#000] z-50 text-white w-full h-[90px] relative">
        Hello
      </div>
      <div className="relative z-10 w-full overflow-x-clip">
        <div
          style={
            {
              "--opacity-border": opacity,
              "--scale": scale,
            } as any
          }
          className=" h-[500vh] w-full"
          ref={targetRef}
        >
          <div className="sticky  top-1/2">
            <motion.figure
              style={{ scale, x: "-50%", y: "-50%", opacity }}
              className=" absolute left-1/2 top-1/2 h-[100vh] w-[100vh] z-[0] will-change-transform "
            >
              <motion.img
                src="/gradient.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.figure
              style={{ scale: scale, x: "-50%", y: "-50%", opacity: opacity1 }}
              className=" absolute left-1/2 z-[-1] top-1/2 h-[100vh] w-[100vh] will-change-transform "
            >
              <motion.img
                src="/gradient1.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.figure
              style={{
                scale: scale2,
                x: "-50%",
                y: "-50%",
                opacity: scale2Opacity,
              }}
              className=" absolute left-1/2 top-1/2 h-[100vh] w-[100vh] z-[-15] will-change-transform "
            >
              <motion.img
                src="/gradient2.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>
            <motion.figure
              style={{
                scale: scale2,
                x: "-50%",
                y: "-50%",
                opacity: scale3Opacity,
              }}
              className=" absolute left-1/2 top-1/2 h-[100vh] w-[100vh] z-[-16] will-change-transform "
            >
              <motion.img
                src="/gradient3.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.figure
              style={{
                scale: scale4,
                x: "-50%",
                y: "-50%",
                opacity: scale4Opacity,
              }}
              className=" absolute left-1/2 top-1/2  z-[-17] will-change-transform "
            >
              <motion.img
                src="/codeimage.gif"
                className="object-cover w-full h-auto "
              />
            </motion.figure>

            <motion.figure
              style={{
                scale: scale5,
                x: "-50%",
                y: "-50%",
                opacity: scale5Opacity1,
              }}
              className=" absolute left-1/2 top-1/2 h-[100vh] w-[100vh] z-[-18] will-change-transform "
            >
              <motion.img
                src="/gradient4.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.figure
              style={{
                scale: scale5,
                x: "-50%",
                y: "-50%",
                opacity: scale5Opacity2,
              }}
              className=" absolute left-1/2 top-1/2 h-[100vh] w-[100vh] z-[-20] will-change-transform "
            >
              <motion.img
                src="/gradient3.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.div
              style={
                {
                  x: "-50%",
                  y: "-50%",
                  //  "--squareScale": squareScale,
                  //"--square-opacity-border": squareOpacity2,
                } as any
              }
              className="top-1/2 left-1/2 absolute 
              h-[30rem] 
              w-[30rem]
            "
            >
              <motion.h2
                style={{ y: "-50%", x: "-50%", scale: finalTextScale }}
                className=" will-change-transform  absolute top-1/2 left-[calc(50%+15%)] whitespace-nowrap text-[12.8rem] text-white font-medium "
              >
                <motion.span
                  style={{ opacity: codeInCloudPartOn1 }}
                  className="opacity-0"
                >
                  Code
                </motion.span>
                &nbsp;
                <motion.span
                  className="opacity-0"
                  style={{ opacity: codeInCloudPartOn2 }}
                >
                  in
                </motion.span>
                &nbsp;
                <motion.span
                  className="opacity-0"
                  style={{ opacity: codeInCloudPartOn3 }}
                >
                  the cloud
                </motion.span>
                <motion.span
                  className="opacity-0"
                  style={{ opacity: codeInCloudPartOn4 }}
                >
                  .
                </motion.span>
              </motion.h2>

              <motion.figure
                style={{
                  scale: squareScale,
                  x: "-50%",
                  y: "-50%",
                  opacity: squareOpacity0,
                }}
                className=" absolute left-1/2 z-[1] top-1/2 w-full h-full"
              >
                <motion.img
                  src="/square3.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
              <motion.figure
                style={{
                  scale: squareScale,
                  x: "-50%",
                  y: "-50%",
                  opacity: squareOpacity,
                }}
                className=" absolute left-1/2 z-[0] top-1/2 w-full h-full"
              >
                <motion.img
                  src="/square1.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>

              {/* <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity2,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-1] top-1/2 w-full h-full"
              >
                <motion.img
                  src="/square2.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure> */}
              <motion.figure
                style={
                  {
                    scale: squareScale,
                    opacity: squareOpacity3,
                    x: "-50%",
                    y: "-50%",
                    "--squareOpacity3": squareOpacity3,
                  } as any
                }
                className="absolute left-1/2 z-[-2] top-1/2 w-full h-full
              
    
                              
                "
              >
                <motion.img
                  src="/square3.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity4,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-3] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square4.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>

              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity5,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-4] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square5.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity6,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-5] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square6.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity7,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-6] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square7.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity8,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-7] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square8.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>

              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity9,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-8] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square9.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity10,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-9] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square10.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>

              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity11,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-10] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square11.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity12,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-11] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square12.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>

              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity13,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-12] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square13.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>

              <motion.figure
                style={{
                  scale: squareScale,
                  opacity: squareOpacity14,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-13] top-1/2 w-full h-full
                  
                "
              >
                <motion.img
                  src="/square14.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
            </motion.div>

            <motion.div
              style={
                {
                  "--movesparkText": movesparkText,
                  x: "-50%",
                  y: "calc(50% + var(--movesparkText))",
                  opacity: movesparkTextOpacity,

                  //  "--squareScale": squareScale,
                  //"--square-opacity-border": squareOpacity2,
                } as any
              }
              className="w-[50vw] left-1/2 top-1/2 z-[-18] absolute flex flex-col justify-center items-center gap-4"
            >
              <motion.figure className="h-[25rem] w-[25rem] flex  items-center">
                <motion.img
                  src="/spark.webp"
                  className="  object-cover w-full h-[auto] "
                />
              </motion.figure>
              <p className="text-[4rem]  text-center text-white leading-[120%] [letter_spacing:-0.05rem]">
                Run your code in powerful{" "}
                <span className="text-[#DCFF50]">microVMs</span> and build
                anything without limits. We configure your environment for you
                and keep your
                <span className="text-[#DCFF50]"> code always ready</span>,
                behind a URL.
              </p>
            </motion.div>

            <motion.div
              style={
                {
                  y: "-50%",
                  "--anytimeOpacityText": anytimeOpacityText,
                  x: "-50%",

                  "--anyWhereScale": anytimeLineScale,
                  "--anyWhereOpacity": anytimeOpacity,
                } as any
              }
              className=" left-1/2 top-1/2 z-[-21] after:opacity-[var(--anyWhereOpacity)] after:origin-center after:scale-[var(--anyWhereScale)] absolute after:absolute after:h-[2px] after:w-full after:bg-[linear-gradient(90deg,_rgba(123,_97,_255,_0)_0%,_rgb(123,_97,_255)_49.48%,_rgba(123,_97,_255,_0)_100%)]"
            >
              <h2 className="will-change-transform  whitespace-nowrap text-[12.8rem] text-white font-medium ">
                <motion.span style={{ opacity: anytimeOpacity }}>
                  Anytime,
                </motion.span>
                &nbsp;
                <motion.span style={{ opacity: anyWhereOpacity }}>
                  anywhere.
                </motion.span>
              </h2>
            </motion.div>

            <motion.figure
              style={{
                scale: afterAnyWhereScale,
                opacity: afterAnyWhereOpacity,
                x: "-50%",
                y: "-50%",
              }}
              className="absolute left-1/2 z-[-23] top-1/2 h-[100vh] w-[100vh]
                  
                "
            >
              <motion.img
                src="/gradient6.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.div
              style={{
                x: "-50%",
                y: collaborateOpacityY,
                opacity: collaborateOpacity,
              }}
              className="h-[100vh] w-[120rem] z-24 justify-center items-center  flex absolute left-1/2 top-1/2 max-w-[120rem] mx-auto"
            >
              <div className="basis-[58%]">
                <figure className="w-[100vh]">
                  <img
                    src="/codeimagesize.webp"
                    className="object-cover w-full h-auto "
                  />
                </figure>
              </div>

              <div className="ml-[97px] px-4">
                <div className="h-[100vh] justify-center w-full flex flex-col gap-8">
                  <p className="w-full  text-[3.2rem] text-white font-medium leading-[140%] [letter-spacing:-0.025em]">
                    Code and collaborate from any editor or device:&nbsp;
                    <span className="text-[#DCFF50]">
                      browser, VS Code or iOS
                    </span>
                    <br />
                    <br />
                    Share a link to your code to get feedback, either async or
                    with a&nbsp;
                    <span className="text-[#DCFF50]">live coding</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start items-start">
                    <a className="text-[2rem]">
                      <span className="text-[#DCFF50]">
                        Install VS Code Extension
                      </span>
                    </a>
                    <a className="text-[2rem]">
                      <span className="text-[#DCFF50]">Download iOS App</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="relative z-10 w-full overflow-x-clip">
        <Features />
      </div> */}
    </main>
  );
};

type AnimatedTextProps = {
  text: string | string[];
  el: keyof JSX.IntrinsicElements;
  className: string;
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
}: AnimatedTextProps) => {
  const textArr = Array.isArray(text) ? text : [text];
  const defaultAnimation = {
    initial: {
      ["-webkit-text-stroke"]: "1px #D6FB41",
      color: "transparent",
      opacity: 0,
    },

    final: {
      opacity: 1,
      ["-webkit-text-fill-color"]: "#D6FB41",
      transition: {
        // delay: 1,
        // when: "beforeChildren",
        duration: 2,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="initial"
        // variants={defaultAnimation}
        transition={{
          staggerChildren: 0.05,
          ease: "easeInOut",
        }}
        animate="final"
        className="aria-hidden"
      >
        {textArr.map((line) => {
          return (
            <span className="block" key={line}>
              {line.split(" ").map((word) => {
                return (
                  <span key={word} className="inline-block">
                    {word.split("").map((char, index) => {
                      return (
                        <motion.span
                          key={char}
                          className="inline-block"
                          variants={defaultAnimation}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                    <span>&nbsp;</span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Wrapper>
  );
};
export default CodeSanbox;
