import { motion } from "framer-motion";

export const Repository = () => {
  return (
    <motion.div
      initial="initial"
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1,
        ease: "easeInOut",
        duration: 2,
      }}
      className="h-full opacity-0  absolute right-0 top-[calc(var(--navigation-height)*2)] bottom-0"
    >
      <a className=" p-[48px] w-[40rem] flex flex-col flex-grow gap-[4rem] border border-b border-[#1D1D1D]">
        <div>
          <h2 className="text-[32px] text-white leading-[140%] -tracking-[0.025em]">
            Repositories
          </h2>
          <p className="text-[32px]  opacity-40 text-white">
            Build production-ready projects with your team.
          </p>
        </div>
        <span className="flex gap-1 items-center">
          <span className="text-[2.4rem] text-[#E3FF73]">
            Import repository
          </span>
          <span className="h-[1.8rem] w-[1.8rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="max-w-full max-h-full text-[#E3FF73]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.0661 4C12.9629 4 4 13.1732 4 24.537C4 33.5733 9.75229 41.2405 17.7788 43.9787C18.8489 44.1156 19.1165 43.568 19.1165 43.0203V39.4606C13.498 40.6928 12.294 36.7223 12.294 36.7223C11.3576 34.3948 10.0198 33.7102 10.0198 33.7102C8.147 32.478 10.1536 32.478 10.1536 32.478C12.1602 32.6149 13.2304 34.5317 13.2304 34.5317C14.9695 37.6807 17.9125 36.7223 19.1165 36.1747C19.2503 34.8055 19.7854 33.984 20.4542 33.4364C16.0397 32.8887 11.3576 31.1089 11.3576 23.3048C11.3576 21.1142 12.1602 19.1974 13.3642 17.8283C13.0967 17.2806 12.4278 15.2269 13.498 12.3517C13.498 12.3517 15.237 11.8041 18.9827 14.4054C20.588 13.9947 22.3271 13.7209 24.0661 13.7209C25.8052 13.7209 27.5443 13.9947 29.1496 14.4054C33.029 11.8041 34.6343 12.3517 34.6343 12.3517C35.7045 15.2269 35.0356 17.2806 34.7681 17.8283C36.1058 19.1974 36.7747 21.1142 36.7747 23.3048C36.7747 31.2458 32.0926 32.8887 27.6781 33.4364C28.3469 34.121 29.0158 35.3532 29.0158 37.27V42.8834C29.0158 43.4311 29.4171 44.1156 30.3535 43.8418C38.38 41.1035 43.9985 33.4364 43.9985 24.4001C44.1323 13.1732 35.1694 4 24.0661 4Z"
                fill="currentColor"
                className="c-kVrRSI"
              ></path>
            </svg>
          </span>
        </span>
      </a>

      <a className=" p-[48px] w-[40rem] flex flex-col flex-grow gap-[4rem] border border-b border-[#1D1D1D]">
        <div>
          <h2 className="text-[3.2rem] text-white leading-[140%]">Sandboxes</h2>
          <p className="text-[3.2rem]  opacity-40 text-white">
            Prototype faster. Code instantly.
          </p>
        </div>
        <span className="flex gap-1 items-center">
          <span className="text-[2.4rem] text-[#E3FF73]">Create sandbox</span>
          <span className="h-[1.8rem] w-[1.8rem] flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full max-h-full text-[#E3FF73]"
            >
              <path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>
            </svg>
          </span>
        </span>
      </a>
    </motion.div>
  );
};
