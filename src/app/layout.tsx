"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/lib/store";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
  session: any; // Add session type if known, or replace `any` with the correct type
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>SIL 2.0</title>
        <meta
          name="description"
          content="All-in-one platform to create content, generate captions with Al, and schedule your posts on social media!"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          <SessionProvider session={session} refetchInterval={2 * 60}>
            <Navbar />
            {children}
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
}
