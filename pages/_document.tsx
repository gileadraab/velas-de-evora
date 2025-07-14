// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import { playfair, inter, whisper } from "../styles/fonts";

export default function Document() {
  return (
    <Html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${whisper.variable}`}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
