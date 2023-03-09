import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/code.svg" rel="shortcut icon" />
        <link href="/code.svg" rel="manifest" />
        <link href="/code.svg" rel="apple-touch-icon" sizes="180x180" />
        <link href="/code.svg" rel="icon" sizes="32x32" type="image/svg" />
        <link href="/code.svg" rel="icon" sizes="16x16" type="image/png" />
        <link color="#4a9885" href="/code.svg" rel="mask-icon" />
        <meta content="#ffffff" name="theme-color" />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
