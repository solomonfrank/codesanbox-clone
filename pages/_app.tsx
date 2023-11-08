import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Cousine } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cousine = Cousine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${cousine.variable} bg-background font-body text-text`}
    >
      <Component {...pageProps} />
    </div>
  );
}
