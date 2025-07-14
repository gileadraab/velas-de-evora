import type { AppProps } from "next/app";
import { playfair, inter, whisper } from "../styles/fonts";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${playfair.variable} ${inter.variable} ${whisper.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
