import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <body className="antialiased flex flex-col h-dvh w-screen items-center justify-center p-4 bg-gray-50 text-3xl text-gray-700 font-black dark:text-gray-300 dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
