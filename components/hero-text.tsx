import { motion, useScroll, useTransform } from "framer-motion";

type AnimatedTextProps = {
  text: string | string[];
  el: keyof JSX.IntrinsicElements;
  className: string;
};

export const AnimatedText = ({
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
