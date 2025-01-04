import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased flex flex-col w-screen items-center p-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
