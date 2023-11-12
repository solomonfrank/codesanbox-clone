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
    [0, 0.1, 0.3, 0.4, 0.7, 0.8, 1],
    [2.8, 2.8, 2, 1.8, 1, 1, 0]
  );
  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4, 0.7, 0.8, 1],
    [3, 2.8, 2.5, 2, 1, 1, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4, 0.7, 0.8, 1],
    [1, 0.5, 0.6, 0, 0, 0, 0]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4, 0.5, 0.7, 0.8, 1],
    [0, 0.4, 0.4, 0.9, 1, 1, 1, 1]
  );

  const squareScale = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.7, 0.8, 1],
    [1.72, 1.5, 1, 0.9, 0.5]
  );

  const squareOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.7, 0.8, 1],
    [1, 0, 0, 0, 0]
  );

  const squareOpacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.7, 0.8, 1],
    [0, 1, 0, 0, 0]
  );

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
              className=" absolute left-1/2 top-1/2 h-[100vh] w-[100vh] z-[0] "
            >
              <motion.img
                src="/gradient.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.figure
              style={{ scale: scale1, x: "-50%", y: "-50%", opacity: opacity1 }}
              className=" absolute left-1/2 z-[-1] top-1/2 h-[100vh] w-[100vh] "
            >
              <motion.img
                src="/gradient1.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.figure
              style={{ scale: scale1, x: "-50%", y: "-50%", opacity: opacity1 }}
              className=" absolute left-1/2 z-[-1] top-1/2 h-[100vh] w-[100vh] "
            >
              <motion.img
                src="/gradient1.webp"
                className="object-cover w-full h-full "
              />
            </motion.figure>

            <motion.div
              style={
                {
                  x: "-50%",
                  y: "-50%",
                  "--squareScale": squareScale,
                  "--square-opacity-border": squareOpacity2,
                } as any
              }
              className="top-1/2 left-1/2 absolute 
              h-[30rem] 
              w-[30rem]
            "
            >
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
                style={{
                  scale: squareScale,
                  opacity: squareOpacity2,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute left-1/2 z-[-1] top-1/2 w-full h-full
                before:absolute before:inset-0 before:scale-[var(--squareScale)] 
                before:border-[1px] before:border-[#CEF144] 
                before:h-full before:w-full
                before:opacity-[var(--square-opacity-border)]
                
                
                "
              >
                <motion.img
                  src="/square2.webp"
                  className="object-cover w-full h-full "
                />
              </motion.figure>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-x-clip">
        <Features />
      </div>
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
