import {
  BranchIcon,
  FlowIcon,
  Intellisense,
  KeyboardIcon,
  PreBuildIcon,
  PreviewIcon,
} from "@/icons";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const contents = [
  {
    icon: PreBuildIcon,
    title: "Prebuilds",
    text: "CodeSandbox continuously prebuilds your branches. This means no more waiting for dependencies to be downloaded and builds to finish.",
  },
  {
    icon: Intellisense,
    title: "IntelliSense",
    text: "Go beyond syntax highlighting and autocomplete. With smart completions based on variable types, function definitions, and imported modules.",
  },
  {
    icon: FlowIcon,
    title: "Built for flow",
    text: "A completely redesigned experience to keep you in flow.",
  },
  {
    icon: BranchIcon,
    title: "Magic Branch Management",
    text: "Organize your development workflow and help your team move work forward",
  },
  {
    icon: KeyboardIcon,
    title: "Keyboard first design",
    text: "Quick access makes for an efficient workflow. Navigate quickly with our extensive keyboard shortcuts.",
  },
  {
    icon: PreviewIcon,
    title: "Live preview",
    text: "See changes as you make them. With Hot reload Previews see your changes instantly. ",
  },
];

export const Features = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.div
      style={{ opacity, y }}
      ref={targetRef}
      className=" max-w-[120rem] w-full  mx-auto grid grid-cols-3 gap-40 py-96 place-items-center"
    >
      {contents.map((content) => {
        const Icon = content.icon;
        return (
          <div key={content.text}>
            <span className="h-32 w-32 mb-4 flex justify-center items-center bg-[#151515]  rounded-[1.8rem]">
              <Icon className="h-14 w-14 [&_path]:animate-icon-stroke  [&_path]:stroke-white  [&_path]:[stroke-dasharray:400] [&_path]:[stroke-dashoffset:0]" />
            </span>
            <h3 className="text-xl text-white mb-2">{content.title}</h3>
            <p className="text-md">{content.text}</p>
          </div>
        );
      })}
    </motion.div>
  );
};
