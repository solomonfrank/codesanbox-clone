import { Logo } from "@/icons/logo";
import Link from "next/link";

export const Navigation = () => {
  return (
    <header className=" h-[var(--navigation-height)] bg-[#161616] border border-b border-[#1D1D1D]">
      <div className="max-w-[120rem] mx-auto h-full">
        <nav className="flex h-full items-center  justify-center font-medium ">
          <div className="mr-8">
            <Link href="/">
              <Logo className=" [&_path]:[color:#fff]" />
            </Link>
          </div>
          <ul className="flex mr-auto gap-7 h-full items-center text-[1.2rem]">
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Use Cases</Link>
            </li>
            <li>
              <Link href="/">iOs</Link>
            </li>
            <li>
              <Link href="/">Discover</Link>
            </li>
            <li>
              <Link href="/">Docs</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <Link href="/">Enterprise</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
          </ul>

          <div className="flex  gap-3 text-[1.2rem] items-center">
            <Link href="/" className="mr-4">
              Sign in
            </Link>
            <Link
              href="/"
              className="bg-[#EAFF96] text-[#343434] py-[8px] px-[12px] rounded-[4px] "
            >
              Try for free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
