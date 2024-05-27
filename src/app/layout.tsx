"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/lib/store";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>SIL 2.0</title>
        <meta
          name="description"
          content="All-in-one platform to create content, generate captions with Al, and schedule your
              posts on social media!"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <link rel="shortcut icon" href="assets/images/logo.svg" /> */}
      </Head>
      <html lang="en">
        <Provider store={store}>
          <body className={inter.className}>{children}</body>
        </Provider>
      </html>
    </>
  );
}
