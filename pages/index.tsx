import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TeamTree } from "@/icons/team-tree";
import Marquee from "react-fast-marquee";
import { Navigation } from "@/components/navigation";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiGatsbyFill, RiGatsbyLine } from "react-icons/ri";
import { TbBrandAngular } from "react-icons/tb";
import { TbBrandNuxt } from "react-icons/tb";
import { SiDeno } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiAstro } from "react-icons/si";
import { SiSvelte } from "react-icons/si";
import { Repository } from "@/components/repository";
import { AnimatedText } from "@/components/hero-text";

const brands = [
  { logo: FaReact, text: "React + Vite" },
  { logo: SiNextdotjs, text: "Next.js Commerce" },
  { logo: RiGatsbyFill, text: "Gatsby" },
  { logo: RiGatsbyLine, text: "Web Image Crawler" },
  { logo: TbBrandAngular, text: "Angular" },
  { logo: FaVuejs, text: "Vue + Vite" },
  { logo: TbBrandNuxt, text: "Nuxt" },
  { logo: SiDeno, text: "Deno" },
  { logo: SiTypescript, text: "Typescript" },
  { logo: SiTypescript, text: "Typescript + React" },
  { logo: SiAstro, text: "Astro blog" },
  { logo: SiSvelte, text: "Svelte" },
];

const CodeSanbox = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [
      0, 0.1, 0.13, 0.15, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.26, 0.28, 0.3,
      0.31, 1,
    ],
    [2.7, 2.5, 2.3, 2.1, 1.7, 1.6, 1.3, 1.25, 1.1, 1, 0.8, 0.75, 0.5, 0.1, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.13, 0.2, 0.28, 0.3, 0, 0.7, 1],
    [0.3, 0.2, 0.1, 0, 0, 0, 0, 0, 0]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.13, 0.28, 0.29, 0.3, 0.7, 1],
    [0, 0.75, 1, 1, 0, 0, 0, 0]
  );

  const squareScale = useTransform(
    scrollYProgress,
    [
      0, 0.1, 0.13, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.35, 0.37, 0.39, 0.45,
      0.49,
    ],
    [2.5, 2.2, 2.1, 2, 1.85, 1.8, 1.75, 1.6, 1.5, 1.0, 0.98, 0.98, 0.98, 0.98]
  );

  const squareOpacity0 = useTransform(
    scrollYProgress,
    [0, 0.09, 0.1],
    [1, 1, 0]
  );

  const squareOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15],
    [1, 1, 0]
  );

  const squareOpacity3 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.16, 0.17],
    [0, 1, 1, 0]
  );
  const squareOpacity4 = useTransform(
    // squareOpacity4 => square 0.16
    scrollYProgress,
    [0, 0.17, 0.18, 0.19],
    [0, 1, 0.9, 0]
  );
  const squareOpacity5 = useTransform(
    scrollYProgress,
    [0, 0.18, 0.19, 0.21, 1],
    [0, 0, 1, 0, 0]
  );

  const squareOpacity6 = useTransform(
    scrollYProgress,
    [0, 0.21, 0.22, 0.23],
    [1, 1, 1, 0]
  );

  const squareOpacity7 = useTransform(
    scrollYProgress,
    [0, 0.23, 0.24, 0.25],
    [0.6, 0.7, 1, 0]
  );

  const squareOpacity8 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.28, 0.29],
    [1.7, 0.8, 1, 0]
  );

  const squareOpacity9 = useTransform(
    scrollYProgress,
    [0, 0.29, 0.31],
    [1, 1, 0]
  );

  const squareOpacity10 = useTransform(
    scrollYProgress,
    [0, 0.31, 0.35],
    [1, 1, 0]
  );

  const squareOpacity11 = useTransform(
    scrollYProgress,
    [0, 0.35, 0.37],
    [1, 1, 0]
  );

  const squareOpacity12 = useTransform(
    scrollYProgress,
    [0, 0.37, 0.39, 0.49, 0.7, 0.71, 0.8],
    [1, 1, 1, 0, 0, 0, 0]
  );

  const squareOpacity13 = useTransform(
    scrollYProgress,
    [0, 0.43, 0.45, 0.47, 0.52, 0.7],
    [0, 1, 1, 1, 0, 0]
  );
  const squareOpacity14 = useTransform(
    scrollYProgress,
    [0, 0.47, 0.49, 0.52, 0.7, 0.8],
    [0, 1, 1, 0, 0, 0]
  );

  const codeInCloudPartOn1 = useTransform(
    scrollYProgress,
    [0, 0.29, 0.3, 0.32, 0.33, 0.41, 0.42, 0.71, 1],
    [0, 0, 0.8, 1, 1, 0.3, 0, 0, 0]
  );

  const codeInCloudPartOn2 = useTransform(
    scrollYProgress,
    [0, 0.29, 0.3, 0.32, 0.33, 0.47, 0.7, 0.75],
    [0, 0, 0.8, 1, 1, 0, 0, 0]
  );

  const codeInCloudPartOn3 = useTransform(
    scrollYProgress,
    [0, 0.29, 0.3, 0.32, 0.33, 0.37, 0.39, 0.49, 0.7, 0.75],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
  );
  const codeInCloudPartOn4 = useTransform(
    scrollYProgress,
    [0, 0.39, 0.4, 0.5, 0.71, 0.8, 1],
    [0, 0, 1, 0, 0, 0, 0]
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
    [0, 0.4, 0.42, 0.43, 0.45, 0.47, 0.49],

    [0, 0.65, 1.0, 1.25, 1.8, 1.9, 2.0]
  );

  const scale2Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.42, 0.43, 0.45, 0.47, 0.5, 0.51, 0.52, 0.7, 0.8],

    [0, 0.85, 0.5, 0.45, 0.35, 0.3, 0.15, 0.1, 0, 0, 0]
  );

  const scale3Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.42, 0.43, 0.45, 0.47, 0.49, 0.5, 0.51, 0.52, 0.7, 0.8],

    [0, 0, 0, 0, 0.1, 0.9, 0.95, 0.3, 0.3, 0, 0, 0]
  );

  // scale code image
  const scale4 = useTransform(
    scrollYProgress,
    [0, 0.495, 0.51, 0.53, 0.55, 0.6, 0.7],

    [0, 1.9, 1.9, 1.9, 1.8, 1.65, 1.63]
  );

  const scale4Opacity = useTransform(
    scrollYProgress,
    [0, 0.49, 0.5, 0.51, 0.53, 0.55, 0.6, 0.62, 0.7],

    [0, 0, 0.2, 1, 1, 1, 0.9, 0, 0]
  );

  // scale 5
  const scale5 = useTransform(
    scrollYProgress,
    // [0, 0.51, 0.53, 0.56, 0.57, 0.58, 0.59, 0.6],

    [
      0, 0.6, 0.61, 0.61, 0.62, 0.64, 0.655, 0.67, 0.675, 0.68, 0.69, 0.7, 0.74,
      0.75,
    ],
    [0, 0, 2, 2.5, 2.6, 2.7, 3.1, 2.8, 2.6, 1.6, 1, 1, 1, 1]
  );
  const scale5Opacity1 = useTransform(
    scrollYProgress,
    [0, 0.59, 0.6, 0.61, 0.62, 0.64, 0.655, 0.67, 0.675, 0.68, 0.69, 0.7],

    [0, 0, 0, 0.1, 0.35, 0.4, 1, 0.6, 0.5, 0.2, 0, 0]
  );

  const scale5Opacity2 = useTransform(
    scrollYProgress,
    [0, 0.59, 0.6, 0.61, 0.62, 0.64, 0.655, 0.67, 0.675, 0.68, 0.7],

    [0, 0, 0, 0, 1, 0.1, 0.15, 0.25, 0.23, 0, 0]
  );

  const movesparkText = useTransform(
    scrollYProgress,
    [0, 0.6, 0.655, 0.67, 0.68, 0.69],

    ["0%", "0%", "-100%", "-110%", "-120%", "-130%"]
  );

  const movesparkTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7],

    [0, 0, 0, 0.7, 1, 0, 0, 0]
    // 0, 0, 0, 0.7, 0.8, 1, 0
  );

  const anytimeOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.68, 0.69, 0.7],

    [0, 0, 0, 0, 1, 0]
    //0, 0.1, 0.5, 1, 0.8,
  );

  const anyWhereOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.69, 0.695, 0.7],

    [0, 0, 0, 1, 0]
    //0.1, 0.5, 1, 1, 0.7
  );

  const anytimeOpacityText = useTransform(
    scrollYProgress,
    [0, 0.6, 0.88, 0.93],

    [0, 0, "10px", "20px"]
  );

  const anytimeLineScale = useTransform(
    scrollYProgress,
    [0, 0.88, 0.9, 0.93],

    [0, 0, 0.01, 1]
  );

  const afterAnyWhereScale = useTransform(
    scrollYProgress,
    [
      0, 0.69, 0.7, 0.71, 0.72, 0.75, 0.77, 0.8, 0.83, 0.85, 0.91, 0.92, 0.93,
      0.94, 0.95, 0.97, 0.98,
    ],

    [
      0.95, 1.1, 1.5, 1.7, 1.8, 2, 2.3, 3.5, 6.5, 6, 5, 4.5, 4.3, 4.0, 3.7, 3,
      2.8,
    ]
  );

  const afterAnyWhereOpacity = useTransform(
    scrollYProgress,
    [
      0, 0.1, 0.28, 0.69, 0.7, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.83, 0.84,
      0.85, 0.91, 0.95,
    ],

    [0, 0, 0, 0, 0.4, 0.45, 0.5, 1, 1, 0.5, 0.4, 0, 0, 0, 0, 0]
  );

  const afterAnyWhere1Opacity = useTransform(
    scrollYProgress,
    [
      0, 0.28, 0.5, 0.69, 0.7, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.83, 0.84,
      0.845, 0.85, 0.91, 0.95, 0.97, 0.98,
    ],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.9, 0.65, 0.6, 0.45, 0.1]
  );

  const collaborateOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.71, 0.75, 0.76, 0.78],

    [0, 0, 0.1, 1, 1, 1]
  );

  const collaborateOpacityY = useTransform(
    scrollYProgress,
    [
      0, 0.69, 0.7, 0.71, 0.72, 0.75, 0.76, 0.77, 0.8, 0.83, 0.85, 0.86, 0.87,
      0.9,
    ],

    [
      "-20%",
      "20%",
      "-35%",
      "-40%",
      "-45%",
      "-50%",
      "-60%",
      "-70%",
      "-95%",
      "-150%",
      "-250%",
      "-260%",
      "-270%",
      "-300%",
    ]
  );

  const shortebOpacityFirst = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8, 0.83, 0.84, 0.85, 0.86, 0.9, 0.92, 0.95],

    [0, 0, 0, 0, 0, 0.5, 1, 0.5, 0.3, 0]
  );

  const shortebOpacityTwo = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8, 0.83, 0.84, 0.85, 0.86, 0.88, 0.97],

    [0, 0, 0, 0, 0, 0, 0.2, 1, 0]
  );

  const shortebOpacityThree = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8, 0.83, 0.84, 0.85, 0.86, 0.88, 0.9, 0.91, 0.97, 0.98],

    [0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1, 0.05, 0]
  );

  const collaborateThreeScale = useTransform(
    scrollYProgress,
    [0, 0, 0.85, 0.91, 0.95, 0.97, 1],

    [0, 0, 3.5, 3.5, 3.5, 3, 2.9]
  );

  const collaborateOpacitythree = useTransform(
    scrollYProgress,
    [
      0, 0.7, 0.8, 0.83, 0.84, 0.85, 0.86, 0.88, 0.9, 0.91, 0.95, 0.97, 0.98,
      0.99, 1,
    ],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.7, 1, 0.5, 0]
  );

  const opacityTeam = useTransform(
    scrollYProgress,
    [0, 0.95, 0.97, 0.975, 0.98, 0.99],

    [0, 0, 0, 0.2, 0.7, 1]
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
    <>
      <main className="bg-[#000]">
        <div className="bg-[#161616] z-50 h-screen relative">
          <Navigation />
          <header className=" h-[var(--navigation-height)] bg-[#161616] border border-b border-[#1D1D1D]">
            <div className="max-w-[120rem] mx-auto h-full">
              <div className="flex items-center justify-center h-full">
                <div className="flex gap-2 items-center mr-auto justify-center text-sm">
                  <span className=" rounded-full  px-[8px] py-[1px] text-[12px] text-white bg-[#644ed7]">
                    New
                  </span>
                  <h3 className="text-[#d1d1d1]">
                    Introducing a Unified Development Platform
                  </h3>
                  <p className="text-[#a3a3a3]">
                    Start coding with our new Devboxes and evolved Sandboxes.
                  </p>
                </div>
                <p className="text-[#e3ff73] text-sm">Learn more</p>
              </div>
            </div>
          </header>
          <div className="max-w-[120rem] mx-auto pt-72 ">
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

          <Repository />
        </div>
        <div className=" z-50 text-white w-full h-[90px] relative bg-[#161616] hover:opacity-60">
          <Marquee className="h-full ">
            <div className="h-full flex items-center gap-[50px] group [&_div:last-child]:mr-7 ">
              {brands.map((item, idx) => (
                <div
                  key={item.text}
                  className={`py-6 hover:opacity-100 cursor-pointer`}
                >
                  <a className="flex gap-2 items-center ">
                    <item.logo size={32} />

                    <span className="text-[2rem]">{item.text}</span>
                  </a>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <div className="relative z-10 w-full overflow-x-clip">
          <div
            style={
              {
                "--opacity-border": opacity,
                "--scale": scale,
              } as any
            }
            className=" h-[1000vh] w-full"
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
                style={{
                  scale: scale,
                  x: "-50%",
                  y: "-50%",
                  opacity: opacity1,
                }}
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
                  className=" will-change-transform  absolute top-1/2 left-[calc(50%+2%)] whitespace-nowrap text-[12.8rem] text-white font-medium "
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
                  className="absolute left-1/2 z-[-2] top-1/2 w-full h-full"
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

              {/* <div>Start Here</div> */}

              <motion.figure
                style={{
                  scale: afterAnyWhereScale,
                  opacity: afterAnyWhereOpacity,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-23] h-[100vh] top-1/2 w-[100vh] will-change-transform
                  
                "
              >
                <motion.img
                  src="/gradient6.webp"
                  className=" absolute inset-0 object-cover w-full h-full"
                />
              </motion.figure>

              <motion.figure
                style={{
                  scale: afterAnyWhereScale,
                  opacity: afterAnyWhere1Opacity,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-23]  h-[100vh] top-1/2 w-[100vh] will-change-transform    
                "
              >
                <motion.img
                  src="/gradient7.webp"
                  className=" absolute inset-0 object-cover w-full h-full"
                />
              </motion.figure>

              <motion.figure
                style={{
                  scale: collaborateThreeScale,
                  opacity: collaborateOpacitythree,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-23]  h-[100vh] top-1/2 w-[100vh] will-change-transform"
              >
                <motion.img
                  src="/gradient8.webp"
                  className=" absolute inset-0 object-cover w-full h-full"
                />
              </motion.figure>

              <motion.div
                style={{
                  x: "-50%",
                  y: collaborateOpacityY,
                  opacity: collaborateOpacity,
                }}
                className=" h-[100vh] w-[120rem] z-[24] flex flex-col absolute left-1/2 top-1/2 max-w-[120rem] mx-auto"
              >
                <div className="items-center  flex justify-center ">
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
                        Share a link to your code to get feedback, either async
                        or with a&nbsp;
                        <span className="text-[#DCFF50]">live coding</span>
                      </p>
                      <div className="flex flex-col gap-4 justify-start items-start">
                        <a className="text-[2rem]">
                          <span className="text-[#DCFF50]">
                            Install VS Code Extension
                          </span>
                        </a>
                        <a className="text-[2rem]">
                          <span className="text-[#DCFF50]">
                            Download iOS App
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="mb-[6rem] text-[12.8rem] text-white text-center font-medium leading-[90%]">
                    Accelerate your git workflow.
                  </h2>
                  <div className="flex">
                    <div className="flex flex-col gap-3 justify-center max-w-[42rem]">
                      <p className="text-[3.2rem] text-white leading-[140%] [letter-spacing:-0.025em]">
                        Never wait for a dev server again. We make all your
                        branches &nbsp;
                        <span className="text-[#DCFF50]">
                          instantly available
                        </span>
                      </p>
                      <p className="text-[3.2rem] text-white leading-[140%] [letter-spacing:-0.025em]">
                        Hop between branches and open PRs with our branches
                        &nbsp;
                        <span className="text-[#DCFF50]">
                          built-in git controls
                        </span>
                      </p>
                    </div>
                    <figure>
                      <img
                        src="/album.webp"
                        className="w-full h-auto [mask-image:linear-gradient(-90deg,_black_50%,_transparent_100%)]"
                      />
                    </figure>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ x: "-50%", y: "-50%" }}
                className="absolute left-1/2 z-[100]  h-[100vh] top-1/2 w-[100vh] flex justify-center items-center"
              >
                <h3 className="max-w-[90rem] text-[12.8rem] text-center text-white leading-[90%] font-medium">
                  <motion.span style={{ opacity: shortebOpacityFirst }}>
                    Shorten
                  </motion.span>
                  &nbsp;
                  <motion.span style={{ opacity: shortebOpacityTwo }}>
                    the review
                  </motion.span>
                  &nbsp;
                  <motion.span style={{ opacity: shortebOpacityThree }}>
                    cycle.
                  </motion.span>
                </h3>
              </motion.div>

              <motion.div
                style={{ x: "-50%", y: "-50%", opacity: opacityTeam }}
                className="absolute left-1/2 z-[100]   h-[100vh] top-1/2  w-[120rem] flex justify-center items-center mx-auto"
              >
                <div className="max-w-[40rem] w-[48%] px-4 flex justify-center flex-col gap-[3.2rem]">
                  <p className="text-[3.2rem] text-white leading-[140%]">
                    We give you a
                    <span className="text-[#DCFF50]">
                      live dev environment for every PR
                    </span>
                  </p>
                  <p className="text-[3.2rem] text-white leading-[140%]">
                    <span className="text-[#DCFF50]">
                      No need to switch context.
                    </span>
                    Open the PR to see the code, tests and a preview, make any
                    necessary changes, and merge it.
                  </p>
                </div>
                <div className="max-w-[58.33%] flex flex-col justify-center">
                  <TeamTree
                    className="max-h-full max-w-full  [&_path]:animate-line-stroke   
                [&_path]:[stroke-dasharray:1067] [&_path]:[stroke-dashoffset:1067]
                [&_.circle]:scale-0 [&_.circle]:[transform-box:fill-box]
                [&_.circle]:animate-circle
                [&_.text]:opacity-0
                [&_.text1]:animate-text-fadeIn1
                [&_.text2]:animate-text-fadeIn2
                [&_.text3]:animate-text-fadeIn3
                [&_.text4]:animate-text-fadeIn4
                
                "
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="max-w-[120rem] mx-auto mt-[40rem]">
          <h2 className="text-[9.6rem] text-white text-center mx-auto max-w-[60.8rem] leading-[100%] font-medium -tracking-[0.05em] ">
            From idea <br />
            to production <br />{" "}
            <span className="text-[#E3FF73]">in record time</span>
          </h2>
        </div>
      </main>

      <div className="fixed bg-background flex items-center justify-center z-40 w-full top-0 left-0 right-0 bottom-0 w h-full md:hidden">
        <p className="text-white text-[32px]">
          {" "}
          Website available only on desktop
        </p>
      </div>
    </>
  );
};

export default CodeSanbox;
