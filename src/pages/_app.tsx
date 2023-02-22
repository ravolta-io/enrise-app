import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${montserrat.className} bg-background h-full bg-cover bg-center `}
      style={{
        backgroundImage: `url("/assets/img/curtain.jpg")`,
      }}
    >
      <Component {...pageProps} />
    </main>
  );
}
